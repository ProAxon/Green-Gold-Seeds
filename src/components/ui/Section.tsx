interface SectionProps {
  className?: string;
  children: React.ReactNode;
  id?: string;
}

export function Section({ className = "", children, id }: SectionProps) {
  return (
    <section className={className} id={id}>
      {children}
    </section>
  );
}

