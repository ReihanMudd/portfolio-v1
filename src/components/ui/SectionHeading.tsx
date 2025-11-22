interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionHeading = ({
  children,
  className,
}: SectionHeadingProps) => {
  return (
    <h2
      className={`group flex items-center text-3xl md:text-5xl font-bold text-foreground mb-12 tracking-tighter ${className}`}
    >
      <span className="inline-block w-3 h-3 md:w-4 md:h-4 bg-accent mr-4 rotate-45 group-hover:rotate-90 transition-transform duration-500" />
      {children}
    </h2>
  );
};
