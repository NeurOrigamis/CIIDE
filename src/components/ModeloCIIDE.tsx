import { Search, Zap, Network, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

export default function ModeloCIIDE() {
  const modelEjes = [
    {
      icon: Search,
      title: 'Ciencia',
      description: 'Evidencia científica y neurociencia aplicada al bienestar organizacional',
      color: 'from-ciide-primary to-ciide-hover',
    },
    {
      icon: Zap,
      title: 'Intervención',
      description: 'Estrategias y protocolos de acción para la transformación cultural',
      color: 'from-ciide-hover to-ciide-secondary',
    },
    {
      icon: Network,
      title: 'Integración',
      description: 'Articulación mente-cuerpo-entorno en sistemas organizacionales',
      color: 'from-ciide-secondary to-ciide-serene',
    },
    {
      icon: TrendingUp,
      title: 'Desarrollo',
      description: 'Crecimiento sostenible de personas, equipos y organizaciones',
      color: 'from-ciide-serene to-ciide-accent',
    },
    {
      icon: CheckCircle,
      title: 'Evaluación',
      description: 'Medición de impacto y mejora continua basada en indicadores',
      color: 'from-ciide-accent to-ciide-coral',
    },
  ];

  const metodologia = [
    {
      title: 'Mente',
      subtitle: 'Neurociencia Aplicada',
      items: [
        'Gestión emocional',
        'Neurogestión',
        'Mindfulness organizacional',
        'Regulación del estrés',
      ],
      gradient: 'from-ciide-primary to-ciide-hover',
    },
    {
      title: 'Cuerpo',
      subtitle: 'Medicina Oriental',
      items: [
        'Acupuntura laboral',
        'Yoga corporativo',
        'Medicina integrativa',
        'Salud preventiva',
      ],
      gradient: 'from-ciide-hover to-ciide-secondary',
    },
    {
      title: 'Entorno',
      subtitle: 'Cultura Organizacional',
      items: [
        'Clima laboral',
        'Espacios saludables',
        'Comunicación efectiva',
        'Liderazgo consciente',
      ],
      gradient: 'from-ciide-secondary to-ciide-accent',
    },
  ];

  return (
    <section id="modelo-ciide®" className="py-20 bg-gradient-to-b from-white to-ciide-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-ciide-primary font-semibold text-sm uppercase tracking-wide">
            Modelo CIIDE® – MINDTECH®
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-ciide-text mt-3 mb-4">
            Cinco Ejes para la Transformación Integral
          </h2>
          <p className="text-gray-600 text-lg">
            Un modelo científico-aplicado que integra investigación, intervención y evaluación
            para el bienestar organizacional sostenible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {modelEjes.map((eje, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${eje.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
              >
                <eje.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-lg font-bold text-ciide-text text-center mb-2">{eje.title}</h3>

              <p className="text-gray-600 text-sm text-center leading-relaxed">
                {eje.description}
              </p>

              {index < 4 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-ciide-secondary">
                  <ArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-ciide-text mb-3">
              Metodología Integral
            </h3>
            <p className="text-gray-600">
              Integramos tres dimensiones fundamentales del bienestar humano y organizacional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {metodologia.map((dimension, index) => (
              <div
                key={index}
                className="relative bg-ciide-background rounded-2xl p-6 overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${dimension.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-bold text-ciide-primary mb-1">
                      {dimension.title}
                    </h4>
                    <p className="text-sm text-gray-600">{dimension.subtitle}</p>
                  </div>

                  <ul className="space-y-3">
                    {dimension.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-ciide-hover mr-3 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="bg-ciide-primary hover:bg-ciide-hover text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2">
              Descarga el Modelo CIIDE® completo
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
