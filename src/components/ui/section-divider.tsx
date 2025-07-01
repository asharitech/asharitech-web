import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
  variant?: "mesh" | "angular" | "wave" | "polygon";
  color?: "orange" | "magenta" | "gold";
}

export function SectionDivider({
  className = "",
  variant = "mesh",
  color = "orange",
}: SectionDividerProps) {
  const colorMap = {
    orange: "#FF9900",
    magenta: "#E94B8A",
    gold: "#FFB347",
  };

  const selectedColor = colorMap[color];

  switch (variant) {
    case "mesh":
      return (
        <div className={cn("relative w-full h-24 overflow-hidden", className)}>
          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1200 100"
          >
            <defs>
              <linearGradient id={`mesh-gradient-${color}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={selectedColor} stopOpacity="0" />
                <stop offset="50%" stopColor={selectedColor} stopOpacity="0.3" />
                <stop offset="100%" stopColor={selectedColor} stopOpacity="0" />
              </linearGradient>
            </defs>
            <g stroke={`url(#mesh-gradient-${color})`} strokeWidth="1" fill="none">
              {/* Mesh pattern */}
              {Array.from({ length: 20 }).map((_, i) => (
                <line
                  key={`h-${i}`}
                  x1="0"
                  y1={i * 5}
                  x2="1200"
                  y2={i * 5}
                  opacity={0.3}
                />
              ))}
              {Array.from({ length: 60 }).map((_, i) => (
                <line
                  key={`v-${i}`}
                  x1={i * 20}
                  y1="0"
                  x2={i * 20}
                  y2="100"
                  opacity={0.3}
                />
              ))}
              {/* Diagonal lines */}
              {Array.from({ length: 30 }).map((_, i) => (
                <line
                  key={`d-${i}`}
                  x1={i * 40 - 200}
                  y1="0"
                  x2={i * 40}
                  y2="100"
                  opacity={0.2}
                />
              ))}
            </g>
          </svg>
        </div>
      );

    case "angular":
      return (
        <div className={cn("relative w-full h-16 overflow-hidden", className)}>
          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1200 64"
          >
            <defs>
              <linearGradient id={`angular-gradient-${color}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={selectedColor} stopOpacity="0.1" />
                <stop offset="50%" stopColor={selectedColor} stopOpacity="0.5" />
                <stop offset="100%" stopColor={selectedColor} stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d="M0,32 L150,16 L300,48 L450,24 L600,40 L750,20 L900,44 L1050,28 L1200,32"
              stroke={`url(#angular-gradient-${color})`}
              strokeWidth="2"
              fill="none"
              className="drop-shadow-[0_0_10px_rgba(255,153,0,0.5)]"
            />
            <path
              d="M0,32 L150,16 L300,48 L450,24 L600,40 L750,20 L900,44 L1050,28 L1200,32"
              stroke={selectedColor}
              strokeWidth="1"
              fill="none"
              opacity="0.3"
              strokeDasharray="5,5"
            />
          </svg>
        </div>
      );

    case "wave":
      return (
        <div className={cn("relative w-full h-20 overflow-hidden", className)}>
          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1200 80"
          >
            <defs>
              <linearGradient id={`wave-gradient-${color}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={selectedColor} stopOpacity="0" />
                <stop offset="25%" stopColor={selectedColor} stopOpacity="0.3" />
                <stop offset="50%" stopColor={selectedColor} stopOpacity="0.5" />
                <stop offset="75%" stopColor={selectedColor} stopOpacity="0.3" />
                <stop offset="100%" stopColor={selectedColor} stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,40 Q300,20 600,40 T1200,40"
              stroke={`url(#wave-gradient-${color})`}
              strokeWidth="3"
              fill="none"
              className="drop-shadow-[0_0_15px_rgba(255,153,0,0.6)]"
            />
            <circle cx="600" cy="40" r="4" fill={selectedColor} className="animate-pulse" />
          </svg>
        </div>
      );

    case "polygon":
      return (
        <div className={cn("relative w-full h-16 overflow-hidden", className)}>
          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1200 64"
          >
            <defs>
              <linearGradient id={`polygon-gradient-${color}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={selectedColor} stopOpacity="0.1" />
                <stop offset="50%" stopColor={selectedColor} stopOpacity="0.4" />
                <stop offset="100%" stopColor={selectedColor} stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <g fill="none" stroke={`url(#polygon-gradient-${color})`} strokeWidth="1.5">
              {/* Hexagon pattern */}
              {Array.from({ length: 10 }).map((_, i) => (
                <polygon
                  key={i}
                  points={`${120 * i + 60},10 ${120 * i + 90},25 ${120 * i + 90},40 ${120 * i + 60},55 ${120 * i + 30},40 ${120 * i + 30},25`}
                  opacity={0.6}
                  className="drop-shadow-[0_0_8px_rgba(255,153,0,0.4)]"
                />
              ))}
            </g>
            {/* Center accent */}
            <circle cx="600" cy="32" r="6" fill={selectedColor} opacity="0.6" className="animate-pulse" />
          </svg>
        </div>
      );

    default:
      return null;
  }
}