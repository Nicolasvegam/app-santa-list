import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from '@clerk/nextjs';
import { peopleService } from '@/lib/services/people';
import { Person } from '@/lib/entities/person.entity';

export function usePeople(workspaceId: string) {
  const { session } = useSession();
  
  return useQuery({
    queryKey: ['people', workspaceId],
    queryFn: async () => {
      if (!session) return [];
      const token = await session.getToken();
      if (!token) return [];
      return peopleService.getByWorkspace(workspaceId, token);
    },
    enabled: !!workspaceId && !!session,
  });
}

export function usePerson(id: string) {
  const { session } = useSession();
  
  return useQuery({
    queryKey: ['person', id],
    queryFn: async () => {
      if (!session) return null;
      const token = await session.getToken();
      if (!token) return null;
      return peopleService.getById(id, token);
    },
    enabled: !!id && !!session,
  });
}

export function useCreatePerson() {
  const queryClient = useQueryClient();
  const { session } = useSession();
  
  return useMutation({
    mutationFn: async (person: Omit<Person, 'id' | 'created_at'>) => {
      if (!session) throw new Error('No session');
      const token = await session.getToken();
      if (!token) throw new Error('No token');
      return peopleService.create(person, token);
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['people', variables.world_space_id] });
    },
  });
}

export function useUpdatePerson() {
  const queryClient = useQueryClient();
  const { session } = useSession();
  
  return useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: Partial<Person> }) => {
      if (!session) throw new Error('No session');
      const token = await session.getToken();
      if (!token) throw new Error('No token');
      return peopleService.update(id, updates, token);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['person', data.id] });
      queryClient.invalidateQueries({ queryKey: ['people', data.world_space_id] });
    },
  });
}

export function useDeletePerson() {
  const queryClient = useQueryClient();
  const { session } = useSession();
  
  return useMutation({
    mutationFn: async ({ id, workspaceId }: { id: string; workspaceId: string }) => {
      if (!session) throw new Error('No session');
      const token = await session.getToken();
      if (!token) throw new Error('No token');
      return peopleService.delete(id, token);
    },
    onSuccess: (_, { workspaceId }) => {
      queryClient.invalidateQueries({ queryKey: ['people', workspaceId] });
    },
  });
}