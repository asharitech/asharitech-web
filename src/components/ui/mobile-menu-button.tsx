"use client";

import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export function MobileMenuButton({
  isOpen,
  onClick,
  className,
}: MobileMenuButtonProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onClick}
      className={cn(
        "mobile-menu-button p-3 hover:bg-neon-orange/10 transition-colors relative min-h-[48px] min-w-[48px] rounded-xl",
        className,
      )}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      <div className="relative">
        <Menu
          className={cn(
            "h-6 w-6 text-neon-orange transition-all duration-200 ease-out",
            isOpen ? "rotate-45 opacity-0" : "rotate-0 opacity-100",
          )}
        />
        <X
          className={cn(
            "h-6 w-6 text-neon-orange absolute inset-0 transition-all duration-200 ease-out",
            isOpen ? "rotate-0 opacity-100" : "rotate-45 opacity-0",
          )}
        />
      </div>
    </Button>
  );
}
