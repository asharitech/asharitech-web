"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ParticleFieldProps {
  className?: string;
  particleCount?: number;
  particleColor?: string;
  lineColor?: string;
  maxDistance?: number;
  speed?: number;
}

export function ParticleField({
  className,
  particleCount = 50,
  particleColor = "#FF9900",
  lineColor = "#FF990030",
  maxDistance = 150,
  speed = 0.5,
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;

    constructor(canvas: HTMLCanvasElement) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * speed;
      this.vy = (Math.random() - 0.5) * speed;
      this.radius = Math.random() * 2 + 1;
    }

    update(canvas: HTMLCanvasElement) {
      this.x += this.vx;
      this.y += this.vy;

      // Bounce off walls
      if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
      if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

      // Keep particles within bounds
      this.x = Math.max(0, Math.min(canvas.width, this.x));
      this.y = Math.max(0, Math.min(canvas.height, this.y));
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = particleColor;
      ctx.fill();
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      
      // Reinitialize particles on resize
      particlesRef.current = Array.from(
        { length: particleCount },
        () => new Particle(canvas)
      );
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        particle.update(canvas);
        particle.draw(ctx);
      });

      // Draw connections
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          const distance = Math.sqrt(
            Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
          );

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = lineColor.replace("30", Math.floor(opacity * 30).toString(16).padStart(2, "0"));
            ctx.lineWidth = opacity * 2;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particleCount, particleColor, lineColor, maxDistance, speed, Particle]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0", className)}
      style={{ width: "100%", height: "100%" }}
    />
  );
}