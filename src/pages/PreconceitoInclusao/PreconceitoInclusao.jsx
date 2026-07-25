import { Link } from 'react-router-dom'
import Section from '../../components/Section/Section.jsx'
import Card from '../../components/Card/Card.jsx'
import styles from './PreconceitoInclusao.module.css'

// Formas comuns como o preconceito contra pessoas autistas se manifesta no dia a dia
const formasDePreconceito = [
  {
    icone: '👀',
    titulo: 'Julgamento no olhar alheio',
    descricao:
      'Estereotipias, birras sensoriais ou dificuldade de contato visual são, muitas vezes, mal interpretadas como "malcriação" ou "falta de educação".',
  },
  {
    icone: '🚫',
    titulo: 'Exclusão social',
    descricao:
      'Crianças autistas nem sempre são convidadas para festas e brincadeiras; adultos autistas enfrentam dificuldade para fazer parte de grupos sociais.',
  },
  {
    icone: '😅',
    titulo: 'Piadas e comentários depreciativos',
    descricao:
      'Expressões como "ela é meio autista", usadas de forma pejorativa, banalizam o diagnóstico e reforçam estigmas.',
  },
  {
    icone: '🏫',
    titulo: 'Barreiras veladas na escola',
    descricao:
      'Mesmo sendo ilegal, algumas escolas dificultam a matrícula ou resistem a fazer as adaptações necessárias.',
  },
  {
    icone: '💼',
    titulo: 'Barreiras no mercado de trabalho',
    descricao:
      'Preconceitos em entrevistas e a falta de adaptação no ambiente de trabalho ainda limitam oportunidades para adultos autistas.',
  },
]

// Ações práticas para combater o preconceito em dois ambientes centrais
const comoCombater = [
  {
    icone: '🏫',
    titulo: 'Na escola',
    cor: 'var(--cor-primaria)',
    acoes: [
      'Promover rodas de conversa sobre neurodiversidade com toda a turma',
      'Capacitar professores e funcionários sobre o TEA',
      'Estimular atividades de convivência entre alunos autistas e não autistas',
      'Ter uma postura ativa contra o bullying, e não apenas reativa',
    ],
  },
  {
    icone: '💼',
    titulo: 'No trabalho',
    cor: 'var(--cor-terciaria)',
    acoes: [
      'Treinar equipes de RH e lideranças sobre neurodiversidade',
      'Adaptar processos seletivos, com entrevistas mais estruturadas e objetivas',
      'Criar ambientes sensorialmente mais amigáveis (iluminação, ruído, espaços de pausa)',
      'Valorizar diferentes formas de comunicação e de produtividade',
    ],
  },
]

// Termos a evitar e alternativas mais respeitosas ao falar sobre autismo
const termosDeLinguagem = [
  {
    evitar: '"Portador de autismo" ou "sofre de autismo"',
    usar: '"Pessoa com autismo" ou "autista"',
  },
  {
    evitar: '"Doença" ou "cura"',
    usar: '"Condição" e "apoio" ou "tratamento"',
  },
  {
    evitar: '"Normal", como oposto de autista',
    usar: '"Pessoa neurotípica"',
  },
  {
    evitar: '"Ele é meio autista", usado como brincadeira',
    usar: 'Evitar minimizar o diagnóstico como traço de personalidade',
  },
]

/**
 * Página "Preconceito e Inclusão": explica como o preconceito contra pessoas
 * autistas se manifesta, seu impacto nas famílias, ações práticas de combate
 * na escola e no trabalho, linguagem respeitosa e o conceito de neurodiversidade.
 */
