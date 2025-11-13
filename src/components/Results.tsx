import { TrendingDown, TrendingUp, Heart, Target, Award } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Results() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('results-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const metrics = [
    {
      icon: TrendingDown,
      value: '45%',
      label: 'Reducción de estrés laboral',
      sublabel: 'En los primeros 6 meses',
      color: 'text-ciide-coral',
      bg: 'bg-ciide-coral/10',
    },
    {
      icon: TrendingUp,
      value: '67%',
      label: 'Aumento de productividad',
      sublabel: 'Medido en equipos certificados',
      color: 'text-ciide-hover',
      bg: 'bg-ciide-hover/10',
    },
    {
      icon: Heart,
      value: '82%',
      label: 'Mejora en bienestar',
      sublabel: 'Según índice CIIDE®',
      color: 'text-ciide-primary',
      bg: 'bg-ciide-primary/10',
    },
    {
      icon: Target,
      value: '54%',
      label: 'Mayor cohesión de equipos',
      sublabel: 'Sentido de pertenencia',
      color: 'text-ciide-accent',
      bg: 'bg-ciide-accent/10',
    },
    {
      icon: Award,
      value: '71%',
      label: 'Reducción de rotación',
      sublabel: 'Retención de talento clave',
      color: 'text-ciide-secondary',
      bg: 'bg-ciide-secondary/10',
    },
  ];

  const beneficios = [
    'Estandarización de prácticas saludables bajo el Sello CIIDE®',
    'Integración efectiva entre bienestar personal y resultados organizacionales',
    'Cultura organizacional basada en evidencia científica',
    'Liderazgo consciente y gestión emocional sostenible',
    'Espacios de trabajo que promueven la salud integral',
    'Procesos optimizados desde el bienestar humano',
  ];

  return (
    <section id="resultados" className="py-20 bg-ciide-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div id="results-section" className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-ciide-accent font-semibold text-sm uppercase tracking-wide">
            Resultados Esperados
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Impacto Medible en tu Organización
          </h2>
          <p className="text-white/90 text-lg">
            El Modelo CIIDE® genera transformaciones cuantificables en bienestar, productividad y
            cultura organizacional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className={`${metric.bg} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
              </div>

              <div
                className={`text-4xl font-bold ${metric.color} mb-2 ${
                  isVisible ? 'animate-pulse' : ''
                }`}
              >
                {metric.value}
              </div>

              <h3 className="text-ciide-text font-semibold mb-1">{metric.label}</h3>
              <p className="text-gray-500 text-sm">{metric.sublabel}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            Beneficios Integrales del Modelo CIIDE®
          </h3>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {beneficios.map((beneficio, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-6 h-6 bg-ciide-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
                <p className="text-white/90">{beneficio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
