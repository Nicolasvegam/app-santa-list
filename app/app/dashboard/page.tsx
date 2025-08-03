'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { SearchBar } from '../../components/SearchBar';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, FolderOpen, Home } from 'lucide-react';
import { useWorkspaces } from '@/lib/hooks/use-workspaces';
import { Button } from '@/components/ui/button';
import { LogoutButton } from '@/components/ui/logout-button';
import { usePWA } from '../../components/PWAInstaller';
import { Skeleton } from '@/components/ui/skeleton';
import { DashboardSkeleton } from '@/components/ui/page-skeletons';

export default function DashboardPage() {
  const { session, isLoaded } = useSession();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const { data: workspaces = [], isLoading } = useWorkspaces();
  const { isInstalled } = usePWA();

  useEffect(() => {
    if (isLoaded && !session) {
      router.push('/');
    }
  }, [isLoaded, session, router]);

  // Show loading while session is loading
  if (!isLoaded) {
    return <DashboardSkeleton />;
  }

  // Return null if not authenticated (redirect is handled by useEffect)
  if (!session) {
    return null;
  }

  const filteredWorkspaces = workspaces.filter(ws =>
    ws.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Bienvenido, {session?.user?.firstName || 'Usuario'}
            </h1>
            <p className="text-muted-foreground">
              Gestiona tus espacios de trabajo y proyectos
              {isInstalled && (
                <span className="inline-flex items-center gap-1 ml-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                  📱 App instalada
                </span>
              )}
            </p>
          </div>
          <div className="flex gap-2">
            <Link href="/">
              <Button 
                variant="outline" 
                size="sm"
                className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2"
              >
                <Home className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Inicio</span>
              </Button>
            </Link>
            <LogoutButton />
          </div>
        </div>

        <div className="mb-8 max-w-2xl">
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Buscar espacios de trabajo..."
          />
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          <Link href="/app/workspace/new">
            <Card className="h-32 cursor-pointer hover:shadow-md transition-all duration-200 border-2 border-dashed border-border hover:border-primary/50 hover-lift group">
              <CardContent className="h-full flex items-center justify-center p-6">
                <div className="text-center">
                  <Plus className="w-10 h-10 mx-auto mb-2 text-muted-foreground group-hover:text-primary transition-colors" />
                  <p className="text-sm font-medium">Nuevo Espacio</p>
                </div>
              </CardContent>
            </Card>
          </Link>

          {isLoading ? (
            [...Array(3)].map((_, i) => (
              <Card key={i} className="h-32">
                <CardContent className="h-full flex flex-col items-center justify-center p-6">
                  <Skeleton className="w-8 h-8 rounded-lg mb-2" />
                  <Skeleton className="h-3 w-20" />
                </CardContent>
              </Card>
            ))
          ) : (
            filteredWorkspaces.map((workspace) => (
              <Link key={workspace.id} href={`/app/workspace/${workspace.id}`}>
                <Card className="h-32 cursor-pointer hover:shadow-md transition-all duration-200 hover:border-primary/50 hover-lift group">
                  <CardContent className="h-full flex flex-col items-center justify-center p-6">
                    <div className="text-3xl mb-2 text-primary">
                      {workspace.emoji || <FolderOpen className="w-8 h-8" />}
                    </div>
                    <h3 className="text-sm font-medium text-center line-clamp-2">
                      {workspace.name}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}