type PageHeaderProps = {
  title: string;
  subtitle?: string;
  accentColor: string;
  /** Text color to use ON TOP of the accentColor bar (contrast-first, not theme-first) */
  barTextColor?: string;
};

export default function PageHeader({
  title,
  subtitle,
  accentColor,
  barTextColor = "#F4F1FA",
}: PageHeaderProps) {
  return (
    <div>
      <div
        className="w-full py-2 px-4 text-center text-xs font-bold"
        style={{ backgroundColor: accentColor, color: barTextColor }}
      >
        {title}
      </div>
      <div className="text-center py-10 px-4">
        <h1
          className="font-title text-5xl md:text-6xl mb-2"
          style={{ color: accentColor }}
        >
          {title}
        </h1>
        {subtitle && <p className="text-sm text-warmgray">{subtitle}</p>}
      </div>
    </div>
  );
}
