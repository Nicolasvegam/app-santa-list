'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from '@clerk/nextjs';
import { EmojiPicker } from '@/app/components/EmojiPicker';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCreateWorkspace } from '@/lib/hooks/use-workspaces';
import { Breadcrumb } from '@/app/components/Breadcrumb';
import { Loader } from '@/components/ui/loader';

export default function NewWorkspace() {
  const router = useRouter();
  const { session } = useSession();
  const createWorkspace = useCreateWorkspace();
  const [name, setName] = useState('');
  const [emoji, setEmoji] = useState('🏠');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !session?.user) return;

    createWorkspace.mutate({
      name: name.trim(),
      user_id: session.user.id,
      emoji 
    }, {
      onSuccess: () => router.push('/')
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <Breadcrumb
          items={[
            {
              label: 'Nuevo Espacio de Trabajo'
            }
          ]}
        />
        
        <div className="flex items-center justify-center mt-8">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl">Crear Espacio de Trabajo</CardTitle>
              <p className="text-sm text-muted-foreground mt-2">Organiza tus proyectos y equipos</p>
            </CardHeader>
            <CardContent>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center">
            <Label className="text-sm mb-3 block">
              Icono del espacio
            </Label>
            <EmojiPicker
              selectedEmoji={emoji}
              onEmojiSelect={setEmoji}
            />
          </div>

          <div>
            <Label htmlFor="name" className="text-sm mb-2 block">
              Nombre del espacio
            </Label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej: Equipo Marketing, Proyecto Alpha..."
              required
            />
            <p className="text-xs text-muted-foreground mt-2">
              Dale un nombre descriptivo a tu espacio de trabajo
            </p>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1"
              disabled={createWorkspace.isPending || !name.trim()}
            >
              {createWorkspace.isPending ? (
                <span className="flex items-center gap-2">
                  <Loader size="sm" variant="spinner" />
                  Creando...
                </span>
              ) : (
                'Crear Espacio'
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