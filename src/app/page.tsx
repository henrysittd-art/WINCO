import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Nosotros from "@/components/Nosotros";
import Enfoque from "@/components/Enfoque";
import Transicion from "@/components/Transicion";
import Marcas from "@/components/Marcas";
import Vision from "@/components/Vision";
import CTAFinal from "@/components/CTAFinal";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Nosotros />
        <Enfoque />
        <Transicion />
        <Marcas />
        <Vision />
        <CTAFinal />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
