import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Contáctame
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estoy para responder tus preguntas y ayudarte a alcanzar una salud
              bucal óptima
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimateOnScroll>
            <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Envíame un mensaje
              </h3>

              <form className="space-y-6 flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="nombre"
                      className="text-sm font-medium text-gray-700"
                    >
                      Nombre
                    </label>
                    <Input
                      id="nombre"
                      placeholder="Tu nombre"
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="apellido"
                      className="text-sm font-medium text-gray-700"
                    >
                      Apellido
                    </label>
                    <Input
                      id="apellido"
                      placeholder="Tu apellido"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="telefono"
                    className="text-sm font-medium text-gray-700"
                  >
                    Teléfono
                  </label>
                  <Input
                    id="telefono"
                    placeholder="+598 99 123 456"
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="mensaje"
                    className="text-sm font-medium text-gray-700"
                  >
                    Mensaje
                  </label>
                  <Textarea
                    id="mensaje"
                    placeholder="¿En qué puedo ayudarte?"
                    className="w-full min-h-[120px]"
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-primary-hover text-white">
                  Enviar Mensaje <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll className="delay-100">
            <div className="bg-primary-light rounded-lg shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">dra.marisol@gandini.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Teléfono
                    </h4>
                    <p className="text-gray-600">099859518</p>
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
                      Lunes a Viernes: 9:00 - 19:00
                      <br />
                      Sábados: 9:00 - 14:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-gray-800 mb-4">Ubicación</h4>
                <div className="aspect-video relative rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.1976568057244!2d-56.1653!3d-34.9046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81c1a9b9d4c7%3A0x4c5d6e5e9e97a6d0!2sPablo%20Galarza%203603%2C%2011800%20Montevideo%2C%20Uruguay!5e0!3m2!1ses!2s!4v1616000000000!5m2!1ses!2s"
                    width="600"
                    height="450"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    title="Ubicación del consultorio"
                  ></iframe>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};
