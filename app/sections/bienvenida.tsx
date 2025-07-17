"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Bienvenida = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 h-[120%] w-full">
        <Image
          src="/images/Fondo3.jpeg"
          alt="Dra. Marisol Gandini atendiendo a paciente"
          fill
          className="object-cover"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="w-full md:max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Consultorio Odontológico
            <br />
            <span className="text-primary text-3xl md:text-6xl">
              Dra. Marisol Gandini
            </span>
          </h1>
          <p className="text-md md:text-lg text-white mb-8">
            Transforma tu sonrisa con tratamientos personalizados de la mano de
            la Dra. Marisol Gandini, especialista en odontología estética y
            funcional.
          </p>
          <div className="flex flex-row sm:flex-row gap-4">
            <Button
              className="bg-primary hover:bg-primary-hover text-white py-6 w-1/2 md:w-auto text-md md:text-lg"
              onClick={() => {
                window.location.href = "#contacto";
              }}
            >
              Agendar Consulta <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className=" text-primary hover:bg-white/80 hover:text-primary py-6 w-1/2 md:w-auto text-md md:text-lg"
              onClick={() => {
                window.location.href = "#servicios";
              }}
            >
              Mis Servicios
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
