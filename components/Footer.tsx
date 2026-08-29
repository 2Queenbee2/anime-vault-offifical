type FooterProps = {
  accentColor: string;
  barTextColor?: string;
};

export default function Footer({
  accentColor,
  barTextColor = "#F4F1FA",
}: FooterProps) {
  return (
    <footer
      className="w-full text-center py-3 text-xs font-bold"
      style={{ backgroundColor: accentColor, color: barTextColor }}
    >
      &copy; {new Date().getFullYear()} The Anime Vault
    </footer>
  );
}
