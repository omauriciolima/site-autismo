import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero/PageHero.jsx'
import Section from '../../components/Section/Section.jsx'
import Card from '../../components/Card/Card.jsx'
import Callout from '../../components/Callout/Callout.jsx'
import styles from './RecursosApoio.module.css'

// Exemplos de organizações reconhecidas de apoio a pessoas com TEA no Brasil
const organizacoes = [
  {
    icone: '🏛️',
    titulo: 'AMA — Associação de Amigos do Autista',
    descricao:
      'Uma das organizações mais antigas do Brasil dedicadas ao autismo, com atendimento terapêutico e apoio a famílias em São Paulo.',
  },
  {
    icone: '💙',
    titulo: 'Mundo Azul',
    descricao:
      'Organização conhecida por campanhas de conscientização sobre o TEA, como as ações ligadas ao Dia Mundial de Conscientização do Autismo, em 2 de abril.',
  },
  {
    icone: '🎓',
    titulo: 'Instituto NeuroSaber',
    descricao:
      'Plataforma de cursos e conteúdos sobre neurodesenvolvimento, voltada a pais, professores e profissionais de saúde.',
  },
  {
    icone: '📍',
    titulo: 'Associações estaduais e municipais',
    descricao:
      'Muitas cidades e estados têm suas próprias associações de apoio ao autismo. Busque pelo nome da sua cidade + "associação de autismo" para encontrar a mais próxima de você.',
  },
]

// Etapas de acesso a terapias e acompanhamento pelo SUS
const etapasSUS = [
  {
    icone: '🏥',
    titulo: 'Unidade Básica de Saúde (UBS)',
    descricao: 'Costuma ser o primeiro contato: acompanha o desenvolvimento da criança e faz o encaminhamento inicial.',
  },
  {
    icone: '🧠',
    titulo: 'CAPS Infantil (CAPSi)',
    descricao: 'Serviço especializado em saúde mental infantil, com acompanhamento multiprofissional gratuito.',
  },
  {
    icone: '🦽',
    titulo: 'Centro Especializado em Reabilitação (CER)',
    descricao: 'Unidades do SUS voltadas à reabilitação, incluindo fonoaudiologia, terapia ocupacional e fisioterapia.',
  },
  {
    icone: '📞',
    titulo: 'Central de Regulação',
    descricao: 'Em muitos municípios, o encaminhamento para especialistas e terapias passa por uma central de marcação de consultas.',
  },
]

// Tipos de conteúdo online úteis para se informar sobre o TEA
const tiposDeConteudo = [
  {
    icone: '👨‍👩‍👧',
    titulo: 'Relatos de pais e mães atípicos',
    descricao: 'Compartilham vivências reais do dia a dia, o que ajuda outras famílias a se sentirem menos sozinhas.',
  },
  {
    icone: '🗣️',
    titulo: 'Autistas adultos contando suas vivências',
    descricao: 'Poucas fontes são tão valiosas quanto o relato em primeira pessoa de quem vive o espectro.',
  },
  {
    icone: '🩺',
    titulo: 'Profissionais explicando temas técnicos',
    descricao: 'Fonoaudiólogos, terapeutas ocupacionais e psicólogos que traduzem conceitos clínicos em linguagem simples.',
  },
  {
    icone: '🏫',
    titulo: 'Canais de universidades e institutos',
    descricao: 'Conteúdos com respaldo acadêmico, úteis para professores e profissionais que buscam mais profundidade.',
  },
]

// Aplicativos que costumam ajudar no dia a dia de pessoas com TEA
const aplicativos = [
  {
    icone: '💬',
    titulo: 'Livox',
    descricao: 'Aplicativo brasileiro de Comunicação Alternativa (CAA), que ajuda pessoas não verbais ou com fala reduzida a se comunicarem por meio de símbolos e voz sintetizada.',
  },
  {
    icone: '🗨️',
    titulo: 'Proloquo2Go',
    descricao: 'Aplicativo internacional de Comunicação Alternativa, um dos mais usados no mundo para apoiar a comunicação de pessoas autistas não verbais.',
  },
  {
    icone: '🗓️',
    titulo: 'Agendas visuais',
    descricao: 'Apps de agenda visual organizam a rotina em passos ilustrados, reduzindo a ansiedade diante do que vai acontecer no dia.',
  },
  {
    icone: '⏱️',
    titulo: 'Temporizadores visuais',
    descricao: 'Ajudam a criança a entender quanto tempo falta para uma atividade terminar, facilitando as transições.',
  },
]

// Livros que ajudam a entender o autismo por diferentes ângulos
const livros = [
  {
    icone: '📘',
    titulo: '"O Cérebro Autista" — Temple Grandin',
    descricao: 'Escrito por uma autista, é referência mundial ao explicar como o cérebro autista processa informações.',
  },
  {
    icone: '📗',
    titulo: '"Uma Mente Diferente" — Thomas Armstrong',
    descricao: 'Um mergulho no conceito de neurodiversidade e em como valorizar diferentes formas de pensar.',
  },
  {
    icone: '📙',
    titulo: '"Longe da Árvore" — Andrew Solomon',
    descricao: 'Obra ampla sobre famílias e diferenças significativas nos filhos, com um capítulo dedicado ao autismo.',
  },
]

/**
 * Página "Recursos e Apoio": reúne organizações, caminhos de acesso a
 * terapia pelo SUS, tipos de conteúdo online confiáveis, grupos de apoio,
 * aplicativos úteis e livros recomendados sobre o TEA.
 */
