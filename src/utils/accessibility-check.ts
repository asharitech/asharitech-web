// Utility to check color contrast for accessibility (WCAG compliance)

interface Color {
  r: number;
  g: number;
  b: number;
}

// Convert hex color to RGB
function hexToRgb(hex: string): Color | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: Number.parseInt(result[1], 16),
        g: Number.parseInt(result[2], 16),
        b: Number.parseInt(result[3], 16),
      }
    : null;
}

// Calculate relative luminance
function getLuminance(color: Color): number {
  const { r, g, b } = color;
  const sRGB = [r, g, b].map((val) => {
    const normalized = val / 255;
    return normalized <= 0.03928 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
}

// Calculate contrast ratio between two colors
export function getContrastRatio(
  foreground: string,
  background: string,
): number {
  const fgColor = hexToRgb(foreground);
  const bgColor = hexToRgb(background);

  if (!fgColor || !bgColor) return 0;

  const fgLuminance = getLuminance(fgColor);
  const bgLuminance = getLuminance(bgColor);

  const lighter = Math.max(fgLuminance, bgLuminance);
  const darker = Math.min(fgLuminance, bgLuminance);

  return (lighter + 0.05) / (darker + 0.05);
}

// Check if contrast meets WCAG standards
export function meetsWCAG(
  ratio: number,
  level: "AA" | "AAA" = "AA",
  isLargeText = false,
): boolean {
  if (level === "AA") {
    return isLargeText ? ratio >= 3 : ratio >= 4.5;
  }
    return isLargeText ? ratio >= 4.5 : ratio >= 7;
}

// Color combinations used in the design
export const colorChecks = {
  // Text on backgrounds
  primaryTextOnDark: {
    foreground: "#F8F8FF", // Primary text
    background: "#181224", // Deep charcoal
    usage: "Primary text on dark background",
  },
  secondaryTextOnDark: {
    foreground: "#EDEDF0", // Secondary text
    background: "#181224",
    usage: "Secondary text on dark background",
  },
  mutedTextOnDark: {
    foreground: "#9CA3AF", // Muted text
    background: "#181224",
    usage: "Muted text on dark background",
  },
  // Neon accents on dark
  neonOrangeOnDark: {
    foreground: "#FF9900",
    background: "#181224",
    usage: "Neon orange accents on dark",
  },
  // Links and interactive elements
  neonOrangeLink: {
    foreground: "#FF9900",
    background: "#1A1A1F",
    usage: "Orange links on almost black",
  },
  magentaAccent: {
    foreground: "#E94B8A",
    background: "#181224",
    usage: "Magenta accents on dark",
  },
  // Button text
  whiteOnNeonOrange: {
    foreground: "#FFFFFF",
    background: "#FF9900",
    usage: "White text on neon orange buttons",
  },
  whiteOnMagenta: {
    foreground: "#FFFFFF",
    background: "#E94B8A",
    usage: "White text on magenta elements",
  },
};

// Run accessibility checks
export function runAccessibilityChecks() {
  console.log("=== WCAG Color Contrast Check ===\n");

  Object.entries(colorChecks).forEach(([key, check]) => {
    const ratio = getContrastRatio(check.foreground, check.background);
    const meetsAA = meetsWCAG(ratio, "AA");
    const meetsAAA = meetsWCAG(ratio, "AAA");

    console.log(`${check.usage}:`);
    console.log(`  ${check.foreground} on ${check.background}`);
    console.log(`  Contrast Ratio: ${ratio.toFixed(2)}:1`);
    console.log(`  WCAG AA: ${meetsAA ? "✅ PASS" : "❌ FAIL"}`);
    console.log(`  WCAG AAA: ${meetsAAA ? "✅ PASS" : "❌ FAIL"}`);
    console.log("");
  });
}
