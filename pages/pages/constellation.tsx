import { motion } from "framer-motion";

export default function ConstellationLandingPage() {
  return (
    <motion.div
      className="bg-black text-white px-6 py-12 space-y-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Hero */}
      <motion.section
        className="text-center space-y-4"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-white">CONSTELLATION — Onde a Tecnologia Encontra a Sua Verdade</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Em 2 dias, alinhe sua essência com a inovação e saia com um plano real para liderar com autenticidade, alto impacto e inteligência artificial aplicada.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://sis39334.forms.app/constellation-2"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-pink-600 hover:bg-pink-700 transition px-6 py-3 rounded-2xl text-white font-semibold"
        >
          Aplicar agora
        </motion.a>
      </motion.section>

      {/* Sessões */}
      <ContentBlock title="A DIVISÃO INVISÍVEL" text="Você sente que precisa escolher entre duas forças: Ser profundamente autêntico. Ou tecnologicamente eficiente. Mas e se essa escolha estiver errada? A verdade é: a nova liderança une." />
      <ContentBlock title="A TENSÃO QUE VOCÊ VIVE (E NEM SEMPRE CONSEGUE NOMEAR)" text="Quando você usa IA ou ferramentas avançadas, os resultados são bons… mas sem alma. Quando segue apenas sua intuição, falta estrutura, método, escala. Você quer crescer, mas não quer se perder no processo. Constellation não é sobre escolher um lado. É sobre criar um novo modelo, onde tecnologia amplifica sua autenticidade." />
      <ContentBlock title="A DOR SILENCIOSA DOS VISIONÁRIOS" text="Você é reconhecido. Já construiu algo relevante. Mas algo dentro de você sussurra: 'Isso tudo ainda tem a ver comigo?' 'Tô crescendo... mas tô feliz de verdade?' 'Se eu continuar nesse ritmo, onde vou parar?'" />
      <ContentBlock title="UMA NOVA POSSIBILIDADE" text="Existe um lugar onde IA e sabedoria ancestral caminham juntas. Onde resultados não são um oposto da espiritualidade. Onde você não precisa mais vestir uma máscara para liderar. Esse lugar é o Constellation." />
      <ContentBlock title="O QUE VOCÊ VAI VIVER" text="Durante 2 dias presenciais, você vai:\n- Reconectar com sua verdade interior (sem clichê, com estrutura).\n- Aprender a usar IA como aliada estratégica, ética e personalizada.\n- Criar um plano de ação sob medida para sua liderança e visão.\n- Entrar em um campo de alta performance, com clareza emocional." />
      <ContentBlock title="PARA QUEM É" text="Líderes, empreendedores, estrategistas ou mentores com visão. Que já venceram o básico e querem criar algo 10x maior. Que desejam integrar alma e inovação com sofisticação." />
      <ContentBlock title="O QUE VOCÊ RECEBE" text="\nInteligência Ancestral:\n- Práticas milenares para fortalecer sua essência e liderança.\n- Ensinamentos profundos com aplicação real no cotidiano.\n\nInteligência Artificial:\n- Treinamento em ferramentas de IA que impulsionam sua atuação.\n- Orientação estratégica para integrar tecnologia ao seu plano de ação.\n\nMapa de Integração:\n- Um plano completo para alinhar quem você é ao que você faz.\n- Sem deixar nenhuma parte sua para trás." />
      <ContentBlock title="O FECHAMENTO" text="O futuro não vai esperar você se alinhar. Mas você pode criar um futuro alinhado com quem você é. CONSTELLATION é a imersão onde você reconecta alma e inovação, cria seu novo plano de liderança e sai pronto para jogar um jogo só seu.\n\n🚀 Próxima turma: São Paulo (datas limitadas)\n🔗 Clique aqui para aplicar e solicitar sua vaga" />

      {/* Galeria de Imagens */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-4">Imersões anteriores</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <motion.img src="/images/constellation1.jpg" alt="Vista ao pôr do sol com cadeiras" className="rounded-xl" whileHover={{ scale: 1.03 }} />
          <motion.img src="/images/constellation2.jpg" alt="Sala de meditação com cadeiras" className="rounded-xl" whileHover={{ scale: 1.03 }} />
          <motion.img src="/images/constellation3.jpg" alt="Vista do lago com participante" className="rounded-xl" whileHover={{ scale: 1.03 }} />
        </div>
      </motion.section>

      {/* Depoimentos */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-4">O que dizem os participantes</h2>
        <div className="space-y-4">
          <blockquote className="bg-gray-900 p-4 rounded-xl border-l-4 border-pink-500">
            "Constellation mudou tudo para mim — alinhei minha visão com ferramentas reais."
          </blockquote>
        </div>
      </motion.section>

      {/* Local e datas */}
      <motion.section
        className="text-center pt-10"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-lg font-medium">📍 São Paulo</p>
        <p className="text-pink-400 font-bold">Datas limitadas — garanta sua vaga</p>
      </motion.section>
    </motion.div>
  );
}

// ⬇️ ESTA FUNÇÃO DEVE FICAR FORA da função principal
function ContentBlock({ title, text }: { title: string; text: string }) {
  return (
    <motion.section
      className="space-y-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl text-white font-semibold border-l-4 border-pink-500 pl-3">{title}</h2>
      <p className="text-gray-300 whitespace-pre-line">{text}</p>
    </motion.section>
  );
}

