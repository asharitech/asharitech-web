"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { type ReactNode, useRef } from "react";

interface ParallaxScrollProps {
  children: ReactNode;
  className?: string;
  speed?: number; // -1 to 1, negative for reverse parallax
  offset?: number;
}

export function ParallaxScroll({
  children,
  className = "",
  speed = 0.5,
  offset = 0,
}: ParallaxScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [offset - 100 * speed, offset + 100 * speed],
  );

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
