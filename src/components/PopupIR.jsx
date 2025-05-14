import { useState, useEffect } from "react";

function PopupIR() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hoje = new Date();
    const fimDeMaio = new Date(hoje.getFullYear(), 4, 31); // Mês 4 = maio (0-index)

    // Exibe apenas até o final de maio
    if (hoje <= fimDeMaio) {
      const timeout = setTimeout(() => setShow(true), 500);
      return () => clearTimeout(timeout);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
      <div className="relative w-full max-w-2xl">
        {/* Caixa branca com banner */}
        <div className="bg-white rounded-xl shadow-2xl w-full">
          {/* Botão de fechar */}
          <button
            onClick={() => setShow(false)}
            className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-xl z-10"
          >
            &times;
          </button>
  
          {/* Banner */}
          <img
            src="/img/banner-ir.png"
            alt="Declaração de Imposto de Renda"
            className="w-full h-auto rounded-xl"
          />
        </div>
  
        {/* Botão fora do popup */}
        <div className="flex justify-center mt-4">
          <a
            href="https://wa.me/47996279014"    
            target="_blank"
            rel="noopener noreferrer"   
             className="relative inline-block text-white font-bold py-3 px-6 rounded-lg overflow-hidden shadow-lg bg-orange-500 hover:bg-orange-600 transition"
            >
            Clique aqui para saber mais
          </a>
        </div>
      </div>
    </div>
  );
}

export default PopupIR;
