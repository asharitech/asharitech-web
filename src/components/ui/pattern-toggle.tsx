"use client";

import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "./button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

export function PatternToggle() {
  const [patternsVisible, setPatternsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check user preference from localStorage
    const saved = localStorage.getItem("patterns-visible");
    if (saved !== null) {
      const visible = saved === "true";
      setPatternsVisible(visible);
      document.body.classList.toggle("hide-patterns", !visible);
    }
  }, []);

  const togglePatterns = () => {
    const newValue = !patternsVisible;
    setPatternsVisible(newValue);
    localStorage.setItem("patterns-visible", String(newValue));
    document.body.classList.toggle("hide-patterns", !newValue);
  };

  // Avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={togglePatterns}
            className="fixed bottom-6 right-6 z-50 glass-card hover:border-neon-orange/30 transition-all duration-300 min-h-[48px] min-w-[48px]"
            aria-label={
              patternsVisible
                ? "Hide background patterns for reduced visual distraction"
                : "Show background patterns"
            }
          >
            {patternsVisible ? (
              <EyeOff className="h-5 w-5 text-text-secondary" />
            ) : (
              <Eye className="h-5 w-5 text-text-secondary" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className="text-sm">
          {patternsVisible ? "Hide patterns" : "Show patterns"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
