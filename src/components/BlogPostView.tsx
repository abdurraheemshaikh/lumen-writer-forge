// BlogPostView.tsx
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BlogPost } from "../data/mockPosts";

export default function BlogPostView({ post }: { post: BlogPost }) {
  return (
    <article className="prose prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="uppercase text-4xl font-extrabold tracking-wide mb-4" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="uppercase text-3xl font-bold mt-6 mb-3" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="list-disc ml-6 leading-relaxed" {...props} />
          )
        }}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
}
