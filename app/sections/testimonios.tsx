import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Carousel } from "@/components/carrousel";
import { testimonials } from "@/lib/textos";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Star } from "lucide-react";

export const Testimonios = () => {
  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Lo que dicen mis pacientes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conocé las experiencias de quienes ya confiaron en mí para cuidar
              su salud bucal.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <Carousel>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-full sm:w-[350px] md:w-[380px] snap-center"
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
                        <div className="relative h-full w-full">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">
                          {testimonial.name}
                        </h3>
                        <div className="flex">
                          {Array.from({ length: testimonial.rating }).map(
                            (_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 fill-primary text-primary"
                              />
                            )
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Carousel>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
