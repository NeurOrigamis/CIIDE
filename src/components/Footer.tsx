import { Brain, Mail, Phone, MapPin, Linkedin, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    'Inicio',
    'Modelo CIIDE®',
    'Áreas de Acción',
    'Servicios',
    'Metodología',
    'Resultados',
  ];

  const resources = ['Equipo', 'Alianzas', 'Blog', 'Contacto', 'Políticas de Privacidad'];

  return (
    <footer className="bg-ciide-text text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="w-10 h-10 text-ciide-accent" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">CIIDE®</span>
                <span className="text-xs text-gray-400">MINDTECH®</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Centro de Investigación e Innovación del Emocionar. Ciencia, ingeniería y humanidad
              para el bienestar sostenible.
            </p>
            <div className="flex gap-3">
              <button className="w-10 h-10 bg-white/10 hover:bg-ciide-primary rounded-lg flex items-center justify-center transition-all duration-300">
                <Linkedin size={18} />
              </button>
              <button className="w-10 h-10 bg-white/10 hover:bg-ciide-primary rounded-lg flex items-center justify-center transition-all duration-300">
                <Youtube size={18} />
              </button>
              <button className="w-10 h-10 bg-white/10 hover:bg-ciide-primary rounded-lg flex items-center justify-center transition-all duration-300">
                <Instagram size={18} />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-ciide-accent transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Recursos</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource}>
                  <a
                    href={`#${resource.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-ciide-accent transition-colors duration-300 text-sm"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-ciide-accent flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-400">
                  <p>contacto@ciide.cl</p>
                  <p>info@mindtech.cl</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-ciide-accent flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-400">
                  <p>+56 9 1234 5678</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-ciide-accent flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-400">
                  <p>Valparaíso, Chile</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Corporación CIIDE® - MINDTECH®. Todos los derechos
              reservados.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-ciide-accent transition-colors duration-300">
                Políticas de Privacidad
              </a>
              <a href="#" className="hover:text-ciide-accent transition-colors duration-300">
                Términos de Uso
              </a>
            </div>
          </div>

          <div className="mt-6 text-center">
            <div className="inline-block bg-gradient-to-r from-ciide-primary via-ciide-accent to-ciide-hover p-0.5 rounded-lg">
              <div className="bg-ciide-text px-6 py-2 rounded-lg">
                <span className="text-sm font-semibold text-ciide-accent">Sello CIIDE®</span>
                <span className="text-xs text-gray-400 ml-2">
                  Certificación de Bienestar Organizacional
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
