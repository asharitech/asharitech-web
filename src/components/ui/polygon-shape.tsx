"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PolygonShapeProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "triangle" | "hexagon" | "octagon";
  animate?: boolean;
}

export function PolygonShape({ 
  className, 
  size = "md", 
  variant = "hexagon",
  animate = true 
}: PolygonShapeProps) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32"
  };

  const polygonPaths = {
    triangle: "M50 10 L90 80 L10 80 Z",
    hexagon: "M50 5 L85 25 L85 65 L50 85 L15 65 L15 25 Z",
    octagon: "M30 10 L70 10 L90 30 L90 70 L70 90 L30 90 L10 70 L10 30 Z"
  };

  return (
    <motion.div
      className={cn(
        "relative",
        sizeClasses[size],
        className
      )}
      animate={animate ? {
        rotate: [0, 360],
      } : {}}
      transition={{
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear"
      }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Glow effect */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <linearGradient id="polygon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF9900" />
            <stop offset="50%" stopColor="#FFB347" />
            <stop offset="100%" stopColor="#E94B8A" />
          </linearGradient>
        </defs>
        
        {/* Main polygon */}
        <path
          d={polygonPaths[variant]}
          stroke="url(#polygon-gradient)"
          strokeWidth="2"
          fill="rgba(255, 153, 0, 0.1)"
          filter="url(#glow)"
        />
        
        {/* Inner lines for geometric detail */}
        <path
          d={polygonPaths[variant]}
          stroke="rgba(255, 179, 71, 0.3)"
          strokeWidth="1"
          fill="none"
          transform="scale(0.8) translate(10, 10)"
        />
        
        {/* Corner dots */}
        {variant === "hexagon" && (
          <>
            <circle cx="50" cy="5" r="2" fill="#E94B8A" />
            <circle cx="85" cy="25" r="2" fill="#E94B8A" />
            <circle cx="85" cy="65" r="2" fill="#E94B8A" />
            <circle cx="50" cy="85" r="2" fill="#E94B8A" />
            <circle cx="15" cy="65" r="2" fill="#E94B8A" />
            <circle cx="15" cy="25" r="2" fill="#E94B8A" />
          </>
        )}
      </svg>
    </motion.div>
  );
}

export function PolygonCluster({ className }: { className?: string }) {
  return (
    <div className={cn("absolute", className)}>
      <PolygonShape 
        size="lg" 
        variant="hexagon" 
        className="absolute top-0 left-0 opacity-30"
      />
      <PolygonShape 
        size="md" 
        variant="triangle" 
        className="absolute top-10 left-20 opacity-20"
      />
      <PolygonShape 
        size="sm" 
        variant="octagon" 
        className="absolute top-5 right-5 opacity-25"
      />
    </div>
  );
}