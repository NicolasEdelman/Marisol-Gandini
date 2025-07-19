import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SobreMi = () => {
  return (
    <section id="nosotros" className="py-20 bg-primary-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto primero en mobile, segundo en desktop */}
          <AnimateOnScroll className="order-1 lg:order-2 delay-100">
            <div className="h-full flex flex-col justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 md:mb-8">
                  ¿Quiénes sómos?
                </h2>
                <p className="text-base md:text-lg text-gray-600 mb-6">
                  Los saluda la Dra. Marisol Gandini y me presento por aquí. Soy
                  mamá de Paulina y Odontóloga. Desde chiquita me generó mucha
                  curiosidad los materiales e instrumentos al visitar a mi
                  dentista. Siempre dije que iba a ser Odontóloga y así fue...
                </p>
                <p className="text-base md:text-lg text-gray-600 mb-6 ">
                  Es un consultorio odontológico comprometido con la salud oral
                  y el bienestar de nuestros pacientes. <br /> Nuestro enfoque
                  se basa en brindar una atención integral, respaldada por la
                  capacitación continua en la atención que brindamos.
                  <br /> Cada paciente es único, por lo que personalizamos los
                  tratamientos.
                </p>
                <p className="text-base md:text-lg text-gray-600 mb-6 font-bold">
                  En nuestro consultorio, el paciente es nuestra prioridad y su
                  satisfacción es nuestra mayor recompensa.
                </p>
              </div>

              <Button
                className="bg-primary hover:bg-primary-hover text-white text-base md:text-lg py-4 md:py-6 px-8 self-start mt-auto"
                onClick={() => {
                  window.location.href = "#contacto";
                }}
              >
                Agendar Consulta <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </AnimateOnScroll>

          {/* Imagen segundo en mobile, primero en desktop */}
          <AnimateOnScroll className="order-2 lg:order-1">
            <div className="relative h-[400px] md:h-[650px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/Fotos/10.jpeg"
                alt="Dra. Marisol Gandini"
                fill
                className="object-cover"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};
