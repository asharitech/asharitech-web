"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface FloatingIconsProps {
  icons: {
    icon: LucideIcon;
    color: string;
    size?: number;
    duration?: number;
    delay?: number;
  }[];
  className?: string;
}

export function FloatingIcons({ icons, className }: FloatingIconsProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {icons.map((item, index) => {
        const Icon = item.icon;
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const randomRotation = Math.random() * 360;

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, -15, 0],
              rotate: [randomRotation, randomRotation + 360],
            }}
            transition={{
              duration: item.duration || 20,
              repeat: Number.POSITIVE_INFINITY,
              delay: item.delay || index * 0.5,
              ease: "linear",
            }}
          >
            <div
              className="relative"
              style={{
                filter: `drop-shadow(0 0 10px ${item.color}80)`,
              }}
            >
              <Icon
                size={item.size || 24}
                style={{ color: item.color }}
                className="opacity-20"
              />
              <div
                className="absolute inset-0 blur-md"
                style={{
                  background: `radial-gradient(circle, ${item.color}40 0%, transparent 70%)`,
                }}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

interface OrbitingIconsProps {
  children: React.ReactNode;
  icons: {
    icon: LucideIcon;
    color: string;
    size?: number;
  }[];
  radius?: number;
  duration?: number;
  className?: string;
}

export function OrbitingIcons({
  children,
  icons,
  radius = 150,
  duration = 20,
  className,
}: OrbitingIconsProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Center content */}
      <div className="relative z-10">{children}</div>

      {/* Orbiting icons */}
      {icons.map((item, index) => {
        const Icon = item.icon;
        const angle = (360 / icons.length) * index;
        const delay = (duration / icons.length) * index;

        return (
          <motion.div
            key={index}
            className="absolute top-1/2 left-1/2"
            style={{
              width: radius * 2,
              height: radius * 2,
              marginLeft: -radius,
              marginTop: -radius,
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay,
            }}
          >
            <div
              className="absolute"
              style={{
                top: 0,
                left: "50%",
                transform: `translateX(-50%) rotate(${angle}deg)`,
              }}
            >
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  delay,
                }}
                style={{
                  filter: `drop-shadow(0 0 10px ${item.color}80)`,
                }}
              >
                <Icon
                  size={item.size || 24}
                  style={{ color: item.color }}
                  className="opacity-70"
                />
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
