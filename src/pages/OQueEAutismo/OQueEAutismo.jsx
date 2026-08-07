import { Link } from 'react-router-dom'
import { MessageCircle, Handshake, Repeat, Volume2, Lightbulb, X, Check } from 'lucide-react'
import PageHero from '../../components/PageHero/PageHero.jsx'
import Section from '../../components/Section/Section.jsx'
import Card from '../../components/Card/Card.jsx'
import Callout from '../../components/Callout/Callout.jsx'
import styles from './OQueEAutismo.module.css'

// Áreas em que o autismo pode se manifestar de forma diferente em cada pessoa
const areasDoEspectro = [
  {
    icone: MessageCircle,
    titulo: 'Comunicação',
    descricao:
      'Algumas pessoas autistas falam pouco ou não falam; outras conversam muito, mas têm dificuldade em compreender ironias, expressões figuradas ou "regras" não ditas da conversa.',
  },
  {
    icone: Handshake,
    titulo: 'Interações sociais',
    descricao:
      'O jeito de se relacionar pode variar bastante: desde preferir ficar mais sozinho até desejar muito fazer amizades, mas sentir dificuldade em saber como se aproximar.',
  },
  {
    icone: Repeat,
    titulo: 'Rotinas e interesses',
    descricao:
      'É comum haver interesses muito intensos por temas específicos e preferência por rotinas previsíveis — mudanças repentinas podem gerar bastante desconforto.',
  },
  {
    icone: Volume2,
    titulo: 'Sensibilidade sensorial',
    descricao:
      'Sons, luzes, texturas ou cheiros podem ser sentidos de forma mais intensa (ou menos intensa) do que o comum, afetando o conforto no dia a dia.',
  },
]

// Pares de mito x verdade para desfazer ideias equivocadas comuns sobre o TEA
const mitosEVerdades = [
  {
    mito: 'Toda pessoa autista é igual.',
    verdade:
      'Cada pessoa autista tem seu próprio conjunto de características, habilidades e desafios — por isso se fala em "espectro".',
  },
  {
    mito: 'Autismo é causado por vacinas.',
    verdade:
      'Não existe nenhuma evidência científica que relacione vacinas ao autismo. O TEA tem origem genética e neurológica.',
  },
  {
    mito: 'Pessoas autistas não sentem ou não querem afeto.',
    verdade:
      'Pessoas autistas sentem e desejam afeto, mas podem expressá-lo e recebê-lo de formas diferentes do que se espera socialmente.',
  },
  {
    mito: 'Autismo é "coisa de criança" e passa quando cresce.',
    verdade:
      'O autismo acompanha a pessoa por toda a vida. Com apoio adequado, o que muda é a forma como cada um aprende a lidar com seus desafios.',
  },
  {
    mito: 'Todo autista tem uma habilidade excepcional, como se vê em filmes.',
    verdade:
      'Algumas pessoas autistas têm habilidades notáveis em áreas específicas, mas isso não é uma regra — cada pessoa é única, com forças e dificuldades próprias.',
  },
]

/**
 * Página "O que é Autismo": explica de forma simples o TEA, o conceito de
 * espectro, desfaz mitos comuns e reforça a importância do diagnóstico precoce.
 */
function OQueEAutismo() {
  return (
    <main>
      <PageHero
        titulo="O que é o Autismo?"
        subtitulo="Uma explicação simples sobre o Transtorno do Espectro Autista (TEA), como ele se manifesta e por que cada pessoa autista é única."
        imagem="/imagens/Autism-cuate.png"
        imagemAlt="Ilustração de uma pessoa em um ambiente acolhedor, representando o universo do Autismo."
        gradiente="gradientePrimariaSecundariaEscura"
      />

      {/* Entendendo o TEA */}
      <Section titulo="Entendendo o TEA" fundo="branco">
        <div className={styles.blocoTexto}>
          <p>
            O <strong>Transtorno do Espectro Autista (TEA)</strong> é uma condição do
            neurodesenvolvimento, presente desde o nascimento, que influencia a forma como
            a pessoa se comunica, interage socialmente e percebe o mundo ao seu redor.
          </p>
          <p>
            Não é uma doença, não tem "cura" e não é causado por vacinas, pelo jeito de
            criar os filhos ou por qualquer tipo de culpa dos pais. É uma diferença no
            desenvolvimento do cérebro que acompanha a pessoa por toda a vida.
          </p>
          <Callout variante="aviso" icone={Lightbulb}>
            TEA não é sinônimo de deficiência intelectual. Muitas pessoas autistas têm
            inteligência típica, ou até acima da média — o autismo afeta principalmente
            a comunicação e a interação social, não a capacidade de pensar.
          </Callout>
        </div>
      </Section>

      {/* Por que se chama espectro */}
      <Section
        titulo="Por que se chama 'espectro'?"
        subtitulo="A palavra espectro existe porque o autismo não aparece do mesmo jeito em duas pessoas. Cada uma vive o TEA à sua maneira, com intensidades diferentes nas mesmas áreas gerais."
        fundo="suave"
      >
        <div className={styles.gradeAreas}>
          {areasDoEspectro.map((area) => (
            <Card
              key={area.titulo}
              icone={area.icone}
              titulo={area.titulo}
              descricao={area.descricao}
              corDestaque="var(--cor-primaria)"
            />
          ))}
        </div>
      </Section>

      {/* Mitos e verdades */}
      <Section
        titulo="Mitos e verdades sobre o Autismo"
        subtitulo="Muita gente ainda acredita em ideias erradas sobre o TEA. Vamos esclarecer algumas das mais comuns."
        fundo="branco"
      >
        <div className={styles.listaMitos}>
          {mitosEVerdades.map((item) => (
            <article className={styles.itemMito} key={item.mito}>
              <p className={styles.linhaMito}>
                <X aria-hidden="true" size={20} />
                <span>
                  <strong>Mito:</strong> {item.mito}
                </span>
              </p>
              <p className={styles.linhaVerdade}>
                <Check aria-hidden="true" size={20} />
                <span>
                  <strong>Verdade:</strong> {item.verdade}
                </span>
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* Importância do diagnóstico precoce */}
      <Section titulo="Por que o diagnóstico precoce importa" fundo="primaria">
        <div className={styles.blocoDiagnostico}>
          <p>
            Quanto mais cedo o autismo é identificado, mais cedo a criança pode receber
            acompanhamento adequado — o que faz uma diferença enorme no desenvolvimento da
            comunicação, da autonomia e da qualidade de vida.
          </p>
          <Callout variante="claro" icone={Lightbulb}>
            O diagnóstico precoce não é sobre "rotular" a criança, mas sobre abrir
            portas: acesso a terapias, direitos garantidos por lei e mais compreensão
            por parte da família e da escola.
          </Callout>
          <p className={styles.cta}>
            Quer saber quais sinais observar e como funciona o processo de diagnóstico?{' '}
            <Link to="/sinais-e-diagnostico" className={styles.ctaLink}>
              Veja a próxima página →
            </Link>
          </p>
        </div>
      </Section>
    </main>
  )
}

export default OQueEAutismo
