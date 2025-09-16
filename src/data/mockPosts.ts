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
    title: "The Future of Weed Development: Trends to Watch in 2024",
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
    title: "Design Systems That Scale: Building Consistent UI Libraries",
    excerpt: "Learn how to create and maintain design systems that grow with your organization while ensuring consistency across all digital touchpoints.",
    content: `
# Design Systems That Scale: Building Consistent UI Libraries

A well-crafted design system is the backbone of any successful digital product. It ensures consistency, improves efficiency, and creates a cohesive user experience across all platforms.

## Foundation First

Before diving into components, establish your design foundations:

### Color Palette
Define primary, secondary, and semantic colors that work across all contexts.

### Typography
Create a type scale that maintains hierarchy and readability.

### Spacing System
Implement consistent spacing that creates visual rhythm.

## Component Architecture

Build components with these principles in mind:
- **Modularity**: Each component should serve a single purpose
- **Flexibility**: Allow for customization without breaking consistency
- **Documentation**: Every component needs clear usage guidelines

## Implementation Strategy

1. Start small with core components
2. Document everything as you build
3. Get team buy-in early
4. Iterate based on real usage

Remember: A design system is never "done"—it evolves with your product and organization.
    `,
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    publishedAt: "2024-01-12",
    readTime: 6,
    category: "Design",
    tags: ["design-systems", "ui-libraries", "consistency", "scalability"],
    featuredImage: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop"
  },
  {
    id: "3",
    title: "Startup Success: From MVP to Market Leader",
    excerpt: "A comprehensive guide to scaling your startup from a minimum viable product to market leadership, with real-world examples and actionable strategies.",
    content: `
# Startup Success: From MVP to Market Leader

The journey from MVP to market leadership is filled with challenges, opportunities, and critical decision points. Here's how successful startups navigate this path.

## The MVP Philosophy

Your Minimum Viable Product isn't about building something minimal—it's about learning maximum with minimum effort.

### Key MVP Principles:
- **Solve one problem really well**
- **Get feedback early and often**
- **Iterate based on data, not assumptions**

## Scaling Strategically

Growth isn't just about numbers—it's about sustainable, strategic expansion.

### Focus Areas:
1. **Product-Market Fit**: Ensure your solution truly solves a real problem
2. **Team Building**: Hire people who complement your skills
3. **Customer Success**: Happy customers are your best marketing tool
4. **Financial Management**: Cash flow is king in the early stages

## Common Pitfalls to Avoid

- Scaling too fast without proper foundations
- Ignoring customer feedback
- Neglecting company culture as you grow
- Focusing on vanity metrics instead of meaningful KPIs

Success in the startup world comes from persistence, adaptability, and relentless focus on customer value.
    `,
    author: {
      name: "Marcus Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    publishedAt: "2024-01-10",
    readTime: 10,
    category: "Business",
    tags: ["startups", "mvp", "scaling", "leadership"],
    featuredImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop"
  },
  {
    id: "4",
    title: "The Psychology of User Experience: Understanding Human Behavior",
    excerpt: "Dive deep into the psychological principles that drive user behavior and learn how to apply them to create more intuitive and engaging digital experiences.",
    content: `
# The Psychology of User Experience: Understanding Human Behavior

Great UX design isn't just about aesthetics—it's about understanding how people think, feel, and behave when interacting with digital products.

## Cognitive Load Theory

Every interface element requires mental processing power. The key is to minimize unnecessary cognitive load while maximizing usability.

### Reducing Cognitive Load:
- **Chunking information** into digestible pieces
- **Using familiar patterns** and conventions
- **Progressive disclosure** of complex features
- **Clear visual hierarchy** to guide attention

## The Psychology of Color

Colors evoke emotional responses and can significantly impact user behavior:

- **Blue**: Trust, stability, professionalism
- **Green**: Growth, success, positive actions
- **Red**: Urgency, warnings, important actions
- **Orange**: Energy, enthusiasm, calls-to-action

## Behavioral Design Patterns

Understanding psychological triggers can help create more engaging experiences:

### The Fogg Behavior Model
Behavior happens when three elements converge:
1. **Motivation**: The desire to perform the behavior
2. **Ability**: The capacity to perform the behavior  
3. **Trigger**: The prompt that initiates the behavior

## Applying Psychology in Design

1. **User Research**: Understand your users' mental models
2. **Usability Testing**: Observe real behavior, not just opinions
3. **A/B Testing**: Let data drive design decisions
4. **Accessibility**: Design for diverse cognitive abilities

Remember: Good UX design feels invisible—users accomplish their goals without thinking about the interface.
    `,
    author: {
      name: "Dr. Emily Watson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    publishedAt: "2024-01-08",
    readTime: 12,
    category: "Design",
    tags: ["ux", "psychology", "behavior", "cognitive-load"],
    featuredImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop"
  },
  {
    id: "5",
    title: "Mastering Remote Work: Tools and Strategies for Distributed Teams",
    excerpt: "Essential tools, methodologies, and best practices for building and managing high-performing remote teams in the modern workplace.",
    content: `
# Mastering Remote Work: Tools and Strategies for Distributed Teams

The shift to remote work has fundamentally changed how teams collaborate. Success in this new environment requires intentional strategies and the right tools.

## Communication Excellence

Effective communication is the cornerstone of remote team success.

### Synchronous vs Asynchronous
- **Synchronous**: Real-time meetings, brainstorming sessions
- **Asynchronous**: Documentation, recorded updates, thoughtful responses

### Best Practices:
- **Over-communicate** rather than under-communicate
- **Document everything** for future reference
- **Be intentional** about when to meet vs when to message

## Essential Tool Stack

The right tools can make or break remote team productivity:

### Communication
- **Slack/Teams**: Daily conversations and quick updates
- **Zoom/Meet**: Video calls and screen sharing
- **Notion/Confluence**: Documentation and knowledge base

### Project Management
- **Linear/Jira**: Task tracking and sprint planning
- **Figma/Miro**: Collaborative design and whiteboarding
- **GitHub/GitLab**: Code collaboration and version control

## Building Team Culture

Remote doesn't mean disconnected. Successful remote teams actively cultivate culture:

1. **Virtual coffee chats** and informal conversations
2. **Team rituals** like show-and-tell sessions
3. **Clear boundaries** between work and personal time
4. **Recognition systems** to celebrate achievements

## Productivity Strategies

Individual productivity in remote settings requires discipline and structure:

- **Time blocking** for focused work
- **Dedicated workspace** free from distractions
- **Regular breaks** to prevent burnout
- **Clear start and stop times** for the workday

The future of work is flexible, and teams that master remote collaboration will have a competitive advantage.
    `,
    author: {
      name: "David Park",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    },
    publishedAt: "2024-01-05",
    readTime: 9,
    category: "Business",
    tags: ["remote-work", "productivity", "team-management", "tools"],
    featuredImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
  },
  {
    id: "6",
    title: "CSS Grid vs Flexbox: When to Use Each Layout Method",
    excerpt: "A practical guide to choosing between CSS Grid and Flexbox for your layout needs, with real-world examples and performance considerations.",
    content: `
# CSS Grid vs Flexbox: When to Use Each Layout Method

Both CSS Grid and Flexbox are powerful layout tools, but they excel in different scenarios. Understanding when to use each will make you a more effective developer.

## Flexbox: The One-Dimensional Layout Master

Flexbox is perfect for laying out items in a single direction—either horizontally or vertically.

### Best Use Cases:
- **Navigation bars** with evenly spaced items
- **Card layouts** that need to stretch to fill space
- **Centering content** both horizontally and vertically
- **Responsive button groups**

### Flexbox Example:
\`\`\`css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
\`\`\`

## CSS Grid: The Two-Dimensional Layout Powerhouse

CSS Grid excels at creating complex, two-dimensional layouts with precise control.

### Best Use Cases:
- **Page layouts** with headers, sidebars, and content areas
- **Image galleries** with varying sizes
- **Dashboard layouts** with multiple sections
- **Magazine-style layouts** with overlapping elements

### Grid Example:
\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "sidebar content ads"
    "footer footer footer";
  gap: 1rem;
}
\`\`\`

## When to Use Which

### Choose Flexbox When:
- You're working with a single row or column
- You need items to wrap and flow naturally
- You want equal-height cards or buttons
- You're building navigation or toolbar layouts

### Choose Grid When:
- You need precise control over rows AND columns
- You're creating a page layout with multiple sections
- You want to overlap elements
- You need complex responsive behavior

## Performance Considerations

Both methods are highly performant, but consider:
- **Grid**: Better for complex layouts that change frequently
- **Flexbox**: Slightly better for simple, single-axis layouts

## Modern Best Practices

1. **Use both together**: Grid for page layout, Flexbox for components
2. **Mobile-first**: Start with simpler layouts and enhance
3. **Progressive enhancement**: Ensure fallbacks for older browsers
4. **Semantic HTML**: Good markup makes any CSS layout method more effective

The best developers know when to use each tool—and often use them together for maximum effect.
    `,
    author: {
      name: "Lisa Thompson",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face"
    },
    publishedAt: "2024-01-03",
    readTime: 7,
    category: "Tech",
    tags: ["css", "flexbox", "grid", "layout"],
    featuredImage: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=600&fit=crop"
  }
];
