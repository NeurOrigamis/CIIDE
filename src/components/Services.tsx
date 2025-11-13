import {
  ClipboardCheck,
  Award,
  Users,
  Cog,
  Activity,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: ClipboardCheck,
      title: 'Diagnóstico integral del bienestar organizacional',
      description:
        'Evaluación completa del estado emocional, cultural y de eficiencia de tu organización.',
      color: 'bg-ciide-primary',
    },
    {
      icon: Award,
      title: 'Implementación del Sello CIIDE®',
      description:
        'Certificación de estándares de bienestar y gestión emocional basados en evidencia científica.',
      color: 'bg-ciide-hover',
    },
    {
      icon: Users,
      title: 'Programas de formación y liderazgo emocional',
      description:
        'Desarrollo de competencias en neurogestión y liderazgo consciente para equipos y directivos.',
      color: 'bg-ciide-secondary',
    },
    {
      icon: Cog,
      title: 'Consultoría en gestión emocional de procesos industriales',
      description:
        'Integración con IPA Ingeniería para optimizar procesos desde el bienestar humano.',
      color: 'bg-ciide-accent',
    },
    {
      icon: Activity,
      title: 'Asistencia técnica y clínica',
      description:
        'Apoyo integral con Centro Clínico Equilibrar en medicina integrativa y salud mental.',
      color: 'bg-ciide-coral',
    },
    {
      icon: Sparkles,
      title: 'Innovación aplicada e inteligencia artificial',
      description:
        'Desarrollo de soluciones tecnológicas para el monitoreo y mejora del bienestar organizacional.',
      color: 'bg-ciide-serene',
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-ciide-neutral/30 via-white to-ciide-secondary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-ciide-primary font-semibold text-sm uppercase tracking-wide">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-ciide-text mt-3 mb-4">
            Soluciones Integrales para tu Organización
          </h2>
          <p className="text-gray-600 text-lg">
            Ofrecemos un ecosistema completo de servicios para transformar tu organización desde
            el bienestar y la gestión emocional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm hover:bg-white rounded-xl p-6 transition-all duration-500 hover:shadow-2xl border border-ciide-neutral hover:border-ciide-secondary transform hover:scale-105 hover:-translate-y-2"
            >
              <div
                className={`${service.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-lg font-bold text-ciide-text mb-2 leading-snug">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              <button className="flex items-center gap-2 text-ciide-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Más información
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-ciide-primary hover:bg-ciide-hover text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg group">
            Solicita una consulta personalizada
            <ArrowRight size={20} className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
