
import { Code, LineChart, BarChart3, Users, Shield, Zap, GitPullRequest, Database } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
  return (
    <div className={cn("glass-card p-6 md:p-8 h-full", className)}>
      <div className="inline-flex items-center justify-center w-12 h-12 mb-5 rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-xl mb-3 font-medium">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
}

export default function FeaturesSection() {
  const features = [
    {
      title: "AI Code Auditing",
      description: "Automatically detect bugs, security vulnerabilities, and performance issues with advanced AI analysis.",
      icon: <Code size={24} />
    },
    {
      title: "Tech Debt Tracking",
      description: "Visualize, prioritize, and manage technical debt with customizable dashboards and metrics.",
      icon: <LineChart size={24} />
    },
    {
      title: "Developer Mentoring",
      description: "Accelerate junior developer growth with personalized recommendations and contextual learning.",
      icon: <Users size={24} />
    },
    {
      title: "Performance Metrics",
      description: "Track code quality improvements, developer progress, and ROI with comprehensive analytics.",
      icon: <BarChart3 size={24} />
    },
    {
      title: "Security Scanning",
      description: "Identify potential security vulnerabilities and receive actionable remediation steps.",
      icon: <Shield size={24} />
    },
    {
      title: "Automated Refactoring",
      description: "Get AI-powered suggestions for improving code structure and reducing complexity.",
      icon: <Zap size={24} />
    },
    {
      title: "PR Integration",
      description: "Seamless GitHub, GitLab, and Bitbucket integration for automated code reviews on pull requests.",
      icon: <GitPullRequest size={24} />
    },
    {
      title: "Historical Analysis",
      description: "Track code quality trends and technical debt accumulation over time with detailed reporting.",
      icon: <Database size={24} />
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Comprehensive tools to elevate your codebase quality and developer productivity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-on-scroll">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              className="hover:shadow-lg transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
