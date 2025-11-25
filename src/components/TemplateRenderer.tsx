type TemplateRendererProps = {
  html: string;
};

export function TemplateRenderer({ html }: TemplateRendererProps) {
  return (
    <div
      className="template-page"
      dangerouslySetInnerHTML={{ __html: html }}
      suppressHydrationWarning
    />
  );
}
