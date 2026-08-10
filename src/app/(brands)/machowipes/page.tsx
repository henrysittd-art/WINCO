import MwHeader from "./components/MwHeader";
import MwHero from "./components/MwHero";
import MwWhy from "./components/MwWhy";
import MwProducts from "./components/MwProducts";
import MwContact from "./components/MwContact";
import MwFooter from "./components/MwFooter";

export default function MachoWipesPage() {
  return (
    <>
      <MwHeader />
      <main>
        <MwHero />
        <MwWhy />
        <MwProducts />
        <MwContact />
      </main>
      <MwFooter />
    </>
  );
}
