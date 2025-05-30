
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
  result: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: "Alex Thompson",
      role: "CTO",
      company: "StartupXYZ",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      text: "AuditFlow completely transformed how we approach code quality. The AI-powered auditing caught critical issues our team missed and saved us countless hours of debugging.",
      result: "Reduced bug reports by 78% within 3 months"
    },
    {
      name: "Sarah Jenkins",
      role: "Engineering Manager",
      company: "TechSolutions",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      text: "The tech debt tracking feature is a game-changer. We finally have visibility into our codebase health and can prioritize refactoring efforts based on actual data.",
      result: "Improved developer velocity by 42%"
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Developer",
      company: "InnovateCorp",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      text: "Our junior developers have grown exponentially faster with AuditFlow's mentoring features. The contextual learning and suggestions are like having a senior dev reviewing their code 24/7.",
      result: "Onboarding time reduced by 65%"
    },
    {
      name: "Jennifer Wu",
      role: "VP of Engineering",
      company: "DataScale",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
      text: "The ROI with AuditFlow has been incredible. We've significantly reduced time spent in code reviews while simultaneously increasing the quality of our codebase.",
      result: "Code review time down by 56%, quality metrics up 38%"
    },
    {
      name: "David Chen",
      role: "Software Architect",
      company: "FinTech Global",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      text: "The detailed analysis of our AI-generated code has been invaluable. AuditFlow catches subtle issues that would otherwise make it to production.",
      result: "Critical incidents decreased by 82% year-over-year"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [autoplay, setAutoplay] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            Trusted by Top Development Teams
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            See how industry leaders are using AuditFlow to optimize their development workflow.
          </p>
        </div>
        
        <div 
          className="relative max-w-5xl mx-auto reveal-on-scroll"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <div 
            ref={carouselRef}
            className="overflow-hidden rounded-2xl"
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 p-8 md:p-12"
                >
                  <div className="glass-card p-8 md:p-10">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                      <div className="flex-shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-16 h-16 rounded-full object-cover border-2 border-white/50"
                        />
                      </div>
                      <div>
                        <div className="flex items-center mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <h4 className="text-lg font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-foreground/70">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                    
                    <blockquote className="mt-6 text-lg italic text-foreground/80">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <div className="mt-6 pt-6 border-t border-border/30">
                      <p className="font-medium">Results:</p>
                      <p className="text-primary">{testimonial.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full mx-1 transition-all ${
                currentIndex === index
                  ? "bg-primary"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
