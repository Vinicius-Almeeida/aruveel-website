function About() {
    return (
      <>
      <section id="sobre" className="bg-white py-20 px-6">
        <div 
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="200"className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Sobre a Aruveel</h2>
  
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            A Aruveel Contabilidade e Condomínios é mais do que uma empresa de números.
            Somos parceiros estratégicos que caminham lado a lado com empresários, gestores e síndicos para transformar burocracias em soluções inteligentes.
          </p>
  
          <div className="grid md:grid-cols-2 gap-12 mt-12 text-left">
            <div
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="200">
              <h3 className="text-2xl font-semibold text-orange-500 mb-3">Missão</h3>
              <p className="text-gray-600">
                Atender com excelência às demandas contábeis e administrativas de nossos clientes, oferecendo segurança, transparência e orientação estratégica para o crescimento sustentável.
              </p>
            </div>
            <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="200">
              <h3 className="text-2xl font-semibold text-orange-500 mb-3">Nosso diferencial</h3>
              <p className="text-gray-600">
                Unimos experiência, tecnologia e atendimento humanizado para oferecer um serviço contábil completo, sempre atento às mudanças da legislação e focado no sucesso do cliente.
              </p>
            </div>
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
  
  export default About;
  