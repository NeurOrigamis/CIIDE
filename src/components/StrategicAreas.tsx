import { Microscope, Building2, GraduationCap, ArrowRight } from 'lucide-react';

export default function StrategicAreas() {
  const areas = [
    {
      icon: Microscope,
      title: 'Investigación y Desarrollo (I+D+i)',
      description:
        'Modelos, metodologías y estándares de bienestar basados en evidencia científica. Desarrollamos conocimiento aplicado para la transformación organizacional.',
      color: 'from-ciide-primary to-ciide-hover',
      features: [
        'Neurociencia aplicada',
        'Psicología organizacional',
        'Desarrollo de protocolos',
        'Validación científica',
      ],
    },
    {
      icon: Building2,
      title: 'Consultoría Organizacional',
      description:
        'Aplicación del Sello CIIDE® en empresas para fortalecer cultura y eficiencia emocional. Transformamos organizaciones desde el bienestar integral.',
      color: 'from-ciide-hover to-ciide-secondary',
      features: [
        'Diagnóstico integral',
        'Implementación del Sello CIIDE®',
        'Gestión del cambio',
        'Seguimiento y evaluación',
      ],
    },
    {
      icon: GraduationCap,
      title: 'Formación y Transferencia',
      description:
        'Diplomados, certificaciones y programas en liderazgo consciente y neurogestión. Capacitamos líderes para el bienestar sostenible.',
      color: 'from-ciide-secondary to-ciide-accent',
      features: [
        'Liderazgo emocional',
        'Certificación profesional',
        'Neurogestión aplicada',
        'Desarrollo de competencias',
      ],
    },
  ];

  return (
    <section id="áreas-de-acción" className="py-20 bg-ciide-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-ciide-primary font-semibold text-sm uppercase tracking-wide">
            Nuestras Áreas Estratégicas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-ciide-text mt-3 mb-4">
            Tres Pilares para la Transformación
          </h2>
          <p className="text-gray-600 text-lg">
            Integramos investigación, consultoría y formación para crear ecosistemas de bienestar
            sostenible en organizaciones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <area.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-ciide-text mb-3">{area.title}</h3>

              <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>

              <ul className="space-y-2 mb-6">
                {area.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-ciide-primary rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="flex items-center gap-2 text-ciide-primary font-medium group-hover:gap-3 transition-all duration-300">
                Conocer más
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
