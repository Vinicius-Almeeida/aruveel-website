import { FaInstagram } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contato" className="pt-20 pb-10 bg-gray-800 px-6 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* COLUNA 1: Formulário */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-400">Fale Conosco</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Seu nome"
               className="w-full border border-gray-600 bg-gray-900 text-white rounded px-4 py-2"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
               className="w-full border border-gray-600 bg-gray-900 text-white rounded px-4 py-2" 
            />
            <textarea
              rows="4"
              placeholder="Sua mensagem"
               className="w-full border border-gray-600 bg-gray-900 text-white rounded px-4 py-2" 
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 text-white font-semibold px-6 py-2 rounded hover:bg-orange-600 transition"
            >
              Enviar
            </button>
          </form>
        </div>

        {/* COLUNA 2: Links úteis */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-400">Links úteis</h2>
          <ul className="space-y-3 text-white">
            <li><a href="#servicos" className="hover:underline">Serviços</a></li>
            <li><a href="#blog" className="hover:underline">Blog da Aruveel</a></li>
            <li><a href="#contato" className="hover:underline">Contato</a></li>
            <li><a href="#ir" className="hover:underline">Declaração do IR</a></li>
            <li><a
                  href="https://www.instagram.com/aruveel"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  <FaInstagram className="text-pink-500 text-lg" />
                  @aruveel no Instagram
                </a>
              </li>
          </ul>
        </div>
        {/* COLUNA 3: Contato + mapa */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-400">Endereço</h2>
          <p className="mb-2 text-white">
          Av. Atlântica, 2554 - SALA 21 – Centro<br />
            Balneário Camboriú/SC – COND. EDIFÍCIO IMPERATRIZ
          </p>
          <p className="mb-2 text-white">📞 (47) 99627-9014</p>
          <p className="mb-4 text-white">✉️ aruveel@aruveel.com.br</p>

          {/* Mapa incorporado */}
          <div className="w-full h-48 rounded-lg overflow-hidden">
            <iframe
              title="Mapa da Aruveel"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.231444606152!2d-48.63172722562854!3d-26.991227496486967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b762cb5e1cd1%3A0x567fa420c524e6e8!2sAv.%20Atl%C3%A2ntica%2C%202554%20-%20Centro%2C%20Balne%C3%A1rio%20Cambori%C3%BA%20-%20SC%2C%2088330-018!5e0!3m2!1spt-BR!2sbr!4v1747237531800!5m2!1spt-BR!2sbr"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
