import type React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  glowIntensity?: "low" | "medium" | "high";
  as?: "h1" | "div";
}

const Logo: React.FC<LogoProps> = ({
  className = "",
  size = "md",
  showText = true,
  glowIntensity = "medium",
  as = "div",
}) => {
  const sizeMap = {
    sm: { logo: 32, text: "text-lg" },
    md: { logo: 48, text: "text-2xl" },
    lg: { logo: 64, text: "text-3xl" },
    xl: { logo: 80, text: "text-4xl" },
  };

  const glowMap = {
    low: "drop-shadow-[0_0_10px_rgba(255,153,0,0.5)]",
    medium: "drop-shadow-[0_0_20px_rgba(255,153,0,0.7)]",
    high: "drop-shadow-[0_0_30px_rgba(255,153,0,0.9)]",
  };

  const { logo: logoSize, text: textSize } = sizeMap[size];
  const glowClass = glowMap[glowIntensity];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Geometric A Logo */}
      <svg
        width={logoSize}
        height={logoSize}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`polygon-glow ${glowClass}`}
      >
        {/* Outer hexagonal shape */}
        <path
          d="M60 10 L100 35 L100 85 L60 110 L20 85 L20 35 Z"
          stroke="url(#gradient-orange)"
          strokeWidth="3"
          fill="none"
          className="animate-pulse-slow"
        />

        {/* Inner A shape */}
        <path
          d="M60 30 L75 70 L65 70 L60 55 L55 70 L45 70 Z M52 60 L68 60"
          fill="url(#gradient-orange)"
          className="drop-shadow-[0_0_10px_rgba(255,153,0,0.8)]"
        />

        {/* Geometric lines */}
        <line
          x1="30"
          y1="25"
          x2="40"
          y2="30"
          stroke="#FF9900"
          strokeWidth="2"
          opacity="0.6"
        />
        <line
          x1="80"
          y1="30"
          x2="90"
          y2="25"
          stroke="#FF9900"
          strokeWidth="2"
          opacity="0.6"
        />
        <line
          x1="30"
          y1="95"
          x2="40"
          y2="90"
          stroke="#E94B8A"
          strokeWidth="2"
          opacity="0.6"
        />
        <line
          x1="80"
          y1="90"
          x2="90"
          y2="95"
          stroke="#E94B8A"
          strokeWidth="2"
          opacity="0.6"
        />

        {/* Corner dots */}
        <circle
          cx="60"
          cy="10"
          r="2"
          fill="#FF9900"
          className="animate-pulse"
        />
        <circle
          cx="100"
          cy="35"
          r="2"
          fill="#FF5700"
          className="animate-pulse"
        />
        <circle
          cx="100"
          cy="85"
          r="2"
          fill="#E94B8A"
          className="animate-pulse"
        />
        <circle
          cx="60"
          cy="110"
          r="2"
          fill="#FF9900"
          className="animate-pulse"
        />
        <circle
          cx="20"
          cy="85"
          r="2"
          fill="#E94B8A"
          className="animate-pulse"
        />
        <circle
          cx="20"
          cy="35"
          r="2"
          fill="#FF5700"
          className="animate-pulse"
        />

        {/* Gradient definitions */}
        <defs>
          <linearGradient
            id="gradient-orange"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FF9900" />
            <stop offset="50%" stopColor="#FF5700" />
            <stop offset="100%" stopColor="#E94B8A" />
          </linearGradient>
        </defs>
      </svg>

      {/* Company name */}
      {showText && (
        <div>
          {as === "h1" ? (
            <h1
              className={`font-bold tracking-tight gradient-text ${textSize}`}
            >
              Ashari Tech
            </h1>
          ) : (
            <div
              className={`font-bold tracking-tight gradient-text ${textSize}`}
            >
              Ashari Tech
            </div>
          )}
          {size !== "sm" && (
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              Revolutionizing with AI
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;
