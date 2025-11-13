import { ArrowRight, Brain, Heart, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-ciide-background via-white to-ciide-secondary/10 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-ciide-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-ciide-hover rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-ciide-secondary/30 text-ciide-primary px-4 py-2 rounded-full text-sm font-medium">
                Centro de Investigación e Innovación del Emocionar
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ciide-text leading-tight">
              Ciencia, Ingeniería y Humanidad para el{' '}
              <span className="text-ciide-primary">Bienestar Sostenible</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              El Modelo CIIDE® integra neurociencia, ingeniería emocional y desarrollo humano
              para transformar personas, procesos y organizaciones.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-ciide-primary hover:bg-ciide-hover text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 shadow-lg group">
                Conoce el Modelo CIIDE®
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="bg-white hover:bg-ciide-background text-ciide-primary px-8 py-4 rounded-lg font-medium transition-all duration-300 border-2 border-ciide-primary hover:border-ciide-hover hover:shadow-xl transform hover:scale-105">
                Explora nuestras áreas
              </button>
            </div>

            <div className="flex gap-8 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-ciide-secondary/30 rounded-full flex items-center justify-center">
                  <Brain className="w-6 h-6 text-ciide-primary" />
                </div>
                <div>
                  <p className="font-semibold text-ciide-text">Neurociencia</p>
                  <p className="text-sm text-gray-500">Aplicada</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-ciide-accent/30 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-ciide-primary" />
                </div>
                <div>
                  <p className="font-semibold text-ciide-text">Ingeniería</p>
                  <p className="text-sm text-gray-500">Emocional</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-ciide-hover/30 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-ciide-primary" />
                </div>
                <div>
                  <p className="font-semibold text-ciide-text">Desarrollo</p>
                  <p className="text-sm text-gray-500">Sostenible</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px] bg-gradient-to-br from-ciide-primary/10 to-ciide-secondary/20 rounded-3xl p-8 backdrop-blur-sm border border-ciide-secondary/30 overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
              <div className="absolute top-8 left-8 w-32 h-32 bg-ciide-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 right-8 w-40 h-40 bg-ciide-hover/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-ciide-accent/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>

              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center space-y-4 animate-fade-in">
                  <Brain className="w-32 h-32 text-ciide-primary mx-auto animate-float" />
                  <p className="text-2xl font-bold text-ciide-primary">CIIDE® – MINDTECH®</p>
                  <p className="text-ciide-text">Ecosistema de Bienestar Integral</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
