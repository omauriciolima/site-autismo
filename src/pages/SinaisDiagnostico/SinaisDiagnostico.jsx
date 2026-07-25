import { Link } from 'react-router-dom'
import Section from '../../components/Section/Section.jsx'
import Card from '../../components/Card/Card.jsx'
import styles from './SinaisDiagnostico.module.css'

// Sinais de alerta observados com mais frequência em cada faixa etária.
// Nenhum sinal isolado "fecha" diagnóstico — o conjunto é o que importa.
const faixasEtarias = [
  {
    icone: '👶',
    faixa: '0 a 2 anos',
    cor: 'var(--cor-primaria)',
    intro: 'Nos primeiros anos, os sinais costumam aparecer na comunicação e no contato social.',
    sinais: [
      'Pouco contato visual ou pouca resposta ao ouvir o próprio nome',
      'Não aponta para mostrar interesse em algo (por volta dos 12–14 meses)',
      'Poucos sorrisos ou expressões compartilhadas com o cuidador',
      'Atraso no balbucio ou no aparecimento das primeiras palavras',
      'Pouco interesse em brincadeiras de interação, como "cadê-achou"',
      'Reações muito intensas — ou quase ausentes — a sons, luzes ou texturas',
    ],
  },
  {
    icone: '🧒',
    faixa: '2 a 5 anos',
    cor: 'var(--cor-secundaria)',
    intro: 'Na primeira infância, é comum notar diferenças na fala, na brincadeira e nas rotinas.',
    sinais: [
      'Atraso na fala ou repetição de frases e falas ouvidas (ecolalia)',
      'Dificuldade em brincar de faz de conta ou dividir brincadeiras com outras crianças',
      'Preferência forte por rotinas fixas, com grande desconforto diante de mudanças',
      'Interesses muito intensos e específicos (números, dinossauros, rodas, entre outros)',
      'Movimentos repetitivos, como balançar o corpo, girar objetos ou andar na ponta dos pés',
      'Dificuldade em entender ou usar gestos, como acenar ou apontar',
    ],
  },
  {
    icone: '🧑',
    faixa: 'Acima de 5 anos',
    cor: 'var(--cor-terciaria)',
    intro: 'Em crianças maiores e adolescentes, os sinais aparecem mais na vida social e escolar.',
    sinais: [
      'Dificuldade em fazer e manter amizades, ou em entender "regras sociais" não ditas',
      'Interpretação muito literal de frases, com dificuldade em captar ironia ou sarcasmo',
      'Grande desconforto com imprevistos ou mudanças repentinas de planos',
      'Foco intenso em temas de interesse, às vezes falando bastante sobre eles',
      'Sensibilidade a estímulos do ambiente, como roupas, barulho da sala de aula ou luz',
      'Em meninas, os sinais podem ser mais sutis e "mascarados" socialmente, dificultando a percepção',
    ],
  },
]

// Etapas do processo de diagnóstico do TEA no Brasil
const etapasDiagnostico = [
  {
    icone: '👀',
    titulo: 'Observação e relato',
    descricao:
      'Pais, professores ou o próprio cuidador notam sinais no dia a dia e buscam uma primeira avaliação com o pediatra ou clínico geral.',
  },
  {
    icone: '🧠',
    titulo: 'Avaliação multidisciplinar',
    descricao:
      'Profissionais como neurologista, psiquiatra e psicólogo avaliam juntos o desenvolvimento, a comunicação e o comportamento.',
  },
  {
    icone: '📋',
    titulo: 'Instrumentos e critérios',
    descricao:
      'São usados questionários e escalas (como M-CHAT e ADOS-2) e os critérios do manual diagnóstico (DSM-5), sempre interpretados por profissionais.',
  },
  {
    icone: '📄',
    titulo: 'Laudo e plano de apoio',
    descricao:
      'Com o diagnóstico fechado, é emitido um laudo e a família recebe orientações sobre terapias e apoios disponíveis.',
  },
]

// Profissionais que costumam fazer parte do processo de avaliação e acompanhamento
const profissionais = [
  {
    icone: '🩺',
    titulo: 'Pediatra',
    descricao: 'Geralmente o primeiro contato; identifica sinais no acompanhamento de rotina e encaminha para especialistas.',
  },
  {
    icone: '🧠',
    titulo: 'Neurologista ou neuropediatra',
    descricao: 'Avalia o desenvolvimento neurológico e ajuda a descartar outras condições com sinais parecidos.',
  },
  {
    icone: '🧑‍⚕️',
    titulo: 'Psiquiatra infantil',
    descricao: 'Pode confirmar o diagnóstico e orientar sobre acompanhamento medicamentoso, quando necessário.',
  },
  {
    icone: '🧩',
    titulo: 'Psicólogo',
    descricao: 'Realiza avaliações comportamentais e acompanha o desenvolvimento emocional e social ao longo do tempo.',
  },
  {
    icone: '🗣️',
    titulo: 'Fonoaudiólogo',
    descricao: 'Avalia e apoia o desenvolvimento da comunicação, da linguagem e, quando preciso, da fala.',
  },
  {
    icone: '🖐️',
    titulo: 'Terapeuta ocupacional',
    descricao: 'Trabalha a integração sensorial, a coordenação motora e as habilidades para o dia a dia.',
  },
]

