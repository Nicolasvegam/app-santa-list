import { createClientSupabaseClient } from '@/lib/supabase/client';
import { Milestone } from '@/lib/entities/milestone.entity';

export const milestonesService = {
  async getByPerson(personId: string, token?: string): Promise<Milestone[]> {
    const supabase = createClientSupabaseClient(token || null);
    const { data, error } = await supabase
      .from('milestones')
      .select('*')
      .eq('people_id', personId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching milestones:', error);
      throw error;
    }

    return data || [];
  },

  async create(milestone: Omit<Milestone, 'id' | 'created_at'>, token?: string): Promise<Milestone> {
    const supabase = createClientSupabaseClient(token || null);
    const { data, error } = await supabase
      .from('milestones')
      .insert(milestone)
      .select()
      .single();

    if (error) {
      console.error('Error creating milestone:', error);
      throw error;
    }

    return data;
  },

  async update(id: string, updates: Partial<Milestone>, token?: string): Promise<Milestone> {
    const supabase = createClientSupabaseClient(token || null);
    const { data, error } = await supabase
      .from('milestones')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating milestone:', error);
      throw error;
    }

    return data;
  },

  async delete(id: string, token?: string): Promise<void> {
    const supabase = createClientSupabaseClient(token || null);
    const { error } = await supabase
      .from('milestones')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting milestone:', error);
      throw error;
    }
  }
};