import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Services from './components/Services';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import PopupIR from './components/PopupIR';
import NossosNumeros from './components/NossosNumeros';



function App() {
  return (
    <div className=" bg-white text-gray-900 overflow-x-hidden">
      <PopupIR />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <NossosNumeros />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
