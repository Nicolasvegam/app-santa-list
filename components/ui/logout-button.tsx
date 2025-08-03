'use client';

import { useClerk } from '@clerk/nextjs';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export function LogoutButton() {
  const { signOut } = useClerk();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(() => router.push('/'));
  };

  return (
    <Button 
      onClick={handleLogout}
      variant="outline"
      size="sm"
      className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2"
    >
      <LogOut className="w-3 h-3 sm:w-4 sm:h-4" />
      <span className="hidden sm:inline">Cerrar sesión</span>
      <span className="sm:hidden">Salir</span>
    </Button>
  );
}