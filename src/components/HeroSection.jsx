import React from 'react';

export const HeroSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative overflow-hidden animated-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-38">
          <div className="flex flex-col md:flex-row items-center justify-between gap-20">
            {/* Text Content (Left) */}
            <div className="md:w-1/2 text-left relative z-10">
              <h1 className="text-[25px] md:text-[50px] font-extrabold text-white pb-6 leading-tight">
                Optimice su entorno tecnológico con
              </h1>
              <h1 className="text-[50px] md:text-[75px] font-extrabold text-white pb-6 leading-tight">
                Wefsolution
              </h1>
              <p className="text-xl md:text-2xl text-white mb-12 max-w-4xl leading-relaxed">
              Con soluciones inteligentes, wefSolution integra software de última generación y análisis de datos para impulsar la eficiencia operativa y fortalecer la toma de decisiones, permitiendo que su equipo se concentre en generar valor estratégico.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <button className="group bg-white text-blue-600 px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center space-x-2">
                  <span>Explorar más</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
            {/* Logo (Right) */}
            <div className="md:w-1/2 flex justify-center relative z-10">
              
              <img
                  src="/images/image 1.png"
                  alt="Wefsolution Logo"
                  className="w-64 h-64 md:w-96 md:h-96 object-contain z-1000"
                />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-90 h-90 md:w-[520px] md:h-[520px] bg-white/70 rounded-full blur-2xl z-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};