/**
 * Página "Sinais e Diagnóstico": apresenta sinais de alerta por faixa etária,
 * explica como funciona o processo de diagnóstico no Brasil e orienta sobre
 * quais profissionais procurar.
 */
function SinaisDiagnostico() {
  return (
    <main>
      {/* Hero da página */}
      <section className={styles.hero} aria-labelledby="hero-titulo">
        <div className={`container ${styles.heroConteudo}`}>
          <div className={styles.heroColunaTexto}>
            <h1 id="hero-titulo" className={styles.heroTitulo}>
              Sinais e Diagnóstico
            </h1>
            <p className={styles.heroTexto}>
              Observar sinais com atenção e buscar uma avaliação profissional são os
              primeiros passos para oferecer o apoio certo, no momento certo.
            </p>
          </div>
          <div className={styles.heroImagem}>
            <img
              src="/imagens/Learning-cuate.png"
              alt="Ilustração de uma pessoa aprendendo e observando, representando a identificação de sinais e o processo de diagnóstico."
              width="420"
              height="320"
            />
          </div>
        </div>
      </section>

      {/* Aviso importante logo no início */}
      <Section fundo="suave">
        <div className={styles.avisoDestaque}>
          <span className={styles.avisoIcone} aria-hidden="true">
            ⚠️
          </span>
          <p>
            Este conteúdo tem caráter educativo e não substitui avaliação profissional.
            Apenas médicos e especialistas qualificados podem confirmar um diagnóstico de
            TEA. Se você identificar sinais, o próximo passo é buscar uma avaliação
            especializada — quanto antes, melhor.
          </p>
        </div>
      </Section>

      {/* Sinais por faixa etária */}
      <Section
        titulo="Sinais de alerta por faixa etária"
        subtitulo="Cada criança se desenvolve no seu próprio ritmo. Os sinais abaixo são pontos de atenção, não um diagnóstico — o que importa é observar o conjunto ao longo do tempo."
        fundo="branco"
      >
        <div className={styles.gradeFaixas}>
          {faixasEtarias.map((item) => (
            <article
              className={styles.cardFaixa}
              key={item.faixa}
              style={{ borderTopColor: item.cor }}
            >
              <span className={styles.cardFaixaIcone} aria-hidden="true">
                {item.icone}
              </span>
              <h3 className={styles.cardFaixaTitulo}>{item.faixa}</h3>
              <p className={styles.cardFaixaIntro}>{item.intro}</p>
              <ul className={styles.listaSinais}>
                {item.sinais.map((sinal) => (
                  <li key={sinal}>{sinal}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className={styles.destaque}>
          <span className={styles.destaqueIcone} aria-hidden="true">
            💡
          </span>
          <p>
            Um sinal isolado não significa autismo. O que importa é o conjunto de sinais
            e como eles afetam o dia a dia da pessoa. Só um profissional especializado
            pode confirmar um diagnóstico.
          </p>
        </div>
      </Section>

      {/* Como funciona o diagnóstico no Brasil */}
      <Section
        titulo="Como funciona o diagnóstico no Brasil"
        subtitulo="O caminho costuma seguir estas etapas gerais — a ordem e o tempo podem variar de acordo com a cidade, o serviço de saúde e a disponibilidade de especialistas."
        fundo="suave"
      >
        <div className={styles.gradeEtapas}>
          {etapasDiagnostico.map((etapa, indice) => (
            <Card
              key={etapa.titulo}
              icone={etapa.icone}
              titulo={`${indice + 1}. ${etapa.titulo}`}
              descricao={etapa.descricao}
              corDestaque="var(--cor-primaria)"
            />
          ))}
        </div>
      </Section>

      {/* Quais profissionais procurar */}
      <Section
        titulo="Quais profissionais procurar"
        subtitulo="O diagnóstico e o acompanhamento do TEA costumam envolver uma equipe, não um profissional isolado."
        fundo="branco"
      >
        <div className={styles.gradeProfissionais}>
          {profissionais.map((profissional) => (
            <Card
              key={profissional.titulo}
              icone={profissional.icone}
              titulo={profissional.titulo}
              descricao={profissional.descricao}
              corDestaque="var(--cor-terciaria)"
            />
          ))}
        </div>
      </Section>

      {/* O que esperar do processo */}
      <Section titulo="O que esperar do processo" fundo="primaria">
        <div className={styles.blocoFinal}>
          <p>
            O caminho até o diagnóstico pode envolver mais de uma consulta, questionários
            para os pais responderem e a observação da criança em diferentes situações.
            Isso é normal — o diagnóstico do TEA raramente vem de uma única consulta
            rápida.
          </p>
          <div className={styles.destaqueClaro}>
            <span className={styles.destaqueIcone} aria-hidden="true">
              🔬
            </span>
            <p>
              Não existe exame de sangue ou de imagem que diagnostique o autismo. A
              avaliação é clínica, feita por profissionais capacitados, observando o
              desenvolvimento e o comportamento ao longo do tempo.
            </p>
          </div>
          <p className={styles.cta}>
            Recebeu o diagnóstico e não sabe por onde começar?{' '}
            <Link to="/para-familias" className={styles.ctaLink}>
              Veja como apoiar sua família no dia a dia →
            </Link>
          </p>
        </div>
      </Section>
    </main>
  )
}

export default SinaisDiagnostico
