-- Create categories table
CREATE TABLE public.categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create posts table
CREATE TABLE public.posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT,
  featured_image TEXT,
  author_name TEXT NOT NULL DEFAULT 'Admin',
  author_avatar TEXT,
  author_bio TEXT,
  category_id UUID REFERENCES public.categories(id),
  tags TEXT[] DEFAULT '{}',
  published BOOLEAN NOT NULL DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create indexes for better performance
CREATE INDEX idx_posts_published ON public.posts(published);
CREATE INDEX idx_posts_published_at ON public.posts(published_at DESC);
CREATE INDEX idx_posts_category ON public.posts(category_id);
CREATE INDEX idx_posts_tags ON public.posts USING GIN(tags);

-- Enable Row Level Security
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- Create policies for categories (publicly readable)
CREATE POLICY "Categories are publicly readable" 
ON public.categories 
FOR SELECT 
USING (true);

-- Create policies for posts
CREATE POLICY "Published posts are publicly readable" 
ON public.posts 
FOR SELECT 
USING (published = true);

-- Allow authenticated users to manage posts (for admin functionality)
CREATE POLICY "Authenticated users can manage posts" 
ON public.posts 
FOR ALL 
TO authenticated 
USING (true)
WITH CHECK (true);

CREATE POLICY "Authenticated users can manage categories" 
ON public.categories 
FOR ALL 
TO authenticated 
USING (true)
WITH CHECK (true);

-- Create function to automatically update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_posts_updated_at
  BEFORE UPDATE ON public.posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert some default categories
INSERT INTO public.categories (name, slug, description) VALUES
  ('Technology', 'tech', 'Latest trends and insights in technology'),
  ('Design', 'design', 'Creative design tips and inspiration'),
  ('Business', 'business', 'Business strategies and entrepreneurship');

-- Insert some sample posts
INSERT INTO public.posts (title, slug, content, excerpt, author_name, category_id, tags, published, published_at) VALUES
  (
    'The Future of Web Development',
    'future-of-web-development',
    'Web development continues to evolve at a rapid pace. From new frameworks to emerging technologies, developers need to stay current with the latest trends and best practices.

## Key Trends

### 1. Component-Based Architecture
Modern web applications are built using component-based architectures that promote reusability and maintainability.

### 2. Performance Optimization
With Core Web Vitals becoming increasingly important, performance optimization is no longer optional.

### 3. Progressive Web Apps
PWAs continue to blur the line between web and native applications, offering enhanced user experiences.

## Conclusion

The future of web development looks bright with exciting new technologies and methodologies emerging every day.',
    'Exploring the latest trends and technologies shaping the future of web development.',
    'Alex Johnson',
    (SELECT id FROM public.categories WHERE slug = 'tech'),
    ARRAY['web development', 'technology', 'future'],
    true,
    now() - INTERVAL '2 days'
  ),
  (
    'Designing for User Experience',
    'designing-for-user-experience',
    'User experience design is more than just making things look pretty. It''s about creating meaningful interactions that solve real problems for real people.

## The UX Process

### Research First
Understanding your users through research is the foundation of good UX design.

### Iterate and Test
Design is an iterative process. Test early and often with real users.

### Accessibility Matters
Inclusive design ensures your products work for everyone.

## Tools and Techniques

Modern UX designers have access to powerful tools and methodologies that help create better user experiences.',
    'A comprehensive guide to creating exceptional user experiences through thoughtful design.',
    'Sarah Chen',
    (SELECT id FROM public.categories WHERE slug = 'design'),
    ARRAY['ux design', 'user experience', 'design thinking'],
    true,
    now() - INTERVAL '5 days'
  ),
  (
    'Building a Successful Startup',
    'building-successful-startup',
    'Starting a business is both exciting and challenging. Here are key insights from successful entrepreneurs about building and scaling startups.

## Getting Started

### Validate Your Idea
Before building anything, make sure there''s a real market need for your product or service.

### Build a Strong Team
Success rarely happens in isolation. Surround yourself with talented, passionate people.

## Growth Strategies

### Focus on Product-Market Fit
Find the right balance between what you''re building and what the market wants.

### Customer-Centric Approach
Always put your customers at the center of your decision-making process.',
    'Essential tips and strategies for building and scaling a successful startup business.',
    'Mike Rodriguez',
    (SELECT id FROM public.categories WHERE slug = 'business'),
    ARRAY['startup', 'entrepreneurship', 'business strategy'],
    true,
    now() - INTERVAL '1 week'
  );