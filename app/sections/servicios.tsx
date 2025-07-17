import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { services } from "@/lib/textos";
import Image from "next/image";

export const Servicios = () => {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-bold text-primary mb-4">
              Mis Servicios
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ofrezco una amplia gama de tratamientos dentales y estéticos para
              toda la familia
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {services.map((service, index) => (
            <AnimateOnScroll key={index} className={`delay-${index * 50}`}>
              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-2 ">
                  <div className="w-full h-full relative">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">
                  {service.title}
                </h3>
                <p className="text-gray-600 max-w-xs text-sm md:text-md">
                  {service.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
