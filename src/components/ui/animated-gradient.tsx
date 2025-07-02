"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedGradientProps {
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "radial" | "conic" | "mesh";
  animate?: boolean;
  intensity?: "low" | "medium" | "high";
}

export function AnimatedGradient({
  className,
  children,
  variant = "default",
  animate = true,
  intensity = "medium",
}: AnimatedGradientProps) {
  const intensityMap = {
    low: { opacity: 0.3, blur: 40 },
    medium: { opacity: 0.5, blur: 60 },
    high: { opacity: 0.7, blur: 80 },
  };

  const { opacity, blur } = intensityMap[intensity];

  const gradients = {
    default:
      "linear-gradient(135deg, #FF9900 0%, #FF5700 25%, #FFB347 50%, #E94B8A 75%, #FF9900 100%)",
    radial:
      "radial-gradient(circle at 50% 50%, #FF9900 0%, #FF5700 30%, #E94B8A 60%, transparent 100%)",
    conic:
      "conic-gradient(from 180deg at 50% 50%, #FF9900 0deg, #FF5700 90deg, #FFB347 180deg, #E94B8A 270deg, #FF9900 360deg)",
    mesh: `
      radial-gradient(at 40% 20%, #FF9900 0px, transparent 50%),
      radial-gradient(at 80% 0%, #E94B8A 0px, transparent 50%),
      radial-gradient(at 0% 50%, #FFB347 0px, transparent 50%),
      radial-gradient(at 80% 50%, #FF5700 0px, transparent 50%),
      radial-gradient(at 0% 100%, #7B5FE7 0px, transparent 50%),
      radial-gradient(at 80% 100%, #FF9900 0px, transparent 50%)
    `,
  };

  return (
    <div className={cn("relative", className)}>
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: gradients[variant],
          filter: `blur(${blur}px)`,
          opacity,
        }}
        animate={
          animate
            ? {
                scale: [1, 1.1, 1],
                rotate: variant === "conic" ? [0, 360] : [0, 5, 0],
              }
            : {}
        }
        transition={{
          duration: variant === "conic" ? 20 : 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      {children}
    </div>
  );
}

export function MeshGradient({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 -z-10", className)}>
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(at 40% 20%, #FF9900 0px, transparent 50%),
            radial-gradient(at 80% 0%, #E94B8A 0px, transparent 50%),
            radial-gradient(at 0% 50%, #FFB347 0px, transparent 50%),
            radial-gradient(at 80% 50%, #FF5700 0px, transparent 50%),
            radial-gradient(at 0% 100%, #7B5FE7 0px, transparent 50%),
            radial-gradient(at 80% 100%, #FF9900 0px, transparent 50%)
          `,
          filter: "blur(60px) saturate(150%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-deep-charcoal/50" />
    </div>
  );
}
