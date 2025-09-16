import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, TrendingUp, Users, BookOpen } from "lucide-react";

const BlogHero = () => {
  const stats = [
    { icon: BookOpen, label: "Articles", value: "500+" },
    { icon: Users, label: "Readers", value: "10K+" },
    { icon: TrendingUp, label: "Categories", value: "12" },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="relative container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Discover Amazing
              <span className="block bg-gradient-to-r from-accent-glow to-white bg-clip-text text-transparent">
                Stories & Ideas
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Join thousands of readers exploring the latest in technology, design, 
              and business innovation. Start your journey today.
            </p>
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Input
                type="email"
                placeholder="Enter your email..."
                className="bg-white/90 text-foreground border-none placeholder:text-muted-foreground flex-1"
              />
              <Button className="bg-accent hover:bg-accent-glow text-white font-semibold px-6">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-white/70 mt-3">
              Weekly insights delivered to your inbox. No spam, unsubscribe anytime.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12 pt-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-3 text-white/90">
                <div className="p-2 bg-white/10 rounded-lg">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/20 rounded-full blur-2xl" />
    </section>
  );
};

export default BlogHero;