import { useState } from "react";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogHero from "@/components/blog/BlogHero";
import BlogCard from "@/components/blog/BlogCard";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, Users } from "lucide-react";

const BlogHome = () => {
  const { data: posts, isLoading, error } = useBlogPosts();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = ["Technology", "Design", "Business"];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <BlogHeader />
        <BlogHero />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">Loading posts...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <BlogHeader />
        <BlogHero />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center text-red-500">Error loading posts</div>
        </div>
      </div>
    );
  }
  
  const filteredPosts = selectedCategory && posts
    ? posts.filter(post => post.categories?.name === selectedCategory)
    : posts || [];

  const featuredPost = posts?.[0];
  const regularPosts = posts?.slice(1) || [];

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <BlogHero />
      
      {/* Featured Section */}
      {featuredPost && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Featured Story</h2>
                <p className="text-muted-foreground">Don't miss our top pick this week</p>
              </div>
              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                <TrendingUp className="w-4 h-4 mr-1" />
                Trending
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <BlogCard post={featuredPost} featured />
              </div>
              
              {/* Popular Posts Sidebar */}
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    Quick Reads
                  </h3>
                  <div className="space-y-4">
                    {regularPosts.slice(0, 3).map((post) => (
                      <div key={post.id} className="group">
                        <h4 className="font-medium text-sm leading-tight group-hover:text-primary transition-colors">
                          {post.title}
                        </h4>
                        <div className="flex items-center mt-2 text-xs text-muted-foreground">
                          <span>5 min</span>
                          <span className="mx-2">•</span>
                          <span>{post.author_name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-primary" />
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["web development", "technology", "ux design", "business strategy", "startups", "design thinking"].map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs hover:bg-primary hover:text-white transition-colors cursor-pointer">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="font-medium text-muted-foreground">Browse by category:</span>
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className="rounded-full"
            >
              All Posts
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2">
              {selectedCategory ? `${selectedCategory} Articles` : "Latest Articles"}
            </h2>
            <p className="text-muted-foreground">
              {selectedCategory 
                ? `Explore our ${selectedCategory.toLowerCase()} content` 
                : "Stay updated with our latest insights and stories"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Never Miss an Update</h2>
            <p className="text-muted-foreground text-lg">
              Join our community of readers and get the latest articles delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background"
              />
              <Button className="hero-gradient text-white px-6 py-3">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 hero-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <h3 className="font-bold text-lg">ModernBlog</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Sharing insights about technology, design, and business innovation.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Categories</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Technology</div>
                <div>Design</div>
                <div>Business</div>
                <div>Innovation</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>About Us</div>
                <div>Contact</div>
                <div>Privacy</div>
                <div>Terms</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Connect</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Twitter</div>
                <div>LinkedIn</div>
                <div>GitHub</div>
                <div>Newsletter</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 ModernBlog. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogHome;