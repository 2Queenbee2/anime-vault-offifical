import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import LedgerCard from "@/components/LedgerCard";
import { pageThemes } from "@/data/pageThemes";
import { products } from "@/data/products";
import { gameItems } from "@/data/gameItems";
import { services } from "@/data/services";

export default function HomePage() {
  const theme = pageThemes.home;
  const shopPicks = products.slice(0, 2);
  const gamePick = gameItems[0];
  const featuredService = services.find((s) => s.featured) ?? services[0];

  return (
    <>
      <NavBar accentColor={theme.accent} barTextColor={theme.barText} />

      <main
        className="flex-1 animate-page-fade-in"
        style={{
          backgroundImage: `url(${theme.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Logo centerpiece — big banner artwork, tagline beneath it */}
        <div className="text-center pt-12 pb-8 px-4">
          <Image
            src="/banner.png"
            alt="The Anime Vault"
            width={640}
            height={360}
            className="mx-auto rounded-lg"
            priority
          />
          <p
            className="text-xs tracking-[0.2em] uppercase mt-3"
            style={{ color: pageThemes.games.accent }}
          >
            Otherworlds Awakening
          </p>
          <div className="w-10 h-px bg-taupe mx-auto my-4" />
          <p className="text-xs text-warmgray">
            Merch. Games. Services. Catalogued.
          </p>
        </div>

        {/* Display case */}
        <section className="px-6 pb-16 max-w-3xl mx-auto space-y-8">
          <div>
            <p className="text-[10px] uppercase tracking-wide text-warmgray mb-2">
              From the shop
            </p>
            <div className="grid grid-cols-2 gap-3">
              {shopPicks.map((p) => (
                <LedgerCard
                  key={p.sku}
                  sku={p.sku}
                  name={p.name}
                  price={p.price}
                  badge={p.featured ? "Featured" : undefined}
                  accentColor={pageThemes.shop.accent}
                  badgeTextColor={pageThemes.shop.barText}
                />
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-wide text-warmgray mb-2">
              From games
            </p>
            <div className="max-w-xs">
              <LedgerCard
                sku={gamePick.sku}
                name={gamePick.name}
                price={gamePick.price}
                badge={gamePick.popular ? "Popular" : undefined}
                accentColor={pageThemes.games.accent}
                badgeTextColor={pageThemes.games.barText}
              />
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-wide text-warmgray mb-2">
              Featured service
            </p>
            <div className="max-w-xs">
              <LedgerCard
                sku={featuredService.sku}
                name={featuredService.name}
                price={featuredService.price}
                description={featuredService.description}
                accentColor={pageThemes.services.accent}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer accentColor={theme.accent} barTextColor={theme.barText} />
    </>
  );
}
