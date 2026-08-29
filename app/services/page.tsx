import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import LedgerCard from "@/components/LedgerCard";
import { pageThemes } from "@/data/pageThemes";
import { services } from "@/data/services";

export default function ServicesPage() {
  const theme = pageThemes.services;

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
          title="Services"
          subtitle="Commissions, restorations and framing."
          accentColor={theme.accent}
          barTextColor={theme.barText}
        />

        <section className="px-6 pb-16 max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3">
          {services.map((s) => (
            <LedgerCard
              key={s.sku}
              sku={s.sku}
              name={s.name}
              price={s.price}
              description={s.description}
              badge={s.featured ? "Featured" : undefined}
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
