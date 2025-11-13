import { Mail, Phone, MapPin, Linkedin, Youtube, Instagram, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-ciide-neutral/50 via-ciide-background to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184638/pexels-photo-3184638.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-ciide-primary font-semibold text-sm uppercase tracking-wide">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-ciide-text mt-3 mb-4">
            Construyamos Bienestar Sostenible Juntos
          </h2>
          <p className="text-gray-600 text-lg">
            Estamos aquí para responder tus preguntas y ayudarte a transformar tu organización.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-ciide-neutral">
              <h3 className="text-2xl font-bold text-ciide-text mb-6">Información de Contacto</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ciide-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-ciide-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ciide-text mb-1">Email</h4>
                    <p className="text-gray-600">contacto@ciide.cl</p>
                    <p className="text-gray-600">info@mindtech.cl</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ciide-hover/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-ciide-hover" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ciide-text mb-1">Teléfono</h4>
                    <p className="text-gray-600">+56 9 1234 5678</p>
                    <p className="text-gray-600">+56 32 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ciide-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-ciide-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ciide-text mb-1">Ubicación</h4>
                    <p className="text-gray-600">Valparaíso, Chile</p>
                    <p className="text-gray-600">Región de Valparaíso</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-ciide-text mb-4">Síguenos</h4>
                <div className="flex gap-3">
                  <button className="w-12 h-12 bg-ciide-primary hover:bg-ciide-hover rounded-lg flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                    <Linkedin size={20} />
                  </button>
                  <button className="w-12 h-12 bg-ciide-primary hover:bg-ciide-hover rounded-lg flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                    <Youtube size={20} />
                  </button>
                  <button className="w-12 h-12 bg-ciide-primary hover:bg-ciide-hover rounded-lg flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                    <Instagram size={20} />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-ciide-primary to-ciide-hover rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">¿Listo para transformar tu organización?</h3>
              <p className="mb-6 text-white/90">
                Agenda una consulta gratuita y descubre cómo el Modelo CIIDE® puede impulsar el
                bienestar y la productividad en tu empresa.
              </p>
              <button className="bg-white text-ciide-primary hover:bg-ciide-accent hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Agendar consulta
              </button>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-ciide-neutral">
            <h3 className="text-2xl font-bold text-ciide-text mb-6">Envíanos un Mensaje</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ciide-text mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-ciide-primary focus:ring-2 focus:ring-ciide-primary/20 outline-none transition-all duration-300"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ciide-text mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-ciide-primary focus:ring-2 focus:ring-ciide-primary/20 outline-none transition-all duration-300"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-ciide-text mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-ciide-primary focus:ring-2 focus:ring-ciide-primary/20 outline-none transition-all duration-300"
                  placeholder="+56 9 1234 5678"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ciide-text mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-ciide-primary focus:ring-2 focus:ring-ciide-primary/20 outline-none transition-all duration-300 resize-none"
                  placeholder="Cuéntanos sobre tu organización y cómo podemos ayudarte..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-ciide-primary hover:bg-ciide-hover text-white px-6 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg flex items-center justify-center gap-2 group"
              >
                Enviar mensaje
                <Send size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
