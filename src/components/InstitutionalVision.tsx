import { Target, Users, Lightbulb, Brain } from 'lucide-react';

export default function InstitutionalVision() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-ciide-primary font-semibold text-sm uppercase tracking-wide">
                Nuestra Visión
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-ciide-text leading-tight">
              Integrando Conocimiento Científico, Técnico y Humano
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              La Corporación CIIDE® nace con la misión de integrar el conocimiento científico,
              técnico y humano en torno al bienestar, la gestión emocional y la eficiencia
              organizacional.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Combinamos neurociencia, psicología, ingeniería y medicina oriental para crear
              soluciones integrales que transforman la cultura organizacional y potencian el
              desarrollo humano sostenible.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-ciide-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-ciide-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-ciide-text mb-1">Misión Clara</h3>
                  <p className="text-gray-600 text-sm">
                    Transformar organizaciones a través de la ciencia del bienestar y la gestión
                    emocional basada en evidencia.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-ciide-hover/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-ciide-hover" />
                </div>
                <div>
                  <h3 className="font-semibold text-ciide-text mb-1">Enfoque Humano</h3>
                  <p className="text-gray-600 text-sm">
                    Ponemos a las personas en el centro, integrando mente, cuerpo y entorno para
                    el desarrollo integral.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-ciide-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-ciide-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-ciide-text mb-1">Innovación Continua</h3>
                  <p className="text-gray-600 text-sm">
                    I+D+i constante para desarrollar modelos, metodologías y estándares de
                    bienestar organizacional.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-ciide-primary to-ciide-hover p-6 rounded-2xl text-white aspect-square flex flex-col justify-center items-center text-center transform hover:scale-105 transition-transform duration-300">
                  <Brain className="w-16 h-16 mb-4" />
                  <h4 className="font-bold text-lg">Mente</h4>
                  <p className="text-sm opacity-90">Neurociencia aplicada</p>
                </div>
                <div className="bg-gradient-to-br from-ciide-accent to-yellow-600 p-6 rounded-2xl text-white aspect-square flex flex-col justify-center items-center text-center transform hover:scale-105 transition-transform duration-300">
                  <Users className="w-16 h-16 mb-4" />
                  <h4 className="font-bold text-lg">Entorno</h4>
                  <p className="text-sm opacity-90">Cultura organizacional</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gradient-to-br from-ciide-secondary to-teal-600 p-6 rounded-2xl text-white aspect-square flex flex-col justify-center items-center text-center transform hover:scale-105 transition-transform duration-300">
                  <Target className="w-16 h-16 mb-4" />
                  <h4 className="font-bold text-lg">Cuerpo</h4>
                  <p className="text-sm opacity-90">Medicina oriental</p>
                </div>
                <div className="bg-gradient-to-br from-ciide-hover to-ciide-primary p-6 rounded-2xl text-white aspect-square flex flex-col justify-center items-center text-center transform hover:scale-105 transition-transform duration-300">
                  <Lightbulb className="w-16 h-16 mb-4" />
                  <h4 className="font-bold text-lg">Integración</h4>
                  <p className="text-sm opacity-90">Desarrollo sostenible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
