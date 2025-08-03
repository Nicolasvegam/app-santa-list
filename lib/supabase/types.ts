export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      world_spaces: {
        Row: {
          id: string
          created_at: string
          name: string
          user_id: string
          emoji?: string
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          user_id: string
          emoji?: string
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          user_id?: string
          emoji?: string
        }
      }
      people: {
        Row: {
          id: string
          created_at: string
          world_space_id: string
          first_name: string
          last_name: string
          alias: string
          emoji?: string
        }
        Insert: {
          id?: string
          created_at?: string
          world_space_id: string
          first_name: string
          last_name: string
          alias: string
          emoji?: string
        }
        Update: {
          id?: string
          created_at?: string
          world_space_id?: string
          first_name?: string
          last_name?: string
          alias?: string
          emoji?: string
        }
      }
      milestones: {
        Row: {
          id: string
          created_at: string
          description: string
          people_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          description: string
          people_id: string
        }
        Update: {
          id?: string
          created_at?: string
          description?: string
          people_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}