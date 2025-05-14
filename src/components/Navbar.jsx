import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'


function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hero = document.querySelector('#hero');

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (hero) observer.observe(hero);

    return () => {
      if (hero) observer.unobserve(hero);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-700 ease-in-out ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <div className="flex items-center gap-2">
      <img
        src="/logo.png"
        alt="Logo Aruveel"
        className="h-12 md:h-14 object-contain"
        style={{ maxWidth: '160px' }}
      />
      <span className={`text-2xl font-bold ${scrolled ? 'text-orange-500' : 'text-white'}`}>
        Aruveel
      </span>
    </div>

    {/* Botão Mobile */}
    <button
      className={`md:hidden z-50 ${scrolled ? 'text-orange-500' : 'text-white'}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
    </button>

    {/* Menu Desktop */}
    <nav className={`hidden md:flex gap-6 text-sm font-medium ${scrolled ? 'text-gray-800' : 'text-white'}`}>
      <a href="#servicos" className="hover:text-orange-500 transition">Serviços</a>
      <a href="#sobre" className="hover:text-orange-500 transition">Sobre</a>
      <a href="#blog" className="hover:text-orange-500 transition">Blog</a>
      <a href="#contato" className="hover:text-orange-500 transition">Contato</a>
    </nav>
  </div>

  {/* Menu Mobile */}
  <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 text-lg font-semibold text-gray-800 transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} transform`}>
    <a href="#servicos" onClick={() => setIsOpen(false)}>Serviços</a>
    <a href="#sobre" onClick={() => setIsOpen(false)}>Sobre</a>
    <a href="#blog" onClick={() => setIsOpen(false)}>Blog</a>
    <a href="#contato" onClick={() => setIsOpen(false)}>Contato</a>
  </div>
</header>
  );
}

export default Navbar;
