// Mock blog data for the demo
export interface BlogPost {
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

export const mockPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the cutting-edge technologies and methodologies that are shaping the future of web development, from AI integration to advanced frameworks.",
    content: `
# The Future of Web Development: Trends to Watch in 2024

The web development landscape is evolving at an unprecedented pace. As we move through 2024, several key trends are reshaping how we build and interact with web applications.

## AI-Powered Development

Artificial Intelligence is no longer just a buzzword—it's becoming an integral part of the development process. From code generation to automated testing, AI tools are helping developers work more efficiently than ever before.

### Key Benefits:
- **Faster prototyping** with AI-assisted code generation
- **Improved code quality** through intelligent suggestions
- **Enhanced user experiences** with personalized content

## The Rise of Edge Computing

Edge computing is bringing computational power closer to users, resulting in faster load times and better performance. This trend is particularly important for applications that require real-time processing.

## Advanced Framework Capabilities

Modern frameworks like React, Vue, and Angular continue to evolve, offering better performance, improved developer experience, and more robust tooling.

The future looks bright for web developers willing to adapt and learn these emerging technologies.
    `,
    author: {
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    publishedAt: "2024-01-15",
    readTime: 8,
    category: "Tech",
    tags: ["web-dev", "ai", "frameworks", "edge-computing"],
    featuredImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
  },
  {
    id: "2",
    title: "Beyond the Fear of Another AI Winter: Why Real Breakthroughs Lie Outside AGI",
    excerpt: "AI winter fears resurface, but real innovation lies in practical applications across medicine, energy, and engineering—not just in chasing AGI.",
    content: `
# Beyond the Fear of Another AI Winter: Why Real Breakthroughs Lie Outside AGI

The discussion around another potential AI winter is heating up. Many worry that the hype around Artificial General Intelligence (AGI) sets us up for disappointment, funding cuts, and slowed innovation. But history shows that progress in AI has always come from practical, incremental advances—not from sudden leaps to human-level intelligence.

## Lessons from Past AI Winters
Previous AI winters occurred when expectations outpaced technical reality. Overpromises led to frustration when breakthroughs didn’t arrive quickly enough.

## Why This Time is Different
- **Specialized AI models** are already reshaping medicine, logistics, and education.  
- **Academic research and industry collaboration** remain strong, ensuring sustained progress.  
- **Economic integration**: AI is now deeply embedded in products and services, making it less likely to be abandoned.  

## Real Breakthroughs Lie Beyond AGI
The future of AI progress lies in:
- Tackling real-world problems like climate modeling, drug discovery, and infrastructure optimization.  
- Creating trustworthy, explainable systems that businesses and governments can rely on.  

## Conclusion
Rather than fearing another AI winter, we should broaden our view of progress. By focusing on innovation in medicine, energy, and engineering, AI can thrive—even if AGI remains elusive.
    `,
    author: {
      name: "Abdur Raheem Shaikh",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    publishedAt: "2025-09-16",
    readTime: 10,
    category: "AI",
    tags: ["ai-winter", "agi", "innovation", "tech-future"],
    featuredImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
  }
];
