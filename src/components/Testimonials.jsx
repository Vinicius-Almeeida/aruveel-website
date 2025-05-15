// src/components/Testimonials.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Testimonials.css'; // Arquivo para ajustes finos

const testimonials = [
  {
    nome: 'Fernanda Lemos',
    cidade: 'Curitiba - PR',
    texto: 'Fui atendida pelo time Aruveel e fiquei impressionada com o cuidado com os detalhes!',
    foto: '/img/avaliacao-mulher-1.jpg'
  },
  {
    nome: 'Bruno Carvalho',
    cidade: 'Rio de Janeiro - RJ',
    texto: 'Recomendo demais. Atendimento remoto, com qualidade de presencial. Top demais!',
    foto: '/img/avaliacao-homem-1.jpg'
  },
  {
    nome: 'Maria Fernandes',
    cidade: 'Balneário Camboriú - SC',
    texto: 'Equipe extremamente atenciosa. Resolveram tudo do meu condomínio em tempo recorde!',
    foto: '/img/avaliacao-mulher-2.jpg'
  },
  {
    nome: 'João Pedro',
    cidade: 'São Paulo - SP',
    texto: 'Atendimento impecável! Nota mil pra equipe da Aruveel.',
    foto: '/img/avaliacao-homem-2.jpg'
  },
  {
    nome: 'Camila Ribeiro',
    cidade: 'Vale do Itajaí - SC',
    texto: 'Recomendo de olhos fechados. Me ajudaram em cada etapa!',
    foto: '/img/avaliacao-mulher-3.jpg'
  },
  {
    nome: 'Lucas Martins',
    cidade: 'Porto Alegre - RS',
    texto: 'Ótimo custo-benefício, atendimento excelente e muito profissional.',
    foto: '/img/avaliacao-homem-3.jpg'
  },
  {
    nome: 'Beatriz Souza',
    cidade: 'Fortaleza - CE',
    texto: 'Aruveel tem um atendimento diferenciado, me senti segura do início ao fim.',
    foto: '/img/avaliacao-mulher-4.jpg'
  },
  {
    nome: 'Carlos Henrique',
    cidade: 'Florianópolis - SC',
    texto: 'Eles cuidaram da parte contábil do meu negócio como se fosse deles. Fantástico!',
    foto: '/img/avaliacao-homem-4.jpg'
  },
];

function Testimonials() {
  return (
    <section className="py-16 bg-gray-100" id="avaliacoes">
      <h2 className="text-3xl text-center font-bold text-orange-500 mb-10">
        O que dizem nossos clientes
      </h2>

      <div className="max-w-6xl mx-auto px-4">
      <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={window.innerWidth < 768 ? 1 : 3}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true} // 👈 ISSO aqui faz o carrossel girar pra sempre sem parar
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="swiper_container"
      >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="card w-[320px] min-h-[280px] bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center justify-start">
                <img
                  src={t.foto}
                  alt={t.nome}
                  className="w-20 h-20 rounded-full mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg">{t.nome}</h3>
                <p className="text-sm italic text-gray-500">{t.cidade}</p>
                <p className="text-sm mt-2">{t.texto}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
