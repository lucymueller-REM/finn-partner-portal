import {
  cloneElement,
  type ButtonHTMLAttributes,
  isValidElement,
  type ReactElement,
} from "react";

type Variant = "primary" | "secondary" | "secondaryInvert" | "outline" | "ghost" | "action";
type Size = "small" | "medium" | "large";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

// FINN Guidelines: 2px radius for all buttons
const variantStyles: Record<Variant, string> = {
  // Primary (01): bg #0072EA, hover #0167D4, text white
  primary:
    "bg-[#0072EA] text-white hover:bg-[#0167D4] disabled:bg-[#D7D7D7] disabled:text-[#979797]",
  // Secondary (02) Default: bg #1A1A1A, text white
  secondary:
    "bg-[#1A1A1A] text-white hover:shadow-finn disabled:bg-[#D7D7D7] disabled:text-[#979797]",
  // Secondary (02) Invert: bg white, hover #F8F8F8, text #1A1A1A
  secondaryInvert:
    "bg-white text-[#1A1A1A] hover:bg-[#F8F8F8] disabled:bg-[#D7D7D7] disabled:text-[#979797]",
  // Outlined (03): border #1A1A1A, hover bg #1A1A1A text white
  outline:
    "bg-transparent text-[#1A1A1A] border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white disabled:border-[#D7D7D7] disabled:text-[#979797] disabled:bg-transparent",
  // Ghost (04): hover bg #F8F8F8
  ghost: 
    "bg-transparent text-[#1A1A1A] hover:bg-[#F8F8F8] disabled:text-[#979797]",
  // Action (05): underlined text
  action:
    "bg-transparent text-[#1A1A1A] underline hover:text-[#707070] disabled:text-[#979797] focus:outline-2 focus:outline-[#0072EA]",
};

// Size styles based on FINN Guidelines
const sizeStyles: Record<Size, string> = {
  // Small: 32px height, padding 8x16, text 12/16
  small: "h-8 px-4 py-2 text-xs leading-4 gap-2",
  // Medium: 40px height, padding 8x16, text 16/22
  medium: "h-10 px-4 py-2 text-base leading-[22px] gap-2",
  // Large: 56px height, padding 16x32, text 16/22
  large: "h-14 px-8 py-4 text-base leading-[22px] gap-2.5",
};

// Action button has different sizes
const actionSizeStyles: Record<Size, string> = {
  small: "text-xs leading-4",      // 12/16
  medium: "text-sm leading-[18px]", // 14/18
  large: "text-base leading-[22px]", // 16/22
};

// FINN Guidelines: 2px radius
const baseStyles =
  "inline-flex items-center justify-center rounded-[2px] font-semibold transition-all cursor-pointer disabled:cursor-not-allowed";

export function Button({
  variant = "primary",
  size = "medium",
  children,
  className = "",
  asChild,
  ...props
}: ButtonProps) {
  const sizeClass = variant === "action" ? actionSizeStyles[size] : sizeStyles[size];
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeClass} ${className}`;
  
  if (asChild && isValidElement(children)) {
    return cloneElement(children as ReactElement<{ className?: string }>, {
      className: [styles, (children.props as { className?: string }).className]
        .filter(Boolean)
        .join(" "),
    });
  }
  return (
    <button type="button" className={styles} {...props}>
      {children}
    </button>
  );
}
