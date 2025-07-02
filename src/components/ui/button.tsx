import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neon-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-neon-orange text-white hover:bg-neon-orange-dark hover:shadow-[0_0_30px_rgba(255,159,28,0.5)] transform hover:-translate-y-0.5 active:scale-[0.98]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border-2 border-glass-border bg-transparent text-text-primary hover:border-glass-border-hover hover:bg-glass-dark backdrop-blur-sm",
        secondary:
          "bg-gold-orange text-white hover:bg-gold-orange-dark hover:shadow-[0_0_20px_rgba(255,184,92,0.4)] active:scale-[0.98]",
        ghost:
          "hover:bg-glass-dark hover:backdrop-blur-lg text-text-secondary hover:text-text-primary",
        link: "text-neon-orange underline-offset-4 hover:underline hover:text-gold-orange",
        glass:
          "glass-card text-text-primary hover:shadow-lg hover:border-glass-border-hover",
      },
      size: {
        default: "min-h-[44px] px-6 py-3",
        sm: "min-h-[36px] rounded-lg px-4 py-2 text-sm",
        lg: "min-h-[56px] rounded-xl px-10 py-4 text-base",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
