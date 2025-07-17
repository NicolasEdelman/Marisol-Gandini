import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import {
  Award,
  Briefcase,
  ChevronRight,
  GraduationCap,
  Heart,
} from "lucide-react";
import Image from "next/image";

export const Perfil = () => {
  return (
    <section id="perfil" className="py-20 bg-primary-light">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Perfil Profesional
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conozca mi formación y experiencia profesional
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3 relative">
                <div className="h-80 lg:h-full relative">
                  <Image
                    src="/images/Marisol.png"
                    alt="Dra. Marisol Gandini"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-2/3 p-8">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Dra. Marisol Gandini
                    </h3>
                    <p className="text-primary font-medium mb-4">
                      Doctora en Odontología Especialista en Estética
                      Restauradora
                    </p>
                    <p className="text-gray-600 text-sm md:text-md">
                      Mi mayor propósito es que los pacientes vivan una
                      experiencia positiva en la visita al odontólogo,
                      derribando mitos y educando para mejorar tu salud bucal.
                      Año tras año, realizo capacitación continua en busca de
                      mejorar procedimientos, protocolos y seguir aprendiendo,
                      como también formas de innovar en Odontología.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                    <div className="flex items-start">
                      <div className="mr-4 text-primary">
                        <GraduationCap size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Formación Académica
                        </h4>
                        <ul className="space-y-1 text-gray-600 text-sm md:text-base">
                          <li>• Doctora en Odontología - Egresada 2016</li>
                          <li>
                            • Especialidad en Odontología Estética Restauradora
                            - 2017
                          </li>
                          <li>
                            • Capacitación en Cirugía y Habilitada en aplicación
                            de Láser terapéutico
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 text-primary">
                        <Award size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Certificaciones
                        </h4>
                        <ul className="space-y-1 text-gray-600 text-sm md:text-base">
                          <li>
                            • Certificada en Armonización Orofacial - 2017
                          </li>
                          <li>
                            • Aplicación de Ácido Hialurónico y Toxina
                            Botulínica
                          </li>
                          <li>
                            • Utilización de Bioestimuladores para la piel
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 text-primary">
                        <Briefcase size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Especialidades
                        </h4>
                        <ul className="space-y-1 text-gray-600 text-sm md:text-base">
                          <li>• Odontología Estética Restauradora</li>
                          <li>
                            • Armonización Orofacial con fines estéticos y
                            terapéuticos
                          </li>
                          <li>• Cirugía y aplicación de Láser terapéutico</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 text-primary">
                        <Heart size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Filosofía de Trabajo
                        </h4>
                        <ul className="space-y-1 text-gray-600 text-sm md:text-base">
                          <li>
                            • Experiencia positiva en la visita al odontólogo
                          </li>
                          <li>
                            • Derribar mitos y educar para mejorar la salud
                            bucal
                          </li>
                          <li>
                            • Capacitación continua e innovación en
                            procedimientos
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <Button className="bg-primary hover:bg-primary-hover text-white" onClick={() => {
                      window.location.href = "#contacto";
                    }}>
                      Agendar tu primera consulta{" "}
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
