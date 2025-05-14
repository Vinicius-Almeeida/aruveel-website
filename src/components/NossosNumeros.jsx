import { useEffect, useRef, useState } from 'react';
import useCountUp from '../hooks/useCountUp';

export default function NossosNumeros() {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStartCount(true);
      },
      { threshold: 0.6 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const anos = useCountUp(30, 1000, startCount);
  const empresas = useCountUp(300, 1000, startCount);
  const clientes = useCountUp(1000, 1000, startCount);

  return (
    <section
      id="numeros"
      ref={sectionRef}
      className="relative bg-[url('/bg-empresa.png')] bg-cover bg-center bg-no-repeat w-full min-h-[60vh] flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-orange-500/80 z-0"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 text-white text-center gap-12 px-6 py-16 max-w-6xl mx-auto">
        <div>
          <p className="text-5xl font-bold">+{anos}</p>
          <p className="mt-2 text-lg font-medium">Anos de Experiência</p>
        </div>
        <div>
          <p className="text-5xl font-bold">+{empresas}</p>
          <p className="mt-2 text-lg font-medium">Empresas Ativas</p>
        </div>
        <div>
          <p className="text-5xl font-bold">+{clientes}</p>
          <p className="mt-2 text-lg font-medium">Clientes Satisfeitos</p>
        </div>
      </div>
    </section>
  );
}