function PreconceitoInclusao() {
  return (
    <main>
      {/* Hero da página */}
      <section className={styles.hero} aria-labelledby="hero-titulo">
        <div className={`container ${styles.heroConteudo}`}>
          <div className={styles.heroColunaTexto}>
            <h1 id="hero-titulo" className={styles.heroTitulo}>
              Preconceito e Inclusão
            </h1>
            <p className={styles.heroTexto}>
              Entender como o preconceito se manifesta é o primeiro passo para construir
              uma sociedade mais acolhedora com as diferenças.
            </p>
          </div>
          <div className={styles.heroImagem}>
            <img
              src="/imagens/Children-bro.png"
              alt="Ilustração de crianças brincando juntas, representando a inclusão e o respeito às diferenças."
              width="420"
              height="320"
            />
          </div>
        </div>
      </section>

      {/* Acolhimento inicial */}
      <Section fundo="suave">
        <div className={styles.avisoDestaque}>
          <span className={styles.avisoIcone} aria-hidden="true">
            🌈
          </span>
          <p>
            O preconceito contra pessoas autistas ainda existe — muitas vezes de forma
            sutil, disfarçado de "opinião" ou "brincadeira". Mas a boa notícia é que
            inclusão se constrói todos os dias, com pequenas atitudes e informação.
          </p>
        </div>
      </Section>

      {/* Como o preconceito se manifesta */}
      <Section
        titulo="Como o preconceito se manifesta"
        subtitulo="Muitas vezes o preconceito não aparece de forma explícita — ele se esconde em atitudes do dia a dia."
        fundo="branco"
      >
        <div className={styles.gradeCards}>
          {formasDePreconceito.map((forma) => (
            <Card
              key={forma.titulo}
              icone={forma.icone}
              titulo={forma.titulo}
              descricao={forma.descricao}
              corDestaque="var(--cor-secundaria)"
            />
          ))}
        </div>
      </Section>

      {/* Impacto na vida das famílias */}
      <Section titulo="O impacto na vida das famílias" fundo="suave">
        <div className={styles.blocoTexto}>
          <p>
            O preconceito não atinge só a pessoa autista — ele reverbera em toda a
            família. Pais relatam evitar passeios e eventos sociais por medo de
            julgamento; irmãos podem se sentir sobrecarregados; e a criança ou adulto
            autista aprende, cedo demais, a se sentir "errado" por ser quem é.
          </p>
          <div className={styles.destaque}>
            <span className={styles.destaqueIcone} aria-hidden="true">
              💭
            </span>
            <p>
              Esse cansaço tem nome: alguns pesquisadores chamam de "estigma por
              associação" — quando a família também sofre as consequências do
              preconceito dirigido à pessoa autista.
            </p>
          </div>
        </div>
      </Section>

      {/* Como combater o preconceito */}
      <Section
        titulo="Como combater o preconceito"
        subtitulo="Pequenas mudanças de atitude, quando repetidas, transformam ambientes inteiros."
        fundo="branco"
      >
        <div className={styles.gradeComunicacao}>
          {comoCombater.map((bloco) => (
            <article
              className={styles.cardComunicacao}
              key={bloco.titulo}
              style={{ borderTopColor: bloco.cor }}
            >
              <span className={styles.cardComunicacaoIcone} aria-hidden="true">
                {bloco.icone}
              </span>
              <h3 className={styles.cardComunicacaoTitulo}>{bloco.titulo}</h3>
              <ul className={styles.listaDicas}>
                {bloco.acoes.map((acao) => (
                  <li key={acao}>{acao}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* Linguagem respeitosa */}
      <Section
        titulo="Linguagem respeitosa: como falar sobre autismo"
        subtitulo='A forma como falamos sobre o autismo importa. "Pessoa com autismo" e "autista" são duas expressões comuns — e ambas podem estar corretas, dependendo de quem você pergunta.'
        fundo="suave"
      >
        <div className={styles.gradeLinguagem}>
          <article className={styles.cardTermo} style={{ borderTopColor: 'var(--cor-primaria)' }}>
            <h3 className={styles.cardTermoTitulo}>"Pessoa com autismo"</h3>
            <p className={styles.cardTermoDescricao}>
              Linguagem centrada na pessoa: coloca o indivíduo antes da condição, para
              reforçar que o diagnóstico não define a pessoa por completo.
            </p>
          </article>
          <article className={styles.cardTermo} style={{ borderTopColor: 'var(--cor-terciaria)' }}>
            <h3 className={styles.cardTermoTitulo}>"Autista"</h3>
            <p className={styles.cardTermoDescricao}>
              Linguagem baseada na identidade: muitas pessoas autistas preferem esse
              termo por entenderem o autismo como parte inseparável de quem elas são.
            </p>
          </article>
        </div>

        <div className={styles.destaque}>
          <span className={styles.destaqueIcone} aria-hidden="true">
            💡
          </span>
          <p>
            Não existe consenso único — e está tudo bem. Quando possível, pergunte à
            própria pessoa autista (ou à família) qual termo ela prefere usar.
          </p>
        </div>

        <div className={styles.listaTermos}>
          {termosDeLinguagem.map((item) => (
            <article className={styles.itemTermo} key={item.evitar}>
              <p className={styles.linhaEvitar}>
                <span aria-hidden="true">❌</span>
                <span>{item.evitar}</span>
              </p>
              <p className={styles.linhaUsar}>
                <span aria-hidden="true">✅</span>
                <span>{item.usar}</span>
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* Neurodiversidade */}
      <Section titulo="Neurodiversidade: um novo olhar" fundo="primaria">
        <div className={styles.blocoFinal}>
          <p>
            Neurodiversidade é a ideia de que existem diferentes formas de o cérebro
            humano funcionar — e que essas diferenças, como o autismo, o TDAH ou a
            dislexia, são variações naturais, não defeitos a serem corrigidos.
          </p>
          <div className={styles.destaqueClaro}>
            <span className={styles.destaqueIcone} aria-hidden="true">
              🌱
            </span>
            <p>
              Isso não significa ignorar as dificuldades reais que muitas pessoas
              autistas enfrentam. Significa reconhecer que apoio e aceitação podem
              caminhar juntos, sem que um anule o outro.
            </p>
          </div>
          <p className={styles.cta}>
            Quer conhecer materiais, comunidades e canais de apoio?{' '}
            <Link to="/recursos-e-apoio" className={styles.ctaLink}>
              Veja Recursos e Apoio →
            </Link>
          </p>
        </div>
      </Section>
    </main>
  )
}

export default PreconceitoInclusao
