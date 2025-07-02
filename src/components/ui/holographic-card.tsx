"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface HolographicCardProps {
  className?: string;
  children?: React.ReactNode;
  intensity?: number;
}

export function HolographicCard({
  className,
  children,
  intensity = 0.15,
}: HolographicCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (event.clientX - rect.left) / width - 0.5;
    const y = (event.clientY - rect.top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      className={cn("relative preserve-3d", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Holographic gradient overlay */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300"
        style={{
          background: `
            linear-gradient(
              115deg,
              transparent 0%,
              rgba(255, 153, 0, ${intensity}) 30%,
              rgba(255, 87, 0, ${intensity}) 38%,
              rgba(233, 75, 138, ${intensity}) 40%,
              rgba(123, 95, 231, ${intensity}) 48%,
              rgba(255, 179, 71, ${intensity}) 52%,
              rgba(255, 153, 0, ${intensity}) 60%,
              transparent 100%
            )
          `,
          backgroundSize: "200% 200%",
          animation: isHovered ? "holographic 3s ease-in-out infinite" : "none",
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Glass effect base */}
      <div className="relative glass-card rounded-2xl p-6 overflow-hidden">
        {/* Shine effect */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{
            background: "linear-gradient(105deg, transparent 0%, rgba(255, 255, 255, 0.1) 45%, transparent 100%)",
            transform: "translateX(-100%)",
            animation: isHovered ? "shine 0.8s ease-in-out" : "none",
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>

      <style jsx>{`
        @keyframes holographic {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </motion.div>
  );
}
