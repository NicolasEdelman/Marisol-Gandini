import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-10 md:py-20 bg-primary">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para una sonrisa perfecta?
            </h2>
            <p className="text-md md:text-xl mb-8">
              Agenda tu cita hoy mismo y da el primer paso hacia una salud
              dental óptima
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 text-md md:text-lg py-6 px-8" onClick={() => {
              window.location.href = "#contacto";
            }}>
              Agendar Mi Primera Consulta{" "}
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
