"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Cube3DProps {
  size?: number;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: "neon" | "glass" | "wireframe";
  color?: "orange" | "magenta" | "purple";
  customStyle?: React.CSSProperties;
}

export function Cube3D({
  size = 80,
  className,
  delay = 0,
  duration = 20,
  variant = "neon",
  color = "orange",
  customStyle,
}: Cube3DProps) {
  const colorMap = {
    orange: {
      primary: "#FF9900",
      secondary: "#FF5700",
      glow: "rgba(255, 153, 0, 0.4)",
      border: "rgba(255, 153, 0, 0.3)",
    },
    magenta: {
      primary: "#E94B8A",
      secondary: "#FF5700",
      glow: "rgba(233, 75, 138, 0.4)",
      border: "rgba(233, 75, 138, 0.3)",
    },
    purple: {
      primary: "#7B5FE7",
      secondary: "#5B4C88",
      glow: "rgba(123, 95, 231, 0.4)",
      border: "rgba(123, 95, 231, 0.3)",
    },
  };

  const colors = colorMap[color];

  const faceStyles = {
    neon: {
      background: `linear-gradient(135deg, ${colors.primary}20 0%, ${colors.secondary}10 100%)`,
      border: `1px solid ${colors.border}`,
      boxShadow: `inset 0 0 20px ${colors.glow}, 0 0 20px ${colors.glow}`,
    },
    glass: {
      background: "rgba(24, 18, 36, 0.3)",
      backdropFilter: "blur(10px)",
      border: `1px solid ${colors.border}`,
      boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.1)",
    },
    wireframe: {
      background: "transparent",
      border: `2px solid ${colors.primary}`,
      boxShadow: `0 0 15px ${colors.glow}`,
    },
  };

  const style = faceStyles[variant];

  return (
    <motion.div
      className={cn("relative preserve-3d", className)}
      style={{
        width: size,
        height: size,
        transformStyle: "preserve-3d",
        ...customStyle,
      }}
      animate={{
        rotateY: [0, 360],
        rotateX: [0, 360],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
        delay,
      }}
    >
      {/* Front face */}
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          ...style,
          transform: `translateZ(${size / 2}px)`,
        }}
      />

      {/* Back face */}
      <div
        className="absolute inset-0 rounded-lg opacity-90"
        style={{
          ...style,
          transform: `rotateY(180deg) translateZ(${size / 2}px)`,
        }}
      />

      {/* Top face */}
      <div
        className="absolute inset-0 rounded-lg opacity-85"
        style={{
          ...style,
          transform: `rotateX(90deg) translateZ(${size / 2}px)`,
        }}
      />

      {/* Bottom face */}
      <div
        className="absolute inset-0 rounded-lg opacity-85"
        style={{
          ...style,
          transform: `rotateX(-90deg) translateZ(${size / 2}px)`,
        }}
      />

      {/* Left face */}
      <div
        className="absolute inset-0 rounded-lg opacity-80"
        style={{
          ...style,
          transform: `rotateY(-90deg) translateZ(${size / 2}px)`,
        }}
      />

      {/* Right face */}
      <div
        className="absolute inset-0 rounded-lg opacity-80"
        style={{
          ...style,
          transform: `rotateY(90deg) translateZ(${size / 2}px)`,
        }}
      />

      {/* Inner glow core */}
      {variant === "neon" && (
        <div
          className="absolute inset-4 rounded blur-xl"
          style={{
            background: `radial-gradient(circle, ${colors.glow} 0%, transparent 70%)`,
          }}
        />
      )}
    </motion.div>
  );
}

export function CubeCluster({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <Cube3D
        size={60}
        className="absolute top-0 left-0"
        delay={0}
        variant="neon"
        color="orange"
      />
      <Cube3D
        size={80}
        className="absolute top-12 left-16"
        delay={1}
        variant="wireframe"
        color="magenta"
      />
      <Cube3D
        size={50}
        className="absolute top-0 left-32"
        delay={2}
        variant="glass"
        color="purple"
      />
      <Cube3D
        size={70}
        className="absolute top-20 left-8"
        delay={0.5}
        variant="neon"
        color="magenta"
      />
      <Cube3D
        size={40}
        className="absolute top-8 left-24"
        delay={1.5}
        variant="wireframe"
        color="orange"
      />
    </div>
  );
}

// New geometric cube grid for background decoration
export function GeometricCubeGrid({ className }: { className?: string }) {
  const cubes = [
    {
      size: 30,
      x: "10%",
      y: "20%",
      delay: 0,
      variant: "wireframe" as const,
      color: "orange" as const,
    },
    {
      size: 40,
      x: "80%",
      y: "10%",
      delay: 0.5,
      variant: "neon" as const,
      color: "magenta" as const,
    },
    {
      size: 35,
      x: "20%",
      y: "70%",
      delay: 1,
      variant: "glass" as const,
      color: "purple" as const,
    },
    {
      size: 45,
      x: "70%",
      y: "60%",
      delay: 1.5,
      variant: "wireframe" as const,
      color: "orange" as const,
    },
    {
      size: 50,
      x: "50%",
      y: "40%",
      delay: 2,
      variant: "neon" as const,
      color: "magenta" as const,
    },
    {
      size: 25,
      x: "90%",
      y: "80%",
      delay: 2.5,
      variant: "glass" as const,
      color: "purple" as const,
    },
  ];

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className,
      )}
    >
      {cubes.map((cube, index) => (
        <Cube3D
          key={index}
          size={cube.size}
          className="absolute opacity-30"
          customStyle={{ left: cube.x, top: cube.y }}
          delay={cube.delay}
          duration={30}
          variant={cube.variant}
          color={cube.color}
        />
      ))}
    </div>
  );
}
