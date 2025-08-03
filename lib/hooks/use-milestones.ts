import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from '@clerk/nextjs';
import { milestonesService } from '@/lib/services/milestones';
import { Milestone } from '@/lib/entities/milestone.entity';

export function useMilestones(personId: string) {
  const { session } = useSession();
  
  return useQuery({
    queryKey: ['milestones', personId],
    queryFn: async () => {
      if (!session) return [];
      const token = await session.getToken();
      if (!token) return [];
      return milestonesService.getByPerson(personId, token);
    },
    enabled: !!personId && !!session,
  });
}

export function useCreateMilestone() {
  const queryClient = useQueryClient();
  const { session } = useSession();
  
  return useMutation({
    mutationFn: async (milestone: Omit<Milestone, 'id' | 'created_at'>) => {
      if (!session) throw new Error('No session');
      const token = await session.getToken();
      if (!token) throw new Error('No token');
      return milestonesService.create(milestone, token);
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['milestones', variables.people_id] });
    },
  });
}

export function useUpdateMilestone() {
  const queryClient = useQueryClient();
  const { session } = useSession();
  
  return useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: Partial<Milestone> }) => {
      if (!session) throw new Error('No session');
      const token = await session.getToken();
      if (!token) throw new Error('No token');
      return milestonesService.update(id, updates, token);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['milestones', data.people_id] });
    },
  });
}

export function useDeleteMilestone() {
  const queryClient = useQueryClient();
  const { session } = useSession();
  
  return useMutation({
    mutationFn: async ({ id, personId }: { id: string; personId: string }) => {
      if (!session) throw new Error('No session');
      const token = await session.getToken();
      if (!token) throw new Error('No token');
      return milestonesService.delete(id, token);
    },
    onSuccess: (_, { personId }) => {
      queryClient.invalidateQueries({ queryKey: ['milestones', personId] });
    },
  });
}