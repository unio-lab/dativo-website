interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  badge?: string;
}

export default function FeatureCard({
  title,
  description,
  icon,
  badge,
}: FeatureCardProps) {
  return (
    <div
      className={`rounded-xl border p-8 transition-shadow duration-200 hover:shadow-lg ${
        badge
          ? "border-navy/15 bg-navy/[0.02]"
          : "border-navy/10 bg-white"
      }`}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5 text-navy">
          {icon}
        </div>
        {badge && (
          <span className="rounded-full border border-navy/15 bg-navy/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-navy/70">
            {badge}
          </span>
        )}
      </div>
      <h3 className="font-heading text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-grey-accent">
        {description}
      </p>
    </div>
  );
}
