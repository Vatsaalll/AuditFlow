
import { ArrowRight, Sparkle, Zap, Rocket } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-32 pb-20 md:py-36 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
            AI-Powered Code Auditing & Tech Debt Management
          </h1>
          <p className="text-lg md:text-xl mb-8 text-foreground/70 max-w-3xl mx-auto">
            Elevate your development team with intelligent code reviews, automated debugging, and comprehensive technical debt tracking.
          </p>
          <a href="#pricing" className="neo-button group">
            Get Started
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        
        <div className="mt-16 md:mt-20 max-w-5xl mx-auto reveal-on-scroll">
          <div className="rounded-xl overflow-hidden p-12 bg-gradient-to-r from-secondary/40 to-primary/10 flex flex-col items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(var(--primary)/0.2)] transition-all duration-500">
            <div className="flex justify-center gap-16 animate-pulse">
              <Sparkle size={40} className="text-primary/80" />
              <Zap size={40} className="text-primary animate-bounce" style={{ animationDuration: '2s' }} />
              <Rocket size={40} className="text-primary/80" />
            </div>
            <div className="mt-8 text-center max-w-2xl">
              <h3 className="text-2xl font-light mb-3">Intelligent Code Analysis</h3>
              <p className="text-foreground/70">Our AI scans your codebase to identify issues, suggest improvements, and track technical debt in real-time.</p>
            </div>
            <div className="mt-8 w-full max-w-md mx-auto h-12 bg-secondary/20 rounded-md relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-2/3 bg-gradient-to-r from-primary/40 to-primary/20 animate-pulse" style={{ animationDuration: '3s' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm text-foreground/90">AI Scanning Progress: 67%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
