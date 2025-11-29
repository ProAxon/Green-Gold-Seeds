interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export function Container({ className = "container", children }: ContainerProps) {
  return <div className={className}>{children}</div>;
}

