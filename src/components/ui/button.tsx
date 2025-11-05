import * as React from "react";

type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link"
  | "hero"
  | "luxury";

type ButtonSize = "default" | "sm" | "lg" | "icon";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const baseClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0";

const variantClasses: Record<ButtonVariant, string> = {
  default: "bg-primary text-primary-foreground hover:brightness-95 shadow-gold hover:shadow-elegant [&_svg]:size-4",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 [&_svg]:size-4",
  outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground [&_svg]:size-4",
  secondary: "bg-secondary text-secondary-foreground hover:brightness-110 shadow-soft [&_svg]:size-4",
  ghost: "hover:bg-accent hover:text-accent-foreground [&_svg]:size-4",
  link: "text-primary underline-offset-4 hover:underline [&_svg]:size-4",
  hero: "bg-primary text-secondary font-semibold shadow-gold hover:shadow-elegant hover:scale-105 [&_svg]:size-4",
  luxury: "bg-gradient-to-r from-[hsl(var(--gold-light))] to-[hsl(var(--gold-dark))] text-secondary font-semibold shadow-elegant hover:shadow-gold hover:scale-105 [&_svg]:size-4",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-11 px-6 py-2 text-sm",
  sm: "h-9 rounded-md px-4 text-xs",
  lg: "h-14 rounded-lg px-10 text-base",
  icon: "h-10 w-10",
};

function clsx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={clsx(baseClasses, variantClasses[variant], sizeClasses[size], className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
