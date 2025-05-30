
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  useEffect(() => {
    // Set page title
    document.title = "About Us - AuditFlow";
    
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

  const teamMembers = [
    {
      name: "Alexandra Chen",
      role: "CEO & Co-founder",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
      bio: "Former VP of Engineering at TechGiant, Alexandra has 15+ years of experience managing large development teams and tackling technical debt challenges at scale."
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      bio: "AI researcher specializing in code analysis algorithms, Marcus previously led the developer tools division at CodeCorp and holds multiple patents in static analysis technology."
    },
    {
      name: "Sarah Johnson",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      bio: "With extensive experience in developer experience (DX) design, Sarah is passionate about creating tools that engineers love to use. Previously led product at DevOpsHub."
    },
    {
      name: "David Kim",
      role: "Lead AI Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      bio: "PhD in Machine Learning with focus on program synthesis and code generation. David leads our core AI technology that powers AuditFlow's code analysis engine."
    },
  ];

  const timeline = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Alexandra Chen and Marcus Rodriguez founded AuditFlow after experiencing firsthand the challenges of maintaining code quality while leading engineering teams at high-growth startups."
    },
    {
      year: "2021",
      title: "First Product Launch",
      description: "Released the initial version of AuditFlow focused on AI code auditing and technical debt tracking for small to medium development teams."
    },
    {
      year: "2022",
      title: "Series A Funding",
      description: "Secured $12M in Series A funding to expand the team and develop advanced features including the developer mentoring system."
    },
    {
      year: "2023",
      title: "Enterprise Expansion",
      description: "Launched Enterprise tier with custom integrations and on-premise deployment options. Reached 1,000 active business customers."
    },
    {
      year: "2024",
      title: "Global Growth",
      description: "Expanded to international markets with support for 15 programming languages and integrations with all major version control and project management systems."
    },
    {
      year: "2025",
      title: "The Future",
      description: "Continuing to innovate in the AI code analysis space with upcoming features for predictive maintenance and adaptive learning paths for developers."
    }
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      <Header isHomePage={false} />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center reveal-on-scroll">
              <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
                Our Story
              </h1>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                We're on a mission to revolutionize how development teams manage code quality and technical debt.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal-on-scroll">
              <div>
                <h2 className="text-3xl md:text-4xl font-light mb-6">Our Mission & Vision</h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    At AuditFlow, we believe that great software isn't just about what it does today, but how well it can evolve tomorrow. We've built a platform that gives development teams unprecedented visibility into their code quality and technical debt.
                  </p>
                  <p>
                    Our vision is to create a world where every line of code is maintainable, secure, and efficient. Where junior developers can grow rapidly with AI-assisted guidance, and where technical debt is managed proactively rather than becoming an insurmountable burden.
                  </p>
                  <p>
                    We're passionate about empowering developers to create better software through intelligent insights, actionable recommendations, and continuous learning.
                  </p>
                </div>
              </div>
              <div className="glass-card p-6 md:p-8 h-full">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Team collaboration" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 reveal-on-scroll">
              <h2 className="text-3xl md:text-5xl font-light mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                We're a diverse group of engineers, product designers, and AI researchers passionate about improving software development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal-on-scroll">
              {teamMembers.map((member, index) => (
                <div key={index} className="glass-card overflow-hidden group">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium">{member.name}</h3>
                    <p className="text-primary mb-3">{member.role}</p>
                    <p className="text-sm text-foreground/70">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Timeline Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 reveal-on-scroll">
              <h2 className="text-3xl md:text-5xl font-light mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                From startup to industry leader in AI-powered code quality.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto reveal-on-scroll">
              {timeline.map((item, index) => (
                <div key={index} className="flex mb-12 last:mb-0">
                  <div className="flex flex-col items-center mr-8">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary font-medium">
                      {item.year}
                    </div>
                    {index !== timeline.length - 1 && (
                      <div className="w-0.5 grow bg-border mt-2"></div>
                    )}
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                    <p className="text-foreground/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center reveal-on-scroll">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Ready to transform your development process?
              </h2>
              <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">
                Join thousands of developers already using AuditFlow to improve code quality and manage technical debt.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/#pricing" className="neo-button">
                  View Pricing
                </Link>
                <Link to="/contact" className="neo-button">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