function RecursosApoio() {
  return (
    <main>
      <PageHero
        titulo="Recursos e Apoio"
        subtitulo="Uma seleção de organizações, conteúdos, aplicativos e caminhos de apoio para continuar essa jornada com mais informação e menos solidão."
        gradiente="gradienteTerciariaEscuraSecundariaEscura"
      />

      {/* Aviso importante */}
      <Section fundo="suave">
        <Callout variante="aviso" icone="⚠️">
          Esta lista é um ponto de partida, não uma indicação exaustiva nem uma
          recomendação médica. Informações de contato, serviços e disponibilidade podem
          mudar — confirme sempre diretamente com cada organização ou canal.
        </Callout>
      </Section>

      {/* Organizações de apoio */}
      <Section
        titulo="Organizações de apoio no Brasil"
        subtitulo="Exemplos de organizações reconhecidas que oferecem informação, atendimento ou apoio a famílias."
        fundo="branco"
      >
        <div className={styles.gradeCards}>
          {organizacoes.map((org) => (
            <Card
              key={org.titulo}
              icone={org.icone}
              titulo={org.titulo}
              descricao={org.descricao}
              corDestaque="var(--cor-primaria)"
            />
          ))}
        </div>
      </Section>

      {/* Terapia pelo SUS */}
      <Section
        titulo="Onde buscar terapia pelo SUS"
        subtitulo="O acesso ao tratamento gratuito costuma seguir este caminho — a ordem pode variar de acordo com o município."
        fundo="suave"
      >
        <div className={styles.gradeCards}>
          {etapasSUS.map((etapa) => (
            <Card
              key={etapa.titulo}
              icone={etapa.icone}
              titulo={etapa.titulo}
              descricao={etapa.descricao}
              corDestaque="var(--cor-terciaria)"
            />
          ))}
        </div>
        <Callout variante="destaque" icone="💡" espacoExtra>
          A fila de espera pelo SUS pode ser longa em algumas regiões. Enquanto isso,
          vale buscar apoio em ONGs, universidades com clínicas-escola — que costumam
          oferecer atendimento gratuito ou de baixo custo — e associações locais.
        </Callout>
      </Section>

      {/* Conteúdos online e grupos de apoio */}
      <Section
        titulo="Conteúdos online e grupos de apoio"
        subtitulo="Existe muito conteúdo bom sobre autismo na internet — o segredo é saber onde procurar e como avaliar a credibilidade da fonte."
        fundo="branco"
      >
        <div className={styles.gradeCards}>
          {tiposDeConteudo.map((tipo) => (
            <Card
              key={tipo.titulo}
              icone={tipo.icone}
              titulo={tipo.titulo}
              descricao={tipo.descricao}
              corDestaque="var(--cor-secundaria)"
            />
          ))}
        </div>

        <div className={styles.blocoTexto}>
          <h3 className={styles.subtituloBloco}>Grupos de apoio para pais e cuidadores</h3>
          <p>
            Trocar experiências com quem vive uma rotina parecida faz muita diferença.
            Bons lugares para procurar grupos de apoio incluem:
          </p>
          <ul className={styles.listaSimples}>
            <li>Grupos de WhatsApp ou Facebook de pais e mães atípicos da sua região</li>
            <li>Associações locais de autismo, mencionadas na seção acima</li>
            <li>CAPS Infantil e outros serviços de saúde que acompanham sua família</li>
            <li>Grupos terapêuticos oferecidos por clínicas especializadas</li>
          </ul>
        </div>

        <Callout variante="destaque" icone="🔍" espacoExtra>
          Antes de seguir uma recomendação encontrada online, verifique a formação de
          quem está falando, desconfie de promessas de "cura" e prefira fontes que
          citam evidências científicas.
        </Callout>
      </Section>

      {/* Aplicativos úteis */}
      <Section
        titulo="Aplicativos úteis"
        subtitulo="Ferramentas digitais que podem apoiar a comunicação e a organização da rotina."
        fundo="suave"
      >
        <div className={styles.gradeCards}>
          {aplicativos.map((app) => (
            <Card
              key={app.titulo}
              icone={app.icone}
              titulo={app.titulo}
              descricao={app.descricao}
              corDestaque="var(--cor-primaria)"
            />
          ))}
        </div>
      </Section>

      {/* Livros recomendados */}
      <Section
        titulo="Livros recomendados"
        subtitulo="Leituras que ajudam a entender o autismo por diferentes ângulos — científico, familiar e em primeira pessoa."
        fundo="branco"
      >
        <div className={styles.gradeCards}>
          {livros.map((livro) => (
            <Card
              key={livro.titulo}
              icone={livro.icone}
              titulo={livro.titulo}
              descricao={livro.descricao}
              corDestaque="var(--cor-terciaria)"
            />
          ))}
        </div>
      </Section>

      {/* Encerramento acolhedor */}
      <Section titulo="Você não está sozinho(a)" fundo="primaria">
        <div className={styles.blocoFinal}>
          <p>
            Buscar informação, apoio e comunidade é um ato de cuidado — com quem você ama
            e com você mesmo(a). Nenhuma família precisa caminhar sozinha nessa jornada.
          </p>
          <p className={styles.cta}>
            Quer conhecer o propósito por trás deste site?{' '}
            <Link to="/sobre-o-site" className={styles.ctaLink}>
              Veja Sobre o Site →
            </Link>
          </p>
        </div>
      </Section>
    </main>
  )
}

export default RecursosApoio
