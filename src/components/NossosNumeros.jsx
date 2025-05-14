import CountUp from "react-countup";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

function NossosNumeros() {
  const [iniciado, setIniciado] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.6, // dispara quando 60% da seção estiver visível
    triggerOnce: true,
  });

  if (inView && !iniciado) setIniciado(true);

  return (
    <>
    <section
      ref={ref}
      className="relative bg-fixed bg-center bg-cover text-white py-24 px-6"
      style={{
        backgroundImage: "url('/img/bg-empresa.png')",
      }}
    >
      {/* Sobreposição laranja com opacidade */}
      <div className="absolute inset-0 bg-orange-500 opacity-20"></div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-6xl mx-auto text-center grid grid-cols-1 sm:grid-cols-3 gap-12">
        {/* Bloco 1 */}
        <div>
          <div className="text-5xl font-bold">
            {iniciado && <CountUp end={30} duration={3} />}+
          </div>
          <p className="mt-2 text-lg">Anos de experiência</p>
        </div>

        {/* Bloco 2 */}
        <div>
          <div className="text-5xl font-bold">
            {iniciado && <CountUp end={300} duration={3} />}+
          </div>
          <p className="mt-2 text-lg">Empresas ativas</p>
        </div>

        {/* Bloco 3 */}
        <div>
          <div className="text-5xl font-bold">
            {iniciado && <CountUp end={1000} duration={3} />}+
          </div>
          <p className="mt-2 text-lg">Clientes satisfeitos</p>
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

export default NossosNumeros;
