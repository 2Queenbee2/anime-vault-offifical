import Link from "next/link";
import Image from "next/image";

type NavBarProps = {
  accentColor: string;
  barTextColor?: string;
};

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/games", label: "Games" },
  { href: "/services", label: "Services" },
];

export default function NavBar({
  accentColor,
  barTextColor = "#F4F1FA",
}: NavBarProps) {
  return (
    <nav
      className="w-full flex items-center justify-between px-6 py-3"
      style={{ backgroundColor: accentColor }}
    >
      <Link href="/" className="flex items-center">
        <Image src="/banner.png" alt="The Anime Vault" width={160} height={90} priority />
      </Link>
      <div className="flex gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-xs font-bold"
            style={{ color: barTextColor }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
