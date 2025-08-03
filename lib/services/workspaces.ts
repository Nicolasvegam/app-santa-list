import { createClientSupabaseClient } from '@/lib/supabase/client';
import { WorldSpace } from '@/lib/entities/world-space.entity';

export const workspacesService = {
  async getAll(userId: string, token?: string): Promise<WorldSpace[]> {
    const supabase = createClientSupabaseClient(token || null);
    const { data, error } = await supabase
      .from('world_spaces')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching workspaces:', error);
      throw error;
    }

    return data || [];
  },

  async getById(id: string, token?: string): Promise<WorldSpace | null> {
    const supabase = createClientSupabaseClient(token || null);
    const { data, error } = await supabase
      .from('world_spaces')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching workspace:', error);
      return null;
    }

    return data;
  },

  async create(workspace: Omit<WorldSpace, 'id' | 'created_at'>, token?: string): Promise<WorldSpace> {
    const supabase = createClientSupabaseClient(token || null);
    const { data, error } = await supabase
      .from('world_spaces')
      .insert(workspace)
      .select()
      .single();

    if (error) {
      console.error('Error creating workspace:', error);
      throw error;
    }

    return data;
  },

  async update(id: string, updates: Partial<WorldSpace>, token?: string): Promise<WorldSpace> {
    const supabase = createClientSupabaseClient(token || null);
    const { data, error } = await supabase
      .from('world_spaces')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating workspace:', error);
      throw error;
    }

    return data;
  },

  async delete(id: string, token?: string): Promise<void> {
    const supabase = createClientSupabaseClient(token || null);
    const { error } = await supabase
      .from('world_spaces')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting workspace:', error);
      throw error;
    }
  }
};