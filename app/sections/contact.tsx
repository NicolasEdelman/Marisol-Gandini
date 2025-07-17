import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Contactame
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estoy para responder tus preguntas y ayudarte a alcanzar una salud
              bucal óptima.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Responsive: 1 columna en mobile, 2 en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {/* Columna Izquierda: Info */}
          <AnimateOnScroll>
            <div className="bg-primary-light rounded-lg shadow-lg p-8 md:p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-8">
                  Información de Contacto
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                      <p className="text-gray-600 break-words">marisolgandini@hotmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Teléfono
                      </h4>
                      <p className="text-gray-600">098 595 189</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Dirección
                      </h4>
                      <p className="text-gray-600">
                        Pablo Galarza 3603, Apartamento 303
                        <br />
                        Montevideo, Uruguay
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Horario de Atención
                      </h4>
                      <p className="text-gray-600">
                        Lunes a Sábado (previa coordinación)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Button
                  className="w-full bg-primary hover:bg-primary-hover text-white text-lg py-4 rounded-full"
                  onClick={() => {
                    window.open("https://wa.me/59898595189", "_blank");
                  }}
                >
                  ¡Agenda tu consulta hoy!
                </Button>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Columna Derecha: Mapa */}
          <AnimateOnScroll className="delay-100">
            <div className="rounded-lg shadow-lg overflow-hidden h-[300px] md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.1976568057244!2d-56.1653!3d-34.9046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81c1a9b9d4c7%3A0x4c5d6e5e9e97a6d0!2sPablo%20Galarza%203603%2C%2011800%20Montevideo%2C%20Uruguay!5e0!3m2!1ses!2s!4v1616000000000!5m2!1ses!2s"
                width="100%"
                height="100%"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                title="Ubicación del consultorio"
              ></iframe>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};
