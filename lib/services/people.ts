import { createClientSupabaseClient } from '@/lib/supabase/client';
import { Person } from '@/lib/entities/person.entity';

export const peopleService = {
  async getByWorkspace(workspaceId: string, token?: string): Promise<Person[]> {
    const supabase = createClientSupabaseClient(token || null);
    const { data, error } = await supabase
      .from('people')
      .select('*')
      .eq('world_space_id', workspaceId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching people:', error);
      throw error;
    }

    return data || [];
  },

  async getById(id: string, token?: string): Promise<Person | null> {
    const supabase = createClientSupabaseClient(token || null);
    const { data, error } = await supabase
      .from('people')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching person:', error);
      return null;
    }

    return data;
  },

  async create(person: Omit<Person, 'id' | 'created_at'>, token?: string): Promise<Person> {
    const supabase = createClientSupabaseClient(token || null);
    const { data, error } = await supabase
      .from('people')
      .insert(person)
      .select()
      .single();

    if (error) {
      console.error('Error creating person:', error);
      throw error;
    }

    return data;
  },

  async update(id: string, updates: Partial<Person>, token?: string): Promise<Person> {
    const supabase = createClientSupabaseClient(token || null);
    const { data, error } = await supabase
      .from('people')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating person:', error);
      throw error;
    }

    return data;
  },

  async delete(id: string, token?: string): Promise<void> {
    const supabase = createClientSupabaseClient(token || null);
    const { error } = await supabase
      .from('people')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting person:', error);
      throw error;
    }
  }
};