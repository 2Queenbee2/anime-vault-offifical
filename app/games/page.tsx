import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import LedgerCard from "@/components/LedgerCard";
import { pageThemes } from "@/data/pageThemes";
import { gameItems } from "@/data/gameItems";

export default function GamesPage() {
  const theme = pageThemes.games;

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
        <PageHeader
          title="Games"
          subtitle="Ranks, kits and cosmetics for the Minecraft server."
          accentColor={theme.accent}
          barTextColor={theme.barText}
        />

        <section className="px-6 pb-16 max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3">
          {gameItems.map((item) => (
            <LedgerCard
              key={item.sku}
              sku={item.sku}
              name={item.name}
              price={item.price}
              badge={item.popular ? "Popular" : undefined}
              accentColor={theme.accent}
              badgeTextColor={theme.barText}
            />
          ))}
        </section>
      </main>

      <Footer accentColor={theme.accent} barTextColor={theme.barText} />
    </>
  );
}
