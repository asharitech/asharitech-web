# Accessibility Fixes for asharitech-web

## 1. Fix Button Text Contrast

In `src/app/page.tsx`, update button text color:

```tsx
// Line 118 - Primary button
<Button asChild size="lg" className="btn-neon group text-black touch-target">
```

## 2. Fix Badge Contrast

Ensure badges use proper text size and weight:

```tsx
// Lines 256-279 - Add font-semibold and text-sm minimum
<Badge
  variant="secondary"
  className="px-4 py-1.5 bg-neon-orange/10 text-neon-orange border border-neon-orange/30 font-semibold text-sm"
>
```

## 3. Add Pattern Toggle for Accessibility

Create a new component for pattern visibility control:

```tsx
// src/components/ui/pattern-toggle.tsx
"use client";

import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "./button";

export function PatternToggle() {
  const [patternsVisible, setPatternsVisible] = useState(true);

  useEffect(() => {
    // Check user preference
    const saved = localStorage.getItem("patterns-visible");
    if (saved !== null) {
      setPatternsVisible(saved === "true");
    }
  }, []);

  const togglePatterns = () => {
    const newValue = !patternsVisible;
    setPatternsVisible(newValue);
    localStorage.setItem("patterns-visible", String(newValue));
    document.body.classList.toggle("hide-patterns", !newValue);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={togglePatterns}
      className="fixed bottom-4 right-4 z-50"
      aria-label={patternsVisible ? "Hide background patterns" : "Show background patterns"}
    >
      {patternsVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
    </Button>
  );
}
```

Add CSS to hide patterns:

```css
/* In globals.css */
body.hide-patterns::before {
  display: none;
}

body.hide-patterns .mesh-pattern,
body.hide-patterns [class*="pattern"] {
  opacity: 0;
}
```

## 4. Improve Loading States

Add skeleton loaders for better perceived performance:

```tsx
// Use existing skeleton component
import { Skeleton } from "@/components/ui/skeleton";

// Example usage in product cards while loading
{isLoading ? (
  <Card className="glass-card">
    <CardHeader>
      <Skeleton className="h-20 w-20 rounded-2xl" />
      <Skeleton className="h-8 w-48" />
    </CardHeader>
    <CardContent>
      <Skeleton className="h-24 w-full" />
    </CardContent>
  </Card>
) : (
  // Regular content
)}
```

## 5. Form Accessibility Enhancements

For any future forms, ensure:

```tsx
// Example accessible form field
<div className="space-y-2">
  <Label htmlFor="email" className="text-sm font-medium">
    Email Address
    <span className="text-red-500 ml-1" aria-label="required">*</span>
  </Label>
  <Input
    id="email"
    type="email"
    required
    aria-required="true"
    aria-invalid={errors.email ? "true" : "false"}
    aria-describedby={errors.email ? "email-error" : undefined}
    className="touch-target"
  />
  {errors.email && (
    <p id="email-error" className="text-sm text-red-500" role="alert">
      {errors.email}
    </p>
  )}
</div>
```

## 6. Enhanced Mobile Navigation

Add visual feedback for active section:

```tsx
// In GlobalMobileMenu component
const [activeSection, setActiveSection] = useState("");

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    { threshold: 0.5 }
  );

  // Observe all sections
  document.querySelectorAll("section[id]").forEach((section) => {
    observer.observe(section);
  });

  return () => observer.disconnect();
}, []);

// Update nav item classes
className={cn(
  // ... existing classes
  activeSection === item.href.slice(1) && "bg-neon-orange/10 border-neon-orange/30"
)}
```

## Testing Checklist

- [ ] Run contrast checker after button text changes
- [ ] Test keyboard navigation flow
- [ ] Verify screen reader announcements
- [ ] Test with browser zoom at 200%
- [ ] Check touch targets on actual mobile devices
- [ ] Test with reduced motion preference
- [ ] Verify focus trap in mobile menu