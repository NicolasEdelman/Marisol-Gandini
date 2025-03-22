import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { Button } from "@/components/ui/button"
import { Award, Briefcase, ChevronRight, GraduationCap, Heart } from "lucide-react"
import Image from "next/image"

export const Perfil = () => {
    return (
        <section id="especialista" className="py-20 bg-primary-light">
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
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLOG-DENTISTAS-EN-LIMA-IILQ9Tpf5biMbcgxPXyYfzkuCNCs3j.webp"
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
                          Odontóloga Especialista en Ortodoncia y Estética
                          Dental
                        </p>
                        <p className="text-gray-600">
                          Con más de 15 años de experiencia, me he especializado
                          en diversas áreas de la odontología para ofrecer un
                          servicio integral a mis pacientes. Mi enfoque combina
                          técnicas avanzadas con un trato personalizado y
                          cálido.
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
                            <ul className="space-y-1 text-gray-600">
                              <li>
                                • Doctorado en Odontología - Universidad
                                Nacional
                              </li>
                              <li>
                                • Maestría en Estética Dental - Universidad
                                Internacional
                              </li>
                              <li>
                                • Especialización en Ortodoncia - Instituto de
                                Estudios Avanzados
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
                            <ul className="space-y-1 text-gray-600">
                              <li>
                                • Certificación en Implantología - Asociación
                                Dental Americana
                              </li>
                              <li>• Certificación en Alineadores Invisibles</li>
                              <li>• Certificación en Odontología Digital</li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="mr-4 text-primary">
                            <Briefcase size={24} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">
                              Experiencia Profesional
                            </h4>
                            <ul className="space-y-1 text-gray-600">
                              <li>• 15+ años de práctica clínica</li>
                              <li>
                                • Especialista en rehabilitación oral compleja
                              </li>
                              <li>• Experta en diseño de sonrisas</li>
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
                            <ul className="space-y-1 text-gray-600">
                              <li>
                                • Atención personalizada y centrada en el
                                paciente
                              </li>
                              <li>
                                • Compromiso con la excelencia y la calidad
                              </li>
                              <li>
                                • Actualización constante en nuevas tecnologías
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="mt-auto">
                        <Button className="bg-primary hover:bg-primary-hover text-white">
                          Agendar una consulta{" "}
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
    )
}