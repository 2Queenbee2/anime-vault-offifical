import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import LedgerCard from "@/components/LedgerCard";
import { pageThemes } from "@/data/pageThemes";
import { products } from "@/data/products";

export default function ShopPage() {
  const theme = pageThemes.shop;

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
          title="Shop"
          subtitle="Curated anime finds, catalogued and kept."
          accentColor={theme.accent}
          barTextColor={theme.barText}
        />

        <section className="px-6 pb-16 max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3">
          {products.map((p) => (
            <LedgerCard
              key={p.sku}
              sku={p.sku}
              name={p.name}
              price={p.price}
              badge={p.featured ? "Featured" : undefined}
              accentColor={theme.accent}
              badgeTextColor={theme.barText}
              popLabel={p.isNew ? "NEW DROP" : undefined}
              popColor={theme.accent}
            />
          ))}
        </section>
      </main>

      <Footer accentColor={theme.accent} barTextColor={theme.barText} />
    </>
  );
}
