import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({ children, className }: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs uppercase tracking-wider font-bold border border-accent/30 text-accent rounded-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300 cursor-default",
        className,
      )}
    >
      {children}
    </span>
  );
};
