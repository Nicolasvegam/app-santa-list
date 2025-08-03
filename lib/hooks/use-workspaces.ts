import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from '@clerk/nextjs';
import { workspacesService } from '@/lib/services/workspaces';
import { WorldSpace } from '@/lib/entities/world-space.entity';

export function useWorkspaces() {
  const { session } = useSession();
  
  return useQuery({
    queryKey: ['workspaces', session?.user?.id],
    queryFn: async () => {
      if (!session) return [];
      const token = await session.getToken();
      if (!token) return [];
      return workspacesService.getAll(session.user.id, token);
    },
    enabled: !!session,
  });
}

export function useWorkspace(id: string) {
  const { session } = useSession();
  
  return useQuery({
    queryKey: ['workspace', id],
    queryFn: async () => {
      if (!session) return null;
      const token = await session.getToken();
      if (!token) return null;
      return workspacesService.getById(id, token);
    },
    enabled: !!id && !!session,
  });
}

export function useCreateWorkspace() {
  const queryClient = useQueryClient();
  const { session } = useSession();
  
  return useMutation({
    mutationFn: async (workspace: Omit<WorldSpace, 'id' | 'created_at'>) => {
      if (!session) throw new Error('No session');
      const token = await session.getToken();
      if (!token) throw new Error('No token');
      return workspacesService.create(workspace, token);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['workspaces', session?.user?.id] });
    },
  });
}

export function useUpdateWorkspace() {
  const queryClient = useQueryClient();
  const { session } = useSession();
  
  return useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: Partial<WorldSpace> }) => {
      if (!session) throw new Error('No session');
      const token = await session.getToken();
      if (!token) throw new Error('No token');
      return workspacesService.update(id, updates, token);
    },
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['workspace', id] });
      queryClient.invalidateQueries({ queryKey: ['workspaces'] });
    },
  });
}

export function useDeleteWorkspace() {
  const queryClient = useQueryClient();
  const { session } = useSession();
  
  return useMutation({
    mutationFn: async (id: string) => {
      if (!session) throw new Error('No session');
      const token = await session.getToken();
      if (!token) throw new Error('No token');
      return workspacesService.delete(id, token);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['workspaces', session?.user?.id] });
    },
  });
}