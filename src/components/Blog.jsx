function Blog() {
    const posts = [
      {
        titulo: "Imposto de Renda: 5 erros que você deve evitar",
        resumo: "Veja quais são os erros mais comuns cometidos ao declarar o IRPF e como evitá-los.",
        data: "12/04/2025",
      },
      {
        titulo: "Contabilidade consultiva: como funciona e por que contratar",
        resumo: "Entenda como a contabilidade deixou de ser apenas fiscal para se tornar estratégica.",
        data: "30/03/2025",
      },
      {
        titulo: "MEI e obrigações fiscais: o que você precisa saber",
        resumo: "Se você é Microempreendedor Individual, esses pontos precisam estar no seu radar.",
        data: "10/03/2025",
      },
    ];
  
    return (
    <>
      <section id="blog" className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Conteúdo e Dicas</h2>
  
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 border-l-4 border-orange-500"
            data-aos="zoom-in"
            data-aos-delay={index * 150}
            data-aos-duration="1000"
          >
            <p className="text-xs text-gray-500 mb-2">{post.data}</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.titulo}</h3>
            <p className="text-sm text-gray-600">{post.resumo}</p>
          </div>
            ))}
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
  
  export default Blog;
  