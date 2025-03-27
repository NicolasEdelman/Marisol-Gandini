import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SobreMi = () => {
  return (
    <section id="perfil" className="py-20 bg-primary-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto primero en mobile, segundo en desktop */}
          <AnimateOnScroll className="order-1 lg:order-2 delay-100">
            <div className="h-full flex flex-col justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
                  Hola, soy la Dra. Marisol Gandini
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Soy la Dra. Marisol Gandini, odontóloga con más de 15 años de
                  experiencia brindando servicios de salud bucal de excelencia.
                  Me he especializado en diversas áreas de la odontología para
                  ofrecer tratamientos integrales y personalizados a cada uno de
                  mis pacientes.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      Especialista en ortodoncia, odontología estética y
                      rehabilitación oral
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      Formación continua en las técnicas más avanzadas de
                      odontología
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      Enfoque personalizado según las necesidades específicas de
                      cada paciente
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      Consultorio equipado con tecnología de vanguardia para
                      diagnósticos precisos
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      Compromiso con la excelencia y el bienestar integral de
                      mis pacientes
                    </p>
                  </div>
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary-hover text-white text-lg py-6 px-8 self-start mt-auto">
                Agendar Consulta <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </AnimateOnScroll>

          {/* Imagen segundo en mobile, primero en desktop */}
          <AnimateOnScroll className="order-2 lg:order-1">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Como-escoger-tu-clinica-dental.jpg-JzJtccBGm6XtDhkftBNiLJFezFctPV.jpeg"
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
