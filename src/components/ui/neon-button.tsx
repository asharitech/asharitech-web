"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Button, type ButtonProps } from "./button";

interface NeonButtonProps extends ButtonProps {
  neonColor?: "orange" | "magenta" | "purple" | "blue";
  pulseAnimation?: boolean;
}

const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, children, neonColor = "orange", pulseAnimation = true, ...props }, ref) => {
    const colorMap = {
      orange: {
        primary: "#FF9900",
        secondary: "#FF5700",
        glow: "rgba(255, 153, 0, 0.5)",
        shadow: "rgba(255, 153, 0, 0.8)",
      },
      magenta: {
        primary: "#E94B8A",
        secondary: "#FF5FAE",
        glow: "rgba(233, 75, 138, 0.5)",
        shadow: "rgba(233, 75, 138, 0.8)",
      },
      purple: {
        primary: "#7B5FE7",
        secondary: "#9B7FFF",
        glow: "rgba(123, 95, 231, 0.5)",
        shadow: "rgba(123, 95, 231, 0.8)",
      },
      blue: {
        primary: "#00D4FF",
        secondary: "#0099FF",
        glow: "rgba(0, 212, 255, 0.5)",
        shadow: "rgba(0, 212, 255, 0.8)",
      },
    };

    const colors = colorMap[neonColor];

    return (
      <motion.div
        className="relative inline-flex"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Glow background */}
        <div
          className="absolute inset-0 rounded-lg opacity-75 blur-xl"
          style={{
            background: `radial-gradient(circle, ${colors.glow} 0%, transparent 70%)`,
            animation: pulseAnimation ? "pulse 2s ease-in-out infinite" : "none",
          }}
        />
        
        {/* Button */}
        <Button
          ref={ref}
          className={cn(
            "relative overflow-hidden border-2 transition-all duration-300",
            "before:absolute before:inset-0 before:-z-10",
            "before:bg-gradient-to-r before:opacity-0 before:transition-opacity before:duration-300",
            "hover:before:opacity-100",
            "after:absolute after:inset-0 after:-z-20",
            "after:bg-gradient-to-r after:opacity-20",
            className
          )}
          style={{
            borderColor: colors.primary,
            color: colors.primary,
            boxShadow: `
              0 0 20px ${colors.glow},
              inset 0 0 20px ${colors.glow}33
            `,
            background: `linear-gradient(135deg, ${colors.primary}10, ${colors.secondary}10)`,
          }}
          {...props}
        >
          {/* Animated border */}
          <motion.div
            className="absolute inset-0 rounded-lg"
            style={{
              background: `linear-gradient(90deg, transparent, ${colors.primary}, transparent)`,
              backgroundSize: "200% 100%",
            }}
            animate={{
              backgroundPosition: ["0% 0%", "200% 0%"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          
          {/* Content */}
          <span className="relative z-10">{children}</span>
          
          {/* Hover effect overlay */}
          <motion.div
            className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at center, ${colors.primary}20 0%, transparent 70%)`,
            }}
          />
        </Button>
      </motion.div>
    );
  }
);

NeonButton.displayName = "NeonButton";

export { NeonButton };