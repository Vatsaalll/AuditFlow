
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-border/40 last:border-b-0">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-5 text-left focus:outline-none"
      >
        <h3 className="text-lg font-medium pr-8">{question}</h3>
        <span>
          {isOpen ? (
            <ChevronUp size={20} className="text-foreground/70" />
          ) : (
            <ChevronDown size={20} className="text-foreground/70" />
          )}
        </span>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        )}
      >
        <p className="text-foreground/70">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const faqs = [
    {
      question: "How does AuditFlow's AI code auditing work?",
      answer: "AuditFlow uses a combination of static code analysis and machine learning to identify bugs, security vulnerabilities, and code quality issues. Our AI models have been trained on millions of code repositories to recognize patterns and potential problems. The system gets smarter over time as it learns from your specific codebase."
    },
    {
      question: "Can AuditFlow integrate with my existing CI/CD pipeline?",
      answer: "Yes! AuditFlow is designed to seamlessly integrate with popular CI/CD tools including GitHub Actions, GitLab CI, Jenkins, and CircleCI. Our webhooks and APIs allow you to trigger code audits automatically on every commit or pull request."
    },
    {
      question: "How accurate is the technical debt tracking?",
      answer: "Our technical debt tracking uses a sophisticated scoring system that considers factors like code complexity, duplication, test coverage, documentation, and adherence to best practices. Studies show our metrics have an 87% correlation with expert developer assessments of technical debt."
    },
    {
      question: "Is my code secure with AuditFlow?",
      answer: "We take security extremely seriously. All code analysis happens in isolated environments, and we never store your source code. We only retain metadata necessary for tracking metrics over time. Our systems are SOC 2 Type II certified and we offer end-to-end encryption for Enterprise customers."
    },
    {
      question: "How does the developer mentoring feature work?",
      answer: "AuditFlow's mentoring system provides contextual feedback on code, explaining not just what issues exist but why they're problems and how to fix them. We include reference materials, best practice examples, and personalized learning paths based on each developer's skill gaps identified through their code."
    },
    {
      question: "Can I customize the code quality rules?",
      answer: "Absolutely! While we provide a comprehensive set of default rules based on industry standards, Pro and Enterprise plans can fully customize which rules apply to their projects. You can adjust sensitivity levels, disable certain types of checks, or even create custom rules specific to your organization's coding standards."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Have questions about AuditFlow? We've got answers.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto glass-card p-6 md:p-8 reveal-on-scroll">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
        
        <div className="text-center mt-10 reveal-on-scroll">
          <p className="text-foreground/70 mb-4">
            Still have questions? We're here to help.
          </p>
          <a href="/contact" className="neo-button">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
