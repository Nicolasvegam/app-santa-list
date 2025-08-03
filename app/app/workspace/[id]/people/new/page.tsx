'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { EmojiPicker } from '@/app/components/EmojiPicker';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb } from '@/app/components/Breadcrumb';
import { useCreatePerson } from '@/lib/hooks/use-people';
import { useWorkspace } from '@/lib/hooks/use-workspaces';
import { Loader } from '@/components/ui/loader';

export default function NewPerson() {
  const router = useRouter();
  const params = useParams();
  const workspaceId = params.id as string;
  const createPerson = useCreatePerson();
  const { data: workspace } = useWorkspace(workspaceId);
  
  const [emoji, setEmoji] = useState('👤');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [alias, setAlias] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!workspaceId || (!firstName.trim() && !alias.trim())) return;

    createPerson.mutate({
      world_space_id: workspaceId,
      first_name: firstName.trim(),
      last_name: lastName.trim(),
      alias: alias.trim(),
      emoji
    }, {
      onSuccess: () => router.push(`/app/workspace/${workspaceId}`)
    });
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
            }] : []),
            {
              label: 'Nueva Persona'
            }
          ]}
        />
        
        <div className="flex items-center justify-center mt-8">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl">Agregar Persona</CardTitle>
              <p className="text-sm text-muted-foreground mt-2">
                Añade un nuevo miembro a {workspace?.name || 'este espacio'}
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="text-center">
                  <Label className="text-sm mb-3 block">
                    Icono de la persona
                  </Label>
                  <EmojiPicker
                    selectedEmoji={emoji}
                    onEmojiSelect={setEmoji}
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="alias" className="text-sm mb-2 block">
                      Alias <span className="text-muted-foreground text-sm">(opcional)</span>
                    </Label>
                    <Input
                      type="text"
                      id="alias"
                      value={alias}
                      onChange={(e) => setAlias(e.target.value)}
                      placeholder="Ej: JL, Maria..."
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="firstName" className="text-sm mb-2 block">
                        Nombre
                      </Label>
                      <Input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Ej: Juan"
                        required={!alias}
                      />
                    </div>

                    <div>
                      <Label htmlFor="lastName" className="text-sm mb-2 block">
                        Apellido
                      </Label>
                      <Input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Ej: Pérez"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.push(`/app/workspace/${workspaceId}`)}
                    className="flex-1"
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1"
                    disabled={createPerson.isPending || (!firstName.trim() && !alias.trim())}
                  >
                    {createPerson.isPending ? (
                      <span className="flex items-center gap-2">
                        <Loader size="sm" variant="spinner" />
                        Agregando...
                      </span>
                    ) : (
                      'Agregar Persona'
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}