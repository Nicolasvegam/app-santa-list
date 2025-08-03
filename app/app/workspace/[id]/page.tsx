'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { EmojiPicker } from '@/app/components/EmojiPicker';
import { ChevronLeft, Plus, Users, Edit3 } from 'lucide-react';
import { Breadcrumb } from '@/app/components/Breadcrumb';
import { useWorkspace, useUpdateWorkspace } from '@/lib/hooks/use-workspaces';
import { usePeople } from '@/lib/hooks/use-people';
import { WorkspaceSkeleton } from '@/components/ui/page-skeletons';

export default function WorkspacePage() {
  const params = useParams();
  const router = useRouter();
  const workspaceId = params.id as string;
  
  const { data: workspace, isLoading: workspaceLoading } = useWorkspace(workspaceId);
  const { data: people = [], isLoading: peopleLoading } = usePeople(workspaceId);
  const updateWorkspace = useUpdateWorkspace();
  
  const [isEditingName, setIsEditingName] = useState(false);
  const [name, setName] = useState('');

  const handleNameSave = () => {
    if (!workspace || !name.trim()) return;
    
    updateWorkspace.mutate({
      id: workspace.id,
      updates: { name }
    }, {
      onSuccess: () => {
        setIsEditingName(false);
      }
    });
  };

  const handleEmojiChange = (newEmoji: string) => {
    if (!workspace) return;
    
    updateWorkspace.mutate({
      id: workspace.id,
      updates: { emoji: newEmoji }
    });
  };

  const isLoading = workspaceLoading || peopleLoading;
  const emoji = workspace?.emoji || '🏠';

  if (isLoading) {
    return <WorkspaceSkeleton />;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            {
              label: 'Dashboard',
              href: '/app/dashboard'
            },
            {
              label: workspace?.name || '',
              emoji: emoji
            }
          ]}
        />

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <EmojiPicker
                selectedEmoji={emoji}
                onEmojiSelect={handleEmojiChange}
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  {isEditingName ? (
                    <Input
                      type="text"
                      value={name || workspace?.name || ''}
                      onChange={(e) => setName(e.target.value)}
                      onBlur={handleNameSave}
                      onKeyPress={(e) => e.key === 'Enter' && handleNameSave()}
                      className="text-2xl font-bold"
                      autoFocus
                    />
                  ) : (
                    <h1 className="text-2xl font-bold">{workspace?.name}</h1>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setIsEditingName(!isEditingName);
                      if (!isEditingName) {
                        setName(workspace?.name || '');
                      }
                    }}
                    className="h-8 w-8"
                  >
                    <Edit3 className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-muted-foreground">Espacio de trabajo</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Personas
          </h2>
          <p className="text-muted-foreground mt-1">Gestiona las personas en este espacio</p>
        </div>
        
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          <Link href={`/app/workspace/${workspaceId}/people/new`}>
            <Card className="h-44 cursor-pointer hover:shadow-md transition-all duration-200 border-2 border-dashed border-border hover:border-primary/50 hover-lift group">
              <CardContent className="h-full flex items-center justify-center p-6">
                <div className="text-center">
                  <Plus className="w-10 h-10 mx-auto mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
                  <p className="text-sm font-medium">Agregar Persona</p>
                </div>
              </CardContent>
            </Card>
          </Link>

          {people.map((person) => (
            <Link key={person.id} href={`/app/workspace/${workspaceId}/people/${person.id}`}>
              <Card className="h-44 cursor-pointer hover:shadow-md transition-all duration-200 hover:border-primary/50 hover-lift group">
                <CardContent className="h-full flex flex-col items-center justify-center p-6">
                  <div className="text-4xl mb-3 text-primary">
                    {person.emoji || '👤'}
                  </div>
                  <h3 className="text-sm font-medium text-center line-clamp-2">
                    {person.alias || `${person.first_name} ${person.last_name}`}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">Ver hitos</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}