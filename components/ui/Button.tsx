import {
  cloneElement,
  type ButtonHTMLAttributes,
  isValidElement,
  type ReactElement,
} from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[#0072ea] text-white hover:bg-[#005fc4] border border-[#0072ea] shadow-sm",
  secondary:
    "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 shadow-sm",
  outline:
    "bg-transparent text-[#0072ea] border border-[#0072ea] hover:bg-[#0072ea]/5",
  ghost: "bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900",
};

const baseStyles =
  "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-colors";

export function Button({
  variant = "primary",
  children,
  className = "",
  asChild,
  ...props
}: ButtonProps) {
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;
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
