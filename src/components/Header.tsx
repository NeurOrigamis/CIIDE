import { useState } from 'react';
import { Menu, X, Brain } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    'Inicio',
    'Modelo CIIDE®',
    'Áreas de Acción',
    'Servicios',
    'Metodología',
    'Resultados',
    'Equipo',
    'Alianzas',
    'Blog',
    'Contacto',
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Brain className="w-10 h-10 text-ciide-primary" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-ciide-primary">CIIDE®</span>
              <span className="text-xs text-ciide-text">MINDTECH®</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-medium text-ciide-text hover:text-ciide-hover transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          <button className="hidden lg:block bg-ciide-primary hover:bg-ciide-hover text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
            Explora el Modelo CIIDE®
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-ciide-primary"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-medium text-ciide-text hover:text-ciide-hover transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="bg-ciide-primary text-white px-6 py-2.5 rounded-lg font-medium mt-2">
              Explora el Modelo CIIDE®
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
