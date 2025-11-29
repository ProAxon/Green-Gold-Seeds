interface SectionTitleProps {
  tagline?: string;
  title: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export function SectionTitle({ tagline, title, className = "", align = "center" }: SectionTitleProps) {
  const alignmentClass = align === "left" ? "text-left" : align === "right" ? "text-right" : "";
  const animationClass = align === "left" ? "sec-title-animation animation-style2" : "";

  return (
    <div className={`section-title ${alignmentClass} ${animationClass} ${className}`}>
      {tagline && (
        <div className="section-title__tagline-box">
          <div className="section-title__shape-1">
            <img src="/assets/images/resources/section-title-shape-1.png" alt="section-title-shape-1" />
          </div>
          <h6 className="section-title__tagline">{tagline}</h6>
          <div className="section-title__shape-1">
            <img src="/assets/images/resources/section-title-shape-2.png" alt="section-title-shape-2" />
          </div>
        </div>
      )}
      <h3 className={`section-title__title ${align === "left" ? "title-animation" : ""}`}>
        {title.split("\\n").map((line, index, array) => (
          <span key={index}>
            {line}
            {index < array.length - 1 && <br />}
          </span>
        ))}
      </h3>
    </div>
  );
}

