interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignment}`}>
      {label && (
        <p className="text-sm font-semibold uppercase tracking-wider text-grey-accent mb-3">
          {label}
        </p>
      )}
      <h2 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-grey-accent">
          {description}
        </p>
      )}
    </div>
  );
}
