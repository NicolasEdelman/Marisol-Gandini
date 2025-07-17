import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, Phone, X, Instagram } from "lucide-react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="#" className="flex items-center gap-2">
          <img
            src="/images/Iconos/Logo.png"
            alt="Logo"
            width={50}
            height={50}
          />
          <span className="text-xl font-bold text-primary">
            Dra. Marisol Gandini
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#servicios"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Servicios
          </Link>

          <Link
            href="#perfil"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Perfil profesional
          </Link>
          <Link
            href="#contacto"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Contacto
          </Link>
          <Link
            href="https://www.instagram.com/smile_dra.gandini/"
            target="_blank"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </Link>
          <Button
            className="bg-primary hover:bg-primary-hover text-white"
            onClick={() => {
              window.location.href = "#contacto";
            }}
          >
            <Phone className="mr-2 h-4 w-4" /> Agendar una consulta
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col gap-4">
            <Link
              href="#nosotros"
              className="text-gray-600 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              href="#servicios"
              className="text-gray-600 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Servicios
            </Link>

            <Link
              href="#instalaciones"
              className="text-gray-600 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Mi consultorio
            </Link>
            <Link
              href="#contacto"
              className="text-gray-600 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </Link>
            <Button
              className="bg-primary hover:bg-primary-hover text-white w-full"
              onClick={() => {
                window.location.href = "#contacto";
              }}
            >
              <Phone className="mr-2 h-4 w-4" /> Agendar una consulta
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
