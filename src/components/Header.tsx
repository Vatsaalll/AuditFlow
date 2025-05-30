
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import AuthModal from "./AuthModal";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/#hero"
  },
  {
    label: "Features",
    href: "/#features"
  },
  {
    label: "How It Works",
    href: "/#how-it-works"
  },
  {
    label: "Testimonials",
    href: "/#testimonials"
  },
  {
    label: "Pricing",
    href: "/#pricing"
  },
  {
    label: "FAQ",
    href: "/#faq"
  }
];

export default function Header({ isHomePage = true }: { isHomePage?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { user, signOut } = useAuth();
  const location = useLocation();

  // Check if we're actually on the home page
  const isActuallyHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleGetStarted = () => {
    if (user) {
      // If user is logged in, scroll to pricing
      if (isActuallyHomePage) {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
          pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home page with pricing anchor
        window.location.href = '/#pricing';
      }
    } else {
      // If not logged in, open auth modal
      setAuthModalOpen(true);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    setMobileMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    if (isActuallyHomePage) {
      // If on home page, use smooth scrolling to anchor
      const targetId = href.substring(2); // Remove "/#"
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on other pages, navigate to home page with anchor
      window.location.href = href;
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
          scrolled ? "blur-header" : ""
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="text-foreground flex items-center gap-2">
            <span className="font-medium text-xl">AuditFlow</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground/80 hover:text-foreground transition-colors text-sm bg-transparent border-none cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <button onClick={handleSignOut} className="neo-button flex items-center gap-2">
                <LogOut size={16} />
                Sign Out
              </button>
            ) : (
              <button onClick={handleGetStarted} className="neo-button">
                Get Started
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-foreground"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-background shadow-xl transition-transform duration-300 ease-in-out md:hidden",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex h-full flex-col overflow-y-auto py-6 px-6">
            <div className="flex items-center justify-end">
              <button
                onClick={toggleMobileMenu}
                className="text-foreground"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="mt-8 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-foreground/80 hover:text-foreground py-2 text-base text-left bg-transparent border-none cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="mt-auto pt-6">
              {user ? (
                <button onClick={handleSignOut} className="neo-button w-full justify-center flex items-center gap-2">
                  <LogOut size={16} />
                  Sign Out
                </button>
              ) : (
                <button
                  onClick={() => {
                    setAuthModalOpen(true);
                    toggleMobileMenu();
                  }}
                  className="neo-button w-full justify-center"
                >
                  Get Started
                </button>
              )}
            </div>
          </div>
        </div>
        
        {/* Overlay for mobile menu */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={toggleMobileMenu}
          ></div>
        )}
      </header>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        defaultTab="signup"
      />
    </>
  );
}
