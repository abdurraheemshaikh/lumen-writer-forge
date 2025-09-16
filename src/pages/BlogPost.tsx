import { useParams, Link } from "react-router-dom";
import BlogHeader from "@/components/blog/BlogHeader";
import { useBlogPost, useRelatedPosts } from "@/hooks/useBlogPosts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, ArrowLeft, Share2, Heart, Bookmark, MessageCircle } from "lucide-react";
import { useState } from "react";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  const { data: post, isLoading, error } = useBlogPost(id || "");
  const { data: relatedPosts } = useRelatedPosts(post?.id || "", post?.category_id || null);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <BlogHeader />
        <div className="container mx-auto px-4 py-20 text-center">
          <div>Loading post...</div>
        </div>
      </div>
    );
  }
  
  if (error || !post) {
    return (
      <div className="min-h-screen bg-background">
        <BlogHeader />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: post.title,
        text: post.excerpt || "",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      
      {/* Back Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/">
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Button>
        </Link>
      </div>

      <article className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-8">
            <div className="mb-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary font-semibold">
                {post.categories?.name || "General"}
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {post.title}
            </h1>
            
            {post.excerpt && (
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {post.excerpt}
              </p>
            )}

            {/* Author & Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
              <div className="flex items-center space-x-4">
                <img
                  src={post.author_avatar || "/placeholder.svg"}
                  alt={post.author_name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{post.author_name}</div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(post.published_at || post.created_at)}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      5 min read
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Social Actions */}
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsLiked(!isLiked)}
                  className={isLiked ? "text-red-500 border-red-200" : ""}
                >
                  <Heart className={`w-4 h-4 mr-1 ${isLiked ? "fill-red-500" : ""}`} />
                  {isLiked ? "Liked" : "Like"}
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={isBookmarked ? "text-primary border-primary/20" : ""}
                >
                  <Bookmark className={`w-4 h-4 mr-1 ${isBookmarked ? "fill-primary" : ""}`} />
                  Save
                </Button>
                
                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="w-4 h-4 mr-1" />
                  Share
                </Button>
              </div>
            </div>

            <Separator className="mb-8" />
          </header>

          {/* Featured Image */}
          {post.featured_image && (
            <div className="mb-12">
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="article-content mb-12">
            <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mb-8">
              <h3 className="font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="hover:bg-primary hover:text-white transition-colors cursor-pointer">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <Separator className="mb-8" />

          {/* Author Bio */}
          <div className="bg-muted/50 rounded-xl p-6 mb-12">
            <div className="flex items-start space-x-4">
              <img
                src={post.author_avatar || "/placeholder.svg"}
                alt={post.author_name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-lg mb-2">About {post.author_name}</h4>
                <p className="text-muted-foreground mb-4">
                  {post.author_bio || `${post.author_name} is a passionate writer and expert in their field, 
                  regularly contributing insights about technology, design, and innovation. 
                  Follow their work for more thought-provoking articles.`}
                </p>
                <Button variant="outline" size="sm">
                  Follow {post.author_name}
                </Button>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold">Comments</h3>
              <span className="text-muted-foreground">Join the discussion</span>
            </div>
            
            <div className="bg-muted/30 rounded-xl p-8 text-center">
              <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Start the conversation</h4>
              <p className="text-muted-foreground mb-4">
                Be the first to comment on this article. Share your thoughts and engage with the community.
              </p>
              <Button>
                <MessageCircle className="w-4 h-4 mr-2" />
                Add Comment
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} to={`/post/${relatedPost.slug}`} className="group">
                    <article className="blog-card">
                      <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                        <img
                          src={relatedPost.featured_image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="space-y-3">
                        <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                          {relatedPost.categories?.name || "General"}
                        </Badge>
                        <h3 className="font-semibold leading-tight group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedPost.excerpt || relatedPost.content.substring(0, 120) + "..."}
                        </p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <span>5 min read</span>
                          <span className="mx-2">•</span>
                          <span>{relatedPost.author_name}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;