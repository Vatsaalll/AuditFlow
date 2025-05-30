
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import AuthModal from "@/components/AuthModal";

interface PricingTierProps {
  name: string;
  description: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  onCtaClick: () => void;
}

function PricingTier({ name, description, price, features, isPopular, ctaText, onCtaClick }: PricingTierProps) {
  return (
    <div className={cn(
      "glass-card p-8 relative flex flex-col h-full",
      isPopular && "ring-2 ring-primary shadow-lg"
    )}>
      {isPopular && (
        <div className="absolute -top-4 inset-x-0 flex justify-center">
          <span className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
            RECOMMENDED
          </span>
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-xl font-medium mb-2">{name}</h3>
        <p className="text-foreground/70 mb-4">{description}</p>
        <div className="flex items-end">
          <span className="text-3xl font-medium">{price}</span>
          {price !== "Custom" && <span className="text-foreground/70 ml-1">/month</span>}
        </div>
      </div>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check size={18} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-foreground/80">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto">
        <button 
          onClick={onCtaClick}
          className={cn(
            "neo-button w-full justify-center",
            isPopular ? "bg-gradient-to-br from-primary to-primary/80 text-white" : ""
          )}
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
}

export default function PricingSection() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authDefaultTab, setAuthDefaultTab] = useState<'login' | 'signup'>('signup');
  const { user } = useAuth();

  const handleAuthRequired = (tab: 'login' | 'signup' = 'signup') => {
    if (!user) {
      setAuthDefaultTab(tab);
      setAuthModalOpen(true);
    }
  };

  const handleContactSales = () => {
    // Navigate to contact page
    window.location.href = '/contact';
  };

  const pricingTiers = [
    {
      name: "Free",
      description: "Perfect for individual developers",
      price: "$0",
      features: [
        "AI code auditing (5 repos)",
        "Basic tech debt tracking",
        "Junior developer mentoring",
        "GitHub integration",
        "Weekly summary reports"
      ],
      ctaText: "Start Free",
      onCtaClick: () => handleAuthRequired('signup')
    },
    {
      name: "Pro",
      description: "Designed for growing teams",
      price: "$49",
      features: [
        "Everything in Free",
        "Unlimited repositories",
        "Advanced tech debt metrics",
        "Custom code quality rules",
        "PR automated reviews",
        "Historical analysis",
        "API access"
      ],
      isPopular: true,
      ctaText: "Start 14-Day Trial",
      onCtaClick: () => handleAuthRequired('signup')
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: "Custom",
      features: [
        "Everything in Pro",
        "Dedicated account manager",
        "Custom integrations",
        "On-premise deployment",
        "SSO & advanced security",
        "Priority support",
        "Training sessions"
      ],
      ctaText: "Contact Sales",
      onCtaClick: handleContactSales
    }
  ];

  return (
    <>
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-3xl md:text-5xl font-light mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Choose the plan that works best for your team. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto reveal-on-scroll">
            {pricingTiers.map((tier, index) => (
              <PricingTier 
                key={index}
                name={tier.name}
                description={tier.description}
                price={tier.price}
                features={tier.features}
                isPopular={tier.isPopular}
                ctaText={tier.ctaText}
                onCtaClick={tier.onCtaClick}
              />
            ))}
          </div>
          
          <div className="mt-10 text-center text-sm text-foreground/60 max-w-2xl mx-auto reveal-on-scroll">
            <p>
              All plans include core features such as AI code auditing, tech debt tracking, and developer mentoring. 
              Need a custom solution? <a href="/contact" className="text-primary hover:underline">Contact our sales team</a> for tailored enterprise pricing.
            </p>
          </div>
        </div>
      </section>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        defaultTab={authDefaultTab}
      />
    </>
  );
}
