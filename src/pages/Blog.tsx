
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "ai-code-review-best-practices",
    title: "AI Code Review Best Practices: A Comprehensive Guide",
    excerpt: "Leverage AI-powered code reviews effectively with these guidelines and strategies to maximize code quality and developer growth.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    date: "May 5, 2025",
    author: "Alexandra Chen",
    category: "Best Practices",
    readTime: "8 min read"
  },
  {
    slug: "reducing-technical-debt",
    title: "5 Strategies for Reducing Technical Debt in Legacy Systems",
    excerpt: "Practical approaches to managing and reducing technical debt in older codebases while maintaining team velocity.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
    date: "April 22, 2025",
    author: "Marcus Rodriguez",
    category: "Technical Debt",
    readTime: "6 min read"
  },
  {
    slug: "junior-developers-ai",
    title: "How AI Tools Are Accelerating Junior Developer Growth",
    excerpt: "Discover how AI-assisted learning and code review tools are helping junior developers reach senior level faster than ever.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    date: "April 10, 2025",
    author: "Sarah Johnson",
    category: "Developer Training",
    readTime: "5 min read"
  },
  {
    slug: "security-issues-ai-code",
    title: "Common Security Issues in AI-Generated Code",
    excerpt: "Identify and address the most frequent security vulnerabilities found in code produced by AI coding assistants.",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    date: "March 28, 2025",
    author: "David Kim",
    category: "Security",
    readTime: "7 min read"
  }
];

const Blog = () => {
  useEffect(() => {
    // Set page title
    document.title = "Blog - AuditFlow";
    
    // Initialize animations for this page
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen animate-fade-in">
      <Header isHomePage={false} />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center reveal-on-scroll">
              <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
                Our Blog
              </h1>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Insights, tutorials, and industry updates on code quality, technical debt, and developer productivity.
              </p>
            </div>
          </div>
        </section>
        
        {/* Featured Post */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Link to={`/blog/${featuredPost.slug}`} className="block reveal-on-scroll">
              <div className="glass-card overflow-hidden group">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="h-64 lg:h-auto overflow-hidden">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-primary text-sm font-medium">{featuredPost.category}</span>
                      <span className="text-foreground/50 text-sm flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {featuredPost.date}
                      </span>
                      <span className="text-foreground/50 text-sm flex items-center">
                        <User size={14} className="mr-1" />
                        {featuredPost.author}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-medium mb-4 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-foreground/70 mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center text-primary font-medium">
                      Read More 
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
        
        {/* Regular Posts */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <Link 
                  key={post.slug} 
                  to={`/blog/${post.slug}`} 
                  className="block reveal-on-scroll" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="glass-card overflow-hidden h-full group">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-primary text-xs font-medium">{post.category}</span>
                        <span className="text-foreground/50 text-xs">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-medium mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-foreground/70 text-sm mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-border/30">
                        <span className="text-sm text-foreground/60 flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {post.date}
                        </span>
                        <span className="text-sm text-foreground/60 flex items-center">
                          <User size={14} className="mr-1" />
                          {post.author}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Subscribe Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center reveal-on-scroll">
              <h2 className="text-3xl font-light mb-6">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
                Get the latest insights on AI code auditing, technical debt management, and developer productivity delivered directly to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-lg border border-border/50 bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                  required
                />
                <button type="submit" className="neo-button whitespace-nowrap">
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-foreground/50 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
