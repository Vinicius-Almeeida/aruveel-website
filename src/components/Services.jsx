function Services() {
    const servicos = [
      "Contabilidade para empresas",
      "Administração de condomínios",
      "Consultoria empresarial e administrativa",
      "Planejamento tributário",
      "Assessoria fiscal, pessoal e RH",
      "Imposto de renda pessoa física",
    ];
  
    return (
      <>
        <section
            id="services"
            className="relative bg-[url('/background-services.png')] bg-cover bg-center bg-no-repeat w-full py-20 px-4"
              >
               <div className="absolute inset-0 bg-white/60 backdrop-blur-md z-0"></div>

              <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-6"></div>

                {/* Conteúdo da seção */}
               <div className="relative z-10 max-w-6xl mx-auto text-center">
              <h2 data-aos="fade-up"
                  data-aos-duration="1200"
                  className="text-4xl font-bold mb-12">Nossos serviços</h2>
               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
               {servicos.map((titulo, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 border-l-4 border-orange-500"
                data-aos="zoom-in"
                data-aos-delay={index * 150}
                data-aos-duration="900"
                data-aos-easing="ease-in-out"
              >
                <div className="text-xl font-semibold text-gray-800 mb-2">
                  {titulo}
                </div>
                <p className="text-sm text-gray-600">
                  Saiba mais sobre esse serviço e como ele pode ajudar sua empresa ou condomínio.
                </p>
              </div>
              ))}
          </div>
        </div>
      </section>
      {/* Linha animada com gradiente dinâmico */}
      <div
        className="w-full h-[8px] animate-gradient-x bg-[length:300%_300%] bg-gradient-to-r from-gray-800 via-orange-500 to-gray-200"
        style={{
          backgroundSize: "300% 300%",
          animation: "gradientShift 5s ease infinite"
        }}
      ></div>
    </>
    );
  }
  
  export default Services;
  