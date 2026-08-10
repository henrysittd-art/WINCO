import LwHeader from "./components/LwHeader";
import LwHero from "./components/LwHero";
import LwWhy from "./components/LwWhy";
import LwProducts from "./components/LwProducts";
import LwContact from "./components/LwContact";
import LwFooter from "./components/LwFooter";

export default function LadyWipesPage() {
  return (
    <>
      <LwHeader />
      <main>
        <LwHero />
        <LwWhy />
        <LwProducts />
        <LwContact />
      </main>
      <LwFooter />
    </>
  );
}
