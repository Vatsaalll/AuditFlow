
import { Wallet, Bot, BarChart } from "lucide-react";

interface WorksCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

function WorksCard({ title, description, icon, imageUrl }: WorksCardProps) {
  return (
    <div className="glass-card group hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 md:p-8">
        <div className="inline-flex items-center justify-center w-12 h-12 mb-5 rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="text-xl mb-3 font-medium">{title}</h3>
        <p className="text-foreground/70">{description}</p>
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  const cards = [
    {
      title: "Connect Your Repository",
      description: "Seamlessly integrate with GitHub, GitLab, or Bitbucket to start monitoring your codebase in minutes.",
      icon: <Wallet size={24} />,
      imageUrl: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
    },
    {
      title: "Set Up AI Assistant",
      description: "Configure your AI assistant to focus on specific code areas, languages, and technical debt metrics.",
      icon: <Bot size={24} />,
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Automate Your Workflow",
      description: "Let the system automatically audit code, track technical debt, and upskill your developers.",
      icon: <BarChart size={24} />,
      imageUrl: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    },
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            How It Works
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Get started in three simple steps and transform your development process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-on-scroll">
          {cards.map((card, index) => (
            <WorksCard 
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
