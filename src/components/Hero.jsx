function Hero() {
  return (
    <>
      <section
        id="hero"
         className="bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat w-full h-[100vh] md:h-[100vh] flex items-center justify-center"
        style={{ backgroundImage: "url('/img/hero.jpg')" }}
      >
        {/* Overlay escura */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Conteúdo */}
        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <h1
              data-aos="fade-down"
              data-aos-duration="1200"
              className="text-4xl md:text-6xl font-bold break-words text-center px-4"
            >
              Contabilidade moderna para empresas e condomínios
          </h1>
          <p 
          data-aos="fade-up"
          data-aos-duration="1200"
          className="text-lg md:text-xl mb-8">
            Soluções contábeis inteligentes, administrativas e fiscais para você crescer com segurança.
          </p>
          <a
            href="https://wa.me/47996279014"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block text-white font-bold py-3 px-6 rounded-lg overflow-hidden shadow-lg bg-orange-500 hover:bg-orange-600 transition"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/60 to-white/20 opacity-0 group-hover:opacity-100 transition duration-500 blur-sm animate-pulse" />
            <span className="relative z-10">Fale conosco no WhatsApp</span>
          </a>
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

export default Hero;