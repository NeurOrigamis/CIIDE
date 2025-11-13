import { Building2, GraduationCap, Heart, Factory } from 'lucide-react';

export default function Alliances() {
  const alliances = [
    {
      name: 'ENAP Patagonia',
      type: 'Cliente Estratégico',
      icon: Factory,
      color: 'from-ciide-primary to-ciide-hover',
    },
    {
      name: 'PUCV',
      type: 'Alianza Académica',
      icon: GraduationCap,
      color: 'from-ciide-hover to-ciide-secondary',
    },
    {
      name: 'UTFSM',
      type: 'Investigación Conjunta',
      icon: GraduationCap,
      color: 'from-ciide-secondary to-ciide-accent',
    },
    {
      name: 'ACHS',
      type: 'Colaboración en Salud',
      icon: Heart,
      color: 'from-ciide-accent to-ciide-coral',
    },
    {
      name: 'Subsecretaría de Evaluación Social',
      type: 'Políticas Públicas',
      icon: Building2,
      color: 'from-ciide-coral to-ciide-primary',
    },
    {
      name: 'IPA Ingeniería',
      type: 'Partner Técnico',
      icon: Building2,
      color: 'from-ciide-primary to-ciide-hover',
    },
    {
      name: 'Centro Clínico Equilibrar',
      type: 'Salud Integrativa',
      icon: Heart,
      color: 'from-ciide-hover to-ciide-secondary',
    },
    {
      name: 'PRACSIS',
      type: 'Consultoría Estratégica',
      icon: Building2,
      color: 'from-ciide-secondary to-ciide-serene',
    },
  ];

  return (
    <section id="alianzas" className="py-20 bg-ciide-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-ciide-primary font-semibold text-sm uppercase tracking-wide">
            Nuestras Alianzas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-ciide-text mt-3 mb-4">
            Colaboraciones Estratégicas
          </h2>
          <p className="text-gray-600 text-lg">
            Trabajamos con organizaciones líderes en Chile para amplificar el impacto del Modelo
            CIIDE® en diferentes sectores.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {alliances.map((alliance, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${alliance.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <alliance.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="font-bold text-ciide-text mb-1 text-sm">{alliance.name}</h3>
              <p className="text-xs text-gray-500">{alliance.type}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-ciide-text mb-4">
            ¿Quieres formar parte del ecosistema CIIDE®?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Estamos abiertos a colaboraciones con universidades, centros de investigación,
            organizaciones públicas y privadas comprometidas con el bienestar sostenible.
          </p>
          <button className="bg-ciide-primary hover:bg-ciide-hover text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
            Propón una alianza estratégica
          </button>
        </div>
      </div>
    </section>
  );
}
