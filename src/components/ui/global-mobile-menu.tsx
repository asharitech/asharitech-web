"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";

interface GlobalMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GlobalMobileMenu({ isOpen, onClose }: GlobalMobileMenuProps) {
  const navItems = [
    { href: "#about", label: "About", ariaLabel: "Learn about Ashari Tech" },
    { href: "#products", label: "Products", ariaLabel: "View our products" },
    { href: "#goals", label: "Goals", ariaLabel: "Our company goals" },
    { href: "#contact", label: "Contact", ariaLabel: "Contact us" },
  ];

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Full Screen Overlay with Backdrop Blur */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-all duration-500 ease-out z-[90]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel - Slide from Right */}
      <div
        id="mobile-menu"
        className="fixed top-0 right-0 h-full w-80 max-w-[90vw] z-[100] animate-slide-in-right"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        {/* Glass Panel */}
        <div className="h-full glass-card rounded-l-3xl border-l border-glass-border shadow-2xl overflow-hidden flex flex-col">
          
          {/* Header Section - Single Logo with Proper Spacing */}
          <div className="flex items-center justify-between p-6 border-b border-glass-border/50 min-h-[80px]">
            <div className="flex items-center gap-3">
              <Logo size="sm" showText={false} glowIntensity="medium" />
              <div>
                <h2 
                  id="mobile-menu-title" 
                  className="text-lg font-bold text-text-primary gradient-text"
                >
                  Ashari Tech
                </h2>
                <p className="text-xs text-text-muted uppercase tracking-widest">
                  Revolutionizing with AI
                </p>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="p-3 hover:bg-neon-orange/10 transition-colors min-h-[44px] min-w-[44px] rounded-xl"
              aria-label="Close menu"
            >
              <X className="h-5 w-5 text-neon-orange" />
            </Button>
          </div>

          {/* Navigation Links - Large Touch Targets */}
          <nav 
            className="flex-1 px-6 py-8 space-y-2 overflow-y-auto" 
            role="navigation" 
            aria-label="Mobile navigation"
          >
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "group flex items-center w-full p-4 text-left text-lg font-medium",
                  "text-text-secondary hover:text-neon-orange",
                  "bg-transparent hover:bg-neon-orange/5 active:bg-neon-orange/10",
                  "rounded-2xl transition-all duration-300 ease-out",
                  "border border-transparent hover:border-neon-orange/20",
                  "min-h-[56px] touch-target",
                  "transform hover:translate-x-2 hover:scale-[1.02]",
                  "animate-stagger-fade-in"
                )}
                style={{
                  animationDelay: `${index * 100 + 200}ms`,
                  animationFillMode: 'both'
                }}
                aria-label={item.ariaLabel}
              >
                <span className="flex-1">{item.label}</span>
                <div className="w-2 h-2 rounded-full bg-neon-orange/0 group-hover:bg-neon-orange transition-colors duration-300" />
              </a>
            ))}
          </nav>

          {/* Footer Section */}
          <div className="p-6 mt-auto">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-neon-orange/10 via-gold-orange/10 to-magenta-accent/10 border border-neon-orange/20">
              <p className="text-sm text-text-secondary text-center font-medium">
                Made with <span className="text-neon-orange">❤️</span> in Indonesia
              </p>
              <p className="text-xs text-text-muted text-center mt-1">
                Building the future, one innovation at a time
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}