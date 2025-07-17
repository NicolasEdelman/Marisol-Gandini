import { Instagram, Phone, MapPin } from "lucide-react";
import Link from "next/link";
export const Footer = () => {
  return (
    <footer className="bg-primary-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/Iconos/Logo.png"
                alt="Logo"
                width={50}
                height={50}
              />
              <span className="text-xl font-bold text-primary">
                Dra. Marisol Gandini
              </span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Comprometida con tu salud bucal y bienestar. Utilizo tecnología
              avanzada y un enfoque personalizado para cada paciente.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://wa.me/59898595189"
                target="_blank"
                className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-hover transition-colors"
              >
                <Phone className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/smile_dra.gandini/"
                target="_blank"
                className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-hover transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.google.com/maps/place/Pablo+Galarza+3603,+11800+Montevideo,+Uruguay/@-34.9046,-56.1653,17z/data=!3m1!4b1!4m6!3m5!1s0x959f81c1a9b9d4c7:0x4c5d6e5e9e97a6d0!8m2!3d-34.9046!4d-56.1653!16s%2Fg%2F11c48t4jzq?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-hover transition-colors"
              >
                <MapPin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <h3 className="font-bold text-gray-800 mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#nosotros"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Servicios
                </Link>
              </li>

              <li>
                <Link
                  href="#perfil"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Perfil
                </Link>
              </li>

              <li>
                <Link
                  href="#contacto"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h3 className="font-bold text-gray-800 mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#servicios"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Odontología General
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Estetica dental y Rehabilitación
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Cirugías
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Implantologia
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Armonización Facial
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Laserterapia
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
