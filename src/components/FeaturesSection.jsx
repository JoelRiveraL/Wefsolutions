import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const FeaturesSection = ({ isOpenService, value }) => {
  const [showBall, setShowBall] = React.useState(true);

  useEffect(() => {
    if (value === "") {
      setShowBall(true);
    }
  }, [value]);

  const services = [
    {
      name: 'ESET Antivirus',
      description: 'Protección avanzada contra ransomware y amenazas de día cero con tecnología LiveSense.',
      icon: (
        <img src="/images/antivirus.jpg" alt="ESET Logo" className='h-60'/>
      ),
      gradient: 'from-blue-400 to-cyan-500',
    },
    {
      name: 'Microsoft Office',
      description: 'Suite de productividad con Word, Excel, PowerPoint y más para optimizar tu trabajo.',
      icon: (
        <img src="/images/office-2019-pro-plus.png" alt="office Logo" className='h-60'/>
      ),
      gradient: 'from-orange-400 to-red-500',
    },
    {
      name: 'Adobe Creative Cloud',
      description: 'Herramientas profesionales para diseño gráfico, edición de video y desarrollo web.',
      icon: (
        <img src="/images/FDASDF.webp" alt="FDASDF Logo" className='h-60'/>
      ),
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      name: 'AutoDesk',
      description: 'Software de diseño 3D y CAD para arquitectura, ingeniería y construcción.',
      icon: (
        <img src="/images/orig.webp" alt="orig Logo" className='h-60'/>
      ),
      gradient: 'from-green-400 to-teal-500',
    },
    {
      name: 'Windows',
      description: 'Sistema operativo líder con seguridad y herramientas para cualquier tarea.',
      icon: (
        <img src="/images/Windows11.jpg" alt="orig Logo" className='h-60'/>
      ),
      gradient: 'from-indigo-400 to-blue-500',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: '50px',
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: '30px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '80px',
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '40px',
        },
      },
    ],
  };

  return (
    <div>
      {/* Features Section */}
      <div className="relative overflow-hidden max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Blobs */}
        {showBall && (
          <div className="blob bg-purple-500/14 w-99 h-96 absolute -bottom-48 -left-48 z-[1]"></div>

        )}
          <div className="blob bg-blue-500/14 w-99 h-96 absolute -top-48 -right-48 z-[1]"></div>

        <div className="text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-bold text-gray-900 mb-6">Licencias de Software</h2>
          <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed">
            Impulsa tu productividad con licencias de software 100% originales y al mejor precio.
            En WeFSolution te conectamos con las herramientas digitales que marcan la diferencia.
          </p>
        </div>

        <div className="relative z-10 slider-container">
          <Slider {...settings}>
            {services.map((service, index) => (
              <div key={index} className="px-2 focus:outline-none py-20 h-[600px]">
                <div className="group transition-all duration-500 cursor-pointer h-full">
                  <div className="bg-white/80 p-4 rounded-2xl transition-all duration-500 border border-white/30 flex flex-col mx-2 h-80">
                  <div className={` bg-gradient-to-br  rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 mx-auto`}>
                      {service.icon}
                    </div>
                    <div className="text-center flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                        <p className="text-gray-600 leading-relaxed text-xs">{service.description}</p>
                      </div>
                      <button
                        className="mt-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 text-sm cursor-pointer"
                        onClick={() => {
                          isOpenService(service.name);
                          setShowBall(false);
                        }}
                      >
                        Ver más
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};