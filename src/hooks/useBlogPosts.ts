import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  featured_image: string | null;
  author_name: string;
  author_avatar: string | null;
  author_bio: string | null;
  category_id: string | null;
  tags: string[];
  published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  categories?: {
    name: string;
    slug: string;
  };
}

export const useBlogPosts = () => {
  return useQuery({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select(`
          *,
          categories (
            name,
            slug
          )
        `)
        .eq("published", true)
        .order("published_at", { ascending: false });

      if (error) throw error;
      return data as BlogPost[];
    },
  });
};

export const useBlogPost = (slug: string) => {
  return useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      if (!slug) return null;
      
      const { data, error } = await supabase
        .from("posts")
        .select(`
          *,
          categories (
            name,
            slug
          )
        `)
        .eq("slug", slug)
        .eq("published", true)
        .single();

      if (error) throw error;
      return data as BlogPost;
    },
    enabled: !!slug,
  });
};

export const useRelatedPosts = (currentPostId: string, categoryId: string | null, limit = 3) => {
  return useQuery({
    queryKey: ["related-posts", currentPostId, categoryId],
    queryFn: async () => {
      let query = supabase
        .from("posts")
        .select(`
          *,
          categories (
            name,
            slug
          )
        `)
        .eq("published", true)
        .neq("id", currentPostId)
        .limit(limit);

      if (categoryId) {
        query = query.eq("category_id", categoryId);
      }

      const { data, error } = await query.order("published_at", { ascending: false });

      if (error) throw error;
      return data as BlogPost[];
    },
    enabled: !!currentPostId,
  });
};