import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: number;
  category: string;
  tags: string[];
  featuredImage: string;
}

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <article 
      className={`blog-card group cursor-pointer ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <Link to={`/post/${post.id}`} className="block">
        {/* Featured Image */}
        <div className={`relative overflow-hidden rounded-lg mb-4 ${
          featured ? "h-64 md:h-80" : "h-48"
        }`}>
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-white/90 text-primary font-semibold">
              {post.category}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3">
          {/* Meta Information */}
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} min read</span>
            </div>
          </div>

          {/* Title */}
          <h2 className={`font-semibold leading-tight group-hover:text-primary transition-colors ${
            featured ? "text-2xl md:text-3xl" : "text-xl"
          }`}>
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className={`text-muted-foreground leading-relaxed ${
            featured ? "text-base md:text-lg" : "text-sm"
          }`}>
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                #{tag}
              </Badge>
            ))}
          </div>

          {/* Author & Read More */}
          <div className="flex items-center justify-between pt-3">
            <div className="flex items-center space-x-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm font-medium text-foreground">
                {post.author.name}
              </span>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              className="text-primary hover:text-accent group-hover:translate-x-1 transition-all p-0"
            >
              Read More
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;