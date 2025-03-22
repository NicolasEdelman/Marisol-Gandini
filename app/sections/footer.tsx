import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
export const Footer = () => {
  return (
    <footer className="bg-primary-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                <span className="font-bold text-white">MG</span>
              </div>
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
                  href="#testimonios"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Testimonios
                </Link>
              </li>
              <li>
                <Link
                  href="#instalaciones"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Instalaciones
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

          <div>
            <h3 className="font-bold text-gray-800 mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Ortodoncia
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Estética Dental
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Odontopediatría
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Implantes Dentales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Dra. Marisol Gandini. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
