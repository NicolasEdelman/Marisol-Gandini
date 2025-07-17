"use client";
import { Header } from "@/app/sections/header";
import { Bienvenida } from "./sections/bienvenida";
import { SobreMi } from "./sections/sobreMi";
import { Servicios } from "./sections/servicios";
import { Perfil } from "./sections/perfil";
import { Testimonios } from "./sections/testimonios";
import GaleriaEquipos from "./sections/galeriaEquipos";
import { CallToAction } from "./sections/callToAction";
import { Footer } from "./sections/footer";
import { Contact } from "./sections/contact";

export default function DentalClinic() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Bienvenida />
        <SobreMi />
        <Servicios />
        <Perfil />
        {/* <Testimonios /> */}
        <GaleriaEquipos />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
