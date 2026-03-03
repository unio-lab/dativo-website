interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <div className="rounded-xl border border-navy/10 bg-white p-8 transition-shadow duration-200 hover:shadow-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5 text-navy">
        {icon}
      </div>
      <h3 className="font-heading text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-grey-accent">
        {description}
      </p>
    </div>
  );
}
