import PopBadge from "./PopBadge";

type LedgerCardProps = {
  sku: string;
  name: string;
  price: string;
  badge?: string;
  accentColor?: string;
  badgeTextColor?: string;
  description?: string;
  /** Optional dark "pop" stamp for genuinely special items — new drops, limited items, etc. */
  popLabel?: string;
  popColor?: string;
};

export default function LedgerCard({
  sku,
  name,
  price,
  badge,
  accentColor = "#4AAFE3",
  badgeTextColor = "#F4F1FA",
  description,
  popLabel,
  popColor,
}: LedgerCardProps) {
  return (
    <div className="relative bg-linen border border-taupe rounded-lg p-3 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      {popLabel && <PopBadge label={popLabel} color={popColor} />}
      {!popLabel && badge && (
        <span
          className="absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded"
          style={{ backgroundColor: accentColor, color: badgeTextColor }}
        >
          {badge}
        </span>
      )}
      <div className="h-24 bg-taupe rounded-md mb-3" />
      <p className="font-mono text-[10px] text-warmgray mb-1">{sku}</p>
      <p className="text-sm text-navy font-medium mb-1">{name}</p>
      {description && (
        <p className="text-xs text-warmgray mb-2">{description}</p>
      )}
      <p className="text-sm font-bold mb-2" style={{ color: accentColor }}>
        {price}
      </p>
      <button
        className="w-full text-xs font-bold py-2 rounded-md border transition-all duration-150 hover:bg-sand active:scale-95"
        style={{
          backgroundColor: "#F4F1FA", // Soft Moonlight
          color: "#18213D", // Deep Space
          borderColor: "#D8D1E8", // Lavender Mist
          boxShadow: "0 1px 4px rgba(24,33,61,0.08)",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
