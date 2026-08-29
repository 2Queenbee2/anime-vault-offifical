type PopBadgeProps = {
  label: string;
  /** Accent text color — pick per context: gold=premium, cyan=fresh, violet=exclusive */
  color?: string;
};

export default function PopBadge({ label, color = "#D9B765" }: PopBadgeProps) {
  return (
    <span
      className="absolute -top-1.5 -right-1.5 text-[9px] font-extrabold px-2 py-1 rounded-md tracking-wide animate-pop-settle"
      style={{
        backgroundColor: "#18213D", // Deep Space
        color,
        boxShadow: "0 2px 6px rgba(24,33,61,0.25)",
      }}
    >
      {label}
    </span>
  );
}
