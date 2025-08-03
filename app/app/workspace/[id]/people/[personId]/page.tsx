'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { EmojiPicker } from '@/app/components/EmojiPicker';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Edit2, Trash2 } from 'lucide-react';
import { Breadcrumb } from '@/app/components/Breadcrumb';
import { usePerson, useUpdatePerson } from '@/lib/hooks/use-people';
import { useMilestones, useCreateMilestone, useUpdateMilestone, useDeleteMilestone } from '@/lib/hooks/use-milestones';
import { useWorkspace } from '@/lib/hooks/use-workspaces';
import { PersonDetailSkeleton } from '@/components/ui/page-skeletons';

export default function PersonPage() {
  const params = useParams();
  const router = useRouter();
  const workspaceId = params.id as string;
  const personId = params.personId as string;
  
  const { data: workspace } = useWorkspace(workspaceId);
  const { data: person, isLoading: personLoading } = usePerson(personId);
  const { data: milestones = [], isLoading: milestonesLoading } = useMilestones(personId);
  const updatePerson = useUpdatePerson();
  const createMilestone = useCreateMilestone();
  const updateMilestone = useUpdateMilestone();
  const deleteMilestone = useDeleteMilestone();
  
  const [isEditing, setIsEditing] = useState(false);
  const [newMilestone, setNewMilestone] = useState('');
  const [editingMilestoneId, setEditingMilestoneId] = useState<string | null>(null);
  const [editingMilestoneText, setEditingMilestoneText] = useState('');
  
  const firstName = person?.first_name || '';
  const lastName = person?.last_name || '';
  const alias = person?.alias || '';
  const emoji = person?.emoji || '👤';
  const isLoading = personLoading || milestonesLoading;

  const handleAddMilestone = () => {
    if (!newMilestone.trim()) return;

    createMilestone.mutate({
      description: newMilestone.trim(),
      people_id: personId
    }, {
      onSuccess: () => setNewMilestone('')
    });
  };

  const handleDeleteMilestone = (id: string) => {
    deleteMilestone.mutate({ id, personId });
  };

  const handleEditMilestone = (id: string, description: string) => {
    setEditingMilestoneId(id);
    setEditingMilestoneText(description);
  };

  const handleSaveMilestone = () => {
    if (!editingMilestoneId || !editingMilestoneText.trim()) return;

    updateMilestone.mutate({
      id: editingMilestoneId,
      updates: { description: editingMilestoneText.trim() }
    }, {
      onSuccess: () => {
        setEditingMilestoneId(null);
        setEditingMilestoneText('');
      }
    });
  };

  const handleEmojiChange = (newEmoji: string) => {
    if (!person) return;
    
    updatePerson.mutate({
      id: person.id,
      updates: { emoji: newEmoji }
    });
  };

  if (isLoading) {
    return <PersonDetailSkeleton />;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <Breadcrumb
          items={[
            {
              label: 'Dashboard',
              href: '/app/dashboard'
            },
            ...(workspace ? [{
              label: workspace.name,
              href: `/app/workspace/${workspaceId}`,
              emoji: workspace.emoji
            }] : [])
          ]}
        />

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-start gap-6">
              <EmojiPicker
                selectedEmoji={emoji}
                onEmojiSelect={handleEmojiChange}
              />
              <div className="flex-1">
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold text-foreground">
                    {alias || `${firstName} ${lastName}`}
                  </h1>
                  {alias && (
                    <p className="text-muted-foreground">
                      {firstName} {lastName}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Hitos</CardTitle>
              <Button
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
                variant={isEditing ? "outline" : "default"}
              >
                {isEditing ? 'Terminar edición' : 'Editar'}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {milestones.length === 0 && !isEditing ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No hay hitos aún</p>
                  <p className="text-sm text-muted-foreground mt-2">Haz clic en editar para agregar algunos</p>
                </div>
              ) : (
                milestones.map((milestone) => (
                  <div key={milestone.id} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-all duration-200 group">
                    {editingMilestoneId === milestone.id ? (
                      <Input
                        type="text"
                        value={editingMilestoneText}
                        onChange={(e) => setEditingMilestoneText(e.target.value)}
                        onBlur={handleSaveMilestone}
                        onKeyDown={(e) => e.key === 'Enter' && handleSaveMilestone()}
                        className="flex-1"
                        autoFocus
                      />
                    ) : (
                      <>
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="flex-1">{milestone.description}</span>
                        {isEditing && (
                          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => handleEditMilestone(milestone.id, milestone.description)}
                            >
                              <Edit2 className="w-4 h-4" />
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => handleDeleteMilestone(milestone.id)}
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))
              )}

              {isEditing && (
                <div className="flex gap-3 mt-6 p-4 bg-muted/30 rounded-lg">
                  <Input
                    type="text"
                    value={newMilestone}
                    onChange={(e) => setNewMilestone(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAddMilestone()}
                    placeholder="Agregar nuevo hito..."
                    className="flex-1"
                  />
                  <Button
                    onClick={handleAddMilestone}
                    variant="default"
                  >
                    Agregar
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}