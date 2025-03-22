import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Carousel } from "@/components/carrousel";
import { imagenesConsultorio } from "@/lib/textos";
import Image from "next/image";

const GaleriaEquipos = () => {
  return (
    <section id="instalaciones" className="py-20 bg-primary-light">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Mi Consultorio y Equipos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cuento con instalaciones modernas y equipos de última generación
              para brindarte la mejor atención
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <Carousel>
            {imagenesConsultorio.map((img, idx) => (
              <div
                key={idx}
                className="min-w-[80%] md:min-w-[50%] lg:min-w-[33%] snap-center px-2"
              >
                <div className="relative w-full h-60 md:h-72 rounded-lg overflow-hidden shadow-md group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default GaleriaEquipos;
