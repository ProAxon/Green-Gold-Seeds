import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  className?: string;
  dataText?: string;
  dataLoadingText?: string;
}

export function Button({
  href,
  onClick,
  type = "button",
  children,
  className = "thm-btn",
  dataText,
  dataLoadingText,
}: ButtonProps) {
  const buttonContent = (
    <>
      {children}
      <i className="fal fa-long-arrow-right" />
      <span className="hover-btn hover-bx" />
      <span className="hover-btn hover-bx2" />
      <span className="hover-btn hover-bx3" />
      <span className="hover-btn hover-bx4" />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={className} data-text={dataText} data-loading-text={dataLoadingText}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      data-text={dataText}
      data-loading-text={dataLoadingText}
    >
      {buttonContent}
    </button>
  );
}

