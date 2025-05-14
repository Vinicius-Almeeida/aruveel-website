function Hero() {
  return (
    <>
      <section
        id="hero"
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/img/hero.jpg')] flex items-center justify-center"
      >
        {/* Overlay escuro cobrindo tudo */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-0"></div>

        {/* Conteúdo */}
        <div className="relative z-10 text-center px-4 text-white max-w-2xl py-16 sm:py-24 md:py-32">
          <h1 className="text-4xl font-bold md:text-6xl leading-tight">
            Contabilidade moderna para empresas e condomínios
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Soluções contábeis inteligentes, administrativas e fiscais para você crescer com segurança.
          </p>
          <a
            href="https://wa.me/5547996279014"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300"
          >
            Fale conosco no WhatsApp
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