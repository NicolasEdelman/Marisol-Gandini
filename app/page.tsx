"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  ChevronRight,
  ChevronLeft,
  Star,
  Check,
  Instagram,
  Facebook,
  Twitter,
  Menu,
  X,
  Send,
  GraduationCap,
  Award,
  Briefcase,
  Heart,
} from "lucide-react"

// Componente de animación para elementos que aparecen al hacer scroll
const AnimateOnScroll = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [ref, setRef] = useState(null)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(ref)
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(ref)

    return () => {
      if (ref) observer.unobserve(ref)
    }
  }, [ref])

  return (
    <div
      ref={setRef}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
    >
      {children}
    </div>
  )
}

// Componente de galería horizontal
const HorizontalGallery = () => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef
      const scrollAmount = direction === "left" ? -300 : 300
      current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto hide-scrollbar gap-4 pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex-none w-80 h-60 md:w-96 md:h-72 snap-center">
          <div className="w-full h-full relative rounded-lg overflow-hidden shadow-md group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dentistas-profesional-de-la-salud-scaled-TjIJRk6x4grlNyoIj6SZjvSSt0Gb7w.webp"
              alt="Consultorio Dra. Gandini"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
        <div className="flex-none w-80 h-60 md:w-96 md:h-72 snap-center">
          <div className="w-full h-full relative rounded-lg overflow-hidden shadow-md group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Como-escoger-tu-clinica-dental.jpg-JzJtccBGm6XtDhkftBNiLJFezFctPV.jpeg"
              alt="Equipamiento moderno"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
        <div className="flex-none w-80 h-60 md:w-96 md:h-72 snap-center">
          <div className="w-full h-full relative rounded-lg overflow-hidden shadow-md group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-ZDQPrATjMW3tLa3pm54W98rfD8t9nC.jpeg"
              alt="Sala de tratamiento"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
        <div className="flex-none w-80 h-60 md:w-96 md:h-72 snap-center">
          <div className="w-full h-full relative rounded-lg overflow-hidden shadow-md group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/patron-dentistas-utensilios-1000x640.jpg-vNLSQ02mwHUwXSpzsqdPyF7pfSb0Gm.jpeg"
              alt="Instrumentos dentales"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
        <div className="flex-none w-80 h-60 md:w-96 md:h-72 snap-center">
          <div className="w-full h-full relative rounded-lg overflow-hidden shadow-md group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLOG-DENTISTAS-EN-LIMA-IILQ9Tpf5biMbcgxPXyYfzkuCNCs3j.webp"
              alt="Sala de espera"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-10 text-primary hover:bg-primary hover:text-white transition-colors"
        aria-label="Anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-10 text-primary hover:bg-primary hover:text-white transition-colors"
        aria-label="Siguiente"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}

// Componente de carrusel horizontal para testimonios (similar a la galería)
const TestimonialsGallery = ({ testimonials }) => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef
      const scrollAmount = direction === "left" ? -350 : 350
      current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto hide-scrollbar gap-6 pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex-none w-full sm:w-[350px] md:w-[380px] snap-center">
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
                    <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                    <div className="flex">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-10 text-primary hover:bg-primary hover:text-white transition-colors"
        aria-label="Reseñas anteriores"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-10 text-primary hover:bg-primary hover:text-white transition-colors"
        aria-label="Reseñas siguientes"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}

