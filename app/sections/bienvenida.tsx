import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export const Bienvenida = () => {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dentistas-profesional-de-la-salud-scaled-TjIJRk6x4grlNyoIj6SZjvSSt0Gb7w.webp"
          alt="Dra. Marisol Gandini atendiendo a paciente"
          fill
          className="object-cover scale-x-[-1]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/40"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Perfecciona tu sonrisa
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Transforma tu sonrisa con tratamientos personalizados de la mano de
            la Dra. Marisol Gandini, especialista en odontología estética y
            funcional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-primary hover:bg-primary-hover text-white text-lg py-6">
              Agendar Consulta <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 text-lg py-6"
            >
              Mis Servicios
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