export default function DentalClinic() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const services = [
    {
      title: "Ortodoncia",
      description:
        "Lográ una sonrisa armoniosa y recuperá la estética facial. Corrijo la mal posición dentaria y devuelvo el funcionamiento.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%281%29-1o0Y18DLBauzNVh8MTj1TipHiYf3IZ.jpeg",
    },
    {
      title: "Odontología General",
      description: "Prevención, diagnóstico y tratamiento de afecciones bucales.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Como-escoger-tu-clinica-dental.jpg-JzJtccBGm6XtDhkftBNiLJFezFctPV.jpeg",
    },
    {
      title: "Prótesis",
      description: "Restauro la anatomía y funcionalidad de una o varias piezas dentales. Prótesis lista en 7 días.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dentistas-profesional-de-la-salud-scaled-TjIJRk6x4grlNyoIj6SZjvSSt0Gb7w.webp",
    },
    {
      title: "Blanqueamiento Dental",
      description: "Redefino tu sonrisa con un brillo natural.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-ZDQPrATjMW3tLa3pm54W98rfD8t9nC.jpeg",
    },
    {
      title: "Estética Facial",
      description: "Tratamientos no quirúrgicos, novedosos e indoloros para definir mejor tu rostro.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/patron-dentistas-utensilios-1000x640.jpg-vNLSQ02mwHUwXSpzsqdPyF7pfSb0Gm.jpeg",
    },
    {
      title: "Odontopediatría",
      description: "Prevención, educación y tratamiento para niños, garantizando adultos sanos.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dentistas-para-ninos-como-hacer-que-las-visitas-al-dentista-sean-divertidas-rYxjWfYC0sqJdz9tn7tCNvqKLvvfUk.png",
    },
    {
      title: "Diseño de sonrisas",
      description:
        "Mejoro la estética de tu sonrisa ajustando el tamaño, forma y color de los dientes para que luzcan más naturales y armónicos.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLOG-DENTISTAS-EN-LIMA-IILQ9Tpf5biMbcgxPXyYfzkuCNCs3j.webp",
    },
    {
      title: "Alineadores",
      description:
        "Corrijo la alineación dental de manera discreta y cómoda, sin brackets visibles, para una sonrisa perfecta.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-e7pzzSgVPMVFXTDBWKRRx9hTlkALlr.webp",
    },
    {
      title: "Placas de bruxismo",
      description:
        "Protejo tus dientes de los daños por apretamiento o rechinamiento, mejorando tu salud dental y tu descanso.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%281%29-1o0Y18DLBauzNVh8MTj1TipHiYf3IZ.jpeg",
    },
  ]

  const testimonials = [
    {
      name: "María González",
      text: "Excelente atención y profesionalismo. La Dra. Gandini me realizó un tratamiento de implantes y quedé muy satisfecha con los resultados. Su trato es muy amable y su consultorio es moderno y cómodo.",
      rating: 5,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-e7pzzSgVPMVFXTDBWKRRx9hTlkALlr.webp",
    },
    {
      name: "Carlos Rodríguez",
      text: "Mi experiencia con la Dra. Marisol ha sido inmejorable. Me atendió con mucha paciencia y profesionalismo. El tratamiento de conducto fue prácticamente indoloro y los resultados excelentes.",
      rating: 5,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-ZDQPrATjMW3tLa3pm54W98rfD8t9nC.jpeg",
    },
    {
      name: "Laura Martínez",
      text: "Llevé a mi hijo de 5 años y la experiencia fue muy positiva. La Dra. Gandini tiene un don especial con los niños, lo hizo sentir cómodo y seguro. Recomiendo totalmente a la doctora para tratamientos infantiles.",
      rating: 5,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLOG-DENTISTAS-EN-LIMA-IILQ9Tpf5biMbcgxPXyYfzkuCNCs3j.webp",
    },
    {
      name: "Roberto Fernández",
      text: "Después de años de tener miedo al dentista, encontré en la Dra. Marisol Gandini una profesional que me hizo sentir tranquilo. Su enfoque en el confort del paciente y el uso de tecnologías modernas hacen que las visitas sean mucho más agradables.",
      rating: 5,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/patron-dentistas-utensilios-1000x640.jpg-vNLSQ02mwHUwXSpzsqdPyF7pfSb0Gm.jpeg",
    },
    {
      name: "Ana Gómez",
      text: "El tratamiento de ortodoncia que recibí con la Dra. Gandini superó mis expectativas. Su seguimiento constante y atención personalizada marcaron la diferencia. Ahora tengo la sonrisa que siempre quise.",
      rating: 5,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Como-escoger-tu-clinica-dental.jpg-JzJtccBGm6XtDhkftBNiLJFezFctPV.jpeg",
    },
    {
      name: "Miguel Torres",
      text: "Excelente servicio desde la recepción hasta la atención con la Dra. Marisol. El blanqueamiento dental que me hizo quedó perfecto y natural. Definitivamente volveré para mis próximos tratamientos.",
      rating: 5,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dentistas-profesional-de-la-salud-scaled-TjIJRk6x4grlNyoIj6SZjvSSt0Gb7w.webp",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
              <span className="font-bold text-white">MG</span>
            </div>
            <span className="text-xl font-bold text-primary">Dra. Marisol Gandini</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#servicios" className="text-gray-600 hover:text-primary transition-colors">
              Servicios
            </Link>
            <Link href="#perfil" className="text-gray-600 hover:text-primary transition-colors">
              Perfil
            </Link>
            <Link href="#testimonios" className="text-gray-600 hover:text-primary transition-colors">
              Testimonios
            </Link>
            <Link href="#instalaciones" className="text-gray-600 hover:text-primary transition-colors">
              Instalaciones
            </Link>
            <Link href="#contacto" className="text-gray-600 hover:text-primary transition-colors">
              Contacto
            </Link>
            <Button className="bg-primary hover:bg-primary-hover text-white">
              <Phone className="mr-2 h-4 w-4" /> Agendar una consulta
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-md">
            <nav className="flex flex-col gap-4">
              <Link
                href="#servicios"
                className="text-gray-600 hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="#perfil"
                className="text-gray-600 hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Perfil
              </Link>
              <Link
                href="#testimonios"
                className="text-gray-600 hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonios
              </Link>
              <Link
                href="#instalaciones"
                className="text-gray-600 hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Instalaciones
              </Link>
              <Link
                href="#contacto"
                className="text-gray-600 hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </Link>
              <Button className="bg-primary hover:bg-primary-hover text-white w-full">
                <Phone className="mr-2 h-4 w-4" /> Agendar una consulta
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dentistas-profesional-de-la-salud-scaled-TjIJRk6x4grlNyoIj6SZjvSSt0Gb7w.webp"
              alt="Dra. Marisol Gandini atendiendo a paciente"
              fill
              className="object-cover scale-x-[-1]" // Girar horizontalmente
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/40"></div>
          </div>

          <div className="container mx-auto px-4 z-10">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">Perfecciona tu sonrisa</h1>
              <p className="text-lg text-gray-600 mb-8">
                Transforma tu sonrisa con tratamientos personalizados de la mano de la Dra. Marisol Gandini,
                especialista en odontología estética y funcional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary-hover text-white text-lg py-6">
                  Agendar Consulta <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg py-6">
                  Mis Servicios
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Sobre la Dra. Gandini */}
        <section id="perfil" className="py-20 bg-primary-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll>
                <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Como-escoger-tu-clinica-dental.jpg-JzJtccBGm6XtDhkftBNiLJFezFctPV.jpeg"
                    alt="Dra. Marisol Gandini"
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll className="delay-100">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
                      Hola, soy la Dra. Marisol Gandini
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      Soy la Dra. Marisol Gandini, odontóloga con más de 15 años de experiencia brindando servicios de
                      salud bucal de excelencia. Me he especializado en diversas áreas de la odontología para ofrecer
                      tratamientos integrales y personalizados a cada uno de mis pacientes.
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-600">
                          Especialista en ortodoncia, odontología estética y rehabilitación oral
                        </p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-600">Formación continua en las técnicas más avanzadas de odontología</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-600">
                          Enfoque personalizado según las necesidades específicas de cada paciente
                        </p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-600">
                          Consultorio equipado con tecnología de vanguardia para diagnósticos precisos
                        </p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-600">
                          Compromiso con la excelencia y el bienestar integral de mis pacientes
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-primary hover:bg-primary-hover text-white text-lg py-6 px-8 self-start mt-auto">
                    Agendar Consulta <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Services Section - Estilo circular como en la imagen */}
        <section id="servicios" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Mis Servicios</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Ofrezco una amplia gama de tratamientos dentales y estéticos para toda la familia
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {services.map((service, index) => (
                <AnimateOnScroll key={index} className={`delay-${index * 50}`}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 shadow-md">
                      <div className="w-full h-full relative">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{service.title}</h3>
                    <p className="text-gray-600 max-w-xs text-sm">{service.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Specialist Profile Section - Nuevo diseño horizontal */}
        <section id="especialista" className="py-20 bg-primary-light">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Perfil Profesional</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Conozca mi formación y experiencia profesional</p>
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
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Dra. Marisol Gandini</h3>
                        <p className="text-primary font-medium mb-4">
                          Odontóloga Especialista en Ortodoncia y Estética Dental
                        </p>
                        <p className="text-gray-600">
                          Con más de 15 años de experiencia, me he especializado en diversas áreas de la odontología
                          para ofrecer un servicio integral a mis pacientes. Mi enfoque combina técnicas avanzadas con
                          un trato personalizado y cálido.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                        <div className="flex items-start">
                          <div className="mr-4 text-primary">
                            <GraduationCap size={24} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Formación Académica</h4>
                            <ul className="space-y-1 text-gray-600">
                              <li>• Doctorado en Odontología - Universidad Nacional</li>
                              <li>• Maestría en Estética Dental - Universidad Internacional</li>
                              <li>• Especialización en Ortodoncia - Instituto de Estudios Avanzados</li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="mr-4 text-primary">
                            <Award size={24} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Certificaciones</h4>
                            <ul className="space-y-1 text-gray-600">
                              <li>• Certificación en Implantología - Asociación Dental Americana</li>
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
                            <h4 className="font-semibold text-gray-800 mb-2">Experiencia Profesional</h4>
                            <ul className="space-y-1 text-gray-600">
                              <li>• 15+ años de práctica clínica</li>
                              <li>• Especialista en rehabilitación oral compleja</li>
                              <li>• Experta en diseño de sonrisas</li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="mr-4 text-primary">
                            <Heart size={24} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Filosofía de Trabajo</h4>
                            <ul className="space-y-1 text-gray-600">
                              <li>• Atención personalizada y centrada en el paciente</li>
                              <li>• Compromiso con la excelencia y la calidad</li>
                              <li>• Actualización constante en nuevas tecnologías</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="mt-auto">
                        <Button className="bg-primary hover:bg-primary-hover text-white">
                          Agendar una consulta <ChevronRight className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonios" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Lo que dicen mis pacientes</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Conoce las experiencias de quienes ya han confiado en mí para cuidar de su salud bucal
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <TestimonialsGallery testimonials={testimonials} />
            </AnimateOnScroll>
          </div>
        </section>

        {/* Facilities and Equipment Section - Galería horizontal */}
        <section id="instalaciones" className="py-20 bg-primary-light">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Mi Consultorio y Equipos</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Cuento con instalaciones modernas y equipos de última generación para brindarte la mejor atención
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <HorizontalGallery />
            </AnimateOnScroll>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="max-w-3xl mx-auto text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para una sonrisa perfecta?</h2>
                <p className="text-xl mb-8">
                  Agenda tu cita hoy mismo y da el primer paso hacia una salud dental óptima
                </p>
                <Button className="bg-white text-primary hover:bg-gray-100 text-lg py-6 px-8">
                  Agendar Mi Primera Consulta <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Contact Section - Reorganizado */}
        <section id="contacto" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contáctame</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Estoy para responder tus preguntas y ayudarte a alcanzar una salud bucal óptima
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <AnimateOnScroll>
                <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Envíame un mensaje</h3>

                  <form className="space-y-6 flex-grow">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="nombre" className="text-sm font-medium text-gray-700">
                          Nombre
                        </label>
                        <Input id="nombre" placeholder="Tu nombre" className="w-full" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="apellido" className="text-sm font-medium text-gray-700">
                          Apellido
                        </label>
                        <Input id="apellido" placeholder="Tu apellido" className="w-full" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="tu@email.com" className="w-full" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="telefono" className="text-sm font-medium text-gray-700">
                        Teléfono
                      </label>
                      <Input id="telefono" placeholder="+598 99 123 456" className="w-full" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="mensaje" className="text-sm font-medium text-gray-700">
                        Mensaje
                      </label>
                      <Textarea id="mensaje" placeholder="¿En qué puedo ayudarte?" className="w-full min-h-[120px]" />
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary-hover text-white">
                      Enviar Mensaje <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll className="delay-100">
                <div className="bg-primary-light rounded-lg shadow-lg p-8 h-full">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Información de Contacto</h3>

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
                        <h4 className="font-semibold text-gray-800 mb-1">Teléfono</h4>
                        <p className="text-gray-600">099859518</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Dirección</h4>
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
                        <h4 className="font-semibold text-gray-800 mb-1">Horario de Atención</h4>
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
      </main>

      {/* Footer */}
      <footer className="bg-primary-light py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="font-bold text-white">MG</span>
                </div>
                <span className="text-xl font-bold text-primary">Dra. Marisol Gandini</span>
              </div>
              <p className="text-gray-600 mb-6 max-w-md">
                Comprometida con tu salud bucal y bienestar. Utilizo tecnología avanzada y un enfoque personalizado para
                cada paciente.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-hover transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-hover transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-hover transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#servicios" className="text-gray-600 hover:text-primary transition-colors">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="#perfil" className="text-gray-600 hover:text-primary transition-colors">
                    Perfil
                  </Link>
                </li>
                <li>
                  <Link href="#testimonios" className="text-gray-600 hover:text-primary transition-colors">
                    Testimonios
                  </Link>
                </li>
                <li>
                  <Link href="#instalaciones" className="text-gray-600 hover:text-primary transition-colors">
                    Instalaciones
                  </Link>
                </li>
                <li>
                  <Link href="#contacto" className="text-gray-600 hover:text-primary transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-4">Servicios</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                    Ortodoncia
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                    Estética Dental
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                    Odontopediatría
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                    Implantes Dentales
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-gray-600">
              &copy; {new Date().getFullYear()} Dra. Marisol Gandini. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

