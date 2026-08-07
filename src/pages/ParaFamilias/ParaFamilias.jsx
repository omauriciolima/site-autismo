import { Link } from 'react-router-dom'
import {
  HeartHandshake,
  Folder,
  Users,
  UserCheck,
  BookOpen,
  School,
  MessageCircle,
  Hand,
  Brain,
  Target,
  Footprints,
  Music,
  ChevronRight,
  Heart,
  Lightbulb,
  Sprout,
} from 'lucide-react'
import PageHero from '../../components/PageHero/PageHero.jsx'
import Section from '../../components/Section/Section.jsx'
import Card from '../../components/Card/Card.jsx'
import Callout from '../../components/Callout/Callout.jsx'
import styles from './ParaFamilias.module.css'

// Passos que ajudam a família a se organizar logo após o diagnóstico
const primeirosPassos = [
  {
    icone: HeartHandshake,
    titulo: 'Dê tempo a você',
    descricao:
      'É normal sentir uma mistura de alívio, medo e tristeza ao mesmo tempo. Não existe jeito "certo" de sentir — permita-se viver esse momento sem culpa.',
  },
  {
    icone: Folder,
    titulo: 'Organize os documentos',
    descricao:
      'Guarde o laudo, os relatórios e as receitas em um só lugar, físico ou digital. Isso facilita encaminhamentos, matrícula escolar e acesso a direitos.',
  },
  {
    icone: Users,
    titulo: 'Busque uma rede de apoio',
    descricao:
      'Procure grupos de pais, comunidades online ou associações locais. Trocar experiências com quem já viveu isso ajuda a não se sentir sozinho.',
  },
  {
    icone: UserCheck,
    titulo: 'Monte a equipe aos poucos',
    descricao:
      'Não é preciso começar tudo de uma vez. Priorize as necessidades mais urgentes e vá incluindo terapias com calma, no ritmo da família.',
  },
  {
    icone: BookOpen,
    titulo: 'Aprenda no seu ritmo',
    descricao:
      'Existe muita informação disponível, e nem toda ela é confiável. Busque fontes sérias e vá se aprofundando aos poucos, sem se sobrecarregar.',
  },
]

// Orientações para comunicar o diagnóstico à família e à escola
const comunicacao = [
  {
    icone: Users,
    titulo: 'Para a família',
    cor: 'var(--cor-primaria)',
    dicas: [
      'Explique com calma o que é o TEA, sem pressa para que todos "entendam tudo" de uma vez',
      'Compartilhe fontes confiáveis para ajudar os familiares a se informarem por conta própria',
      'Combine, quando possível, atitudes comuns, como evitar comparações e respeitar os limites da criança',
      'Esteja aberta a dúvidas e a alguma resistência inicial — nem todo mundo vai entender de primeira, e está tudo bem',
    ],
  },
  {
    icone: School,
    titulo: 'Para a escola',
    cor: 'var(--cor-terciaria)',
    dicas: [
      'Marque uma conversa com a coordenação antes do início das aulas, sempre que possível',
      'Leve o laudo e explique as necessidades específicas da criança',
      'Peça um Plano Educacional Individualizado (PEI), quando disponível na rede de ensino',
      'Mantenha um canal aberto e constante com os professores ao longo do ano letivo',
    ],
  },
]

// Práticas que ajudam a criar uma rotina mais previsível
const dicasDeRotina = [
  'Use agendas visuais, com figuras ou fotos, para mostrar o que vai acontecer no dia',
  'Avise com antecedência sobre mudanças, como uma viagem, uma visita ou uma troca de escola',
  'Mantenha horários parecidos para dormir, comer e estudar, sempre que possível',
  'Crie pequenos "rituais de transição", como uma música ou um aviso, para preparar a troca de uma atividade para outra',
]

// Terapias e apoios profissionais mais comuns no acompanhamento do TEA
const terapias = [
  {
    icone: MessageCircle,
    titulo: 'Fonoaudiologia',
    descricao: 'Apoia o desenvolvimento da comunicação, da linguagem e, em alguns casos, da alimentação.',
  },
  {
    icone: Hand,
    titulo: 'Terapia ocupacional',
    descricao: 'Trabalha a integração sensorial, a coordenação motora e as habilidades para o dia a dia.',
  },
  {
    icone: Brain,
    titulo: 'Psicoterapia',
    descricao: 'Ajuda a criança, o adolescente ou o adulto a lidar com emoções, ansiedade e desafios sociais.',
  },
  {
    icone: Target,
    titulo: 'Análise do Comportamento Aplicada (ABA)',
    descricao: 'Usa estratégias estruturadas para ensinar novas habilidades e reduzir comportamentos que trazem prejuízo ao dia a dia.',
  },
  {
    // Ícone exclusivo (não reaproveitado) — representa movimento/coordenação
    // motora de forma mais concreta que PersonStanding, que já é usado em
    // outra página para a progressão de faixas etárias.
    icone: Footprints,
    titulo: 'Psicomotricidade',
    descricao: 'Estimula o desenvolvimento motor, o equilíbrio e a consciência corporal por meio de atividades lúdicas.',
  },
  {
    icone: Music,
    titulo: 'Musicoterapia',
    descricao: 'Usa a música como ferramenta para estimular a comunicação, a expressão emocional e a interação social.',
  },
]

/**
 * Página "Para Famílias": traz orientações práticas e acolhedoras para quem
 * acabou de receber o diagnóstico, cobrindo primeiros passos, comunicação com
 * a família e a escola, rotina, terapias disponíveis e saúde mental dos cuidadores.
 */
function ParaFamilias() {
  return (
    <main>
      <PageHero
        titulo="Para Famílias"
        subtitulo="Orientações práticas e acolhedoras para os primeiros passos, o dia a dia e o cuidado com quem cuida."
        imagem="/imagens/African-family-cuate.png"
        imagemAlt="Ilustração de uma família reunida e unida, representando o apoio familiar no dia a dia."
        gradiente="gradienteApoioEscuraPrimaria"
      />

      {/* Acolhimento inicial */}
      <Section fundo="suave">
        <Callout variante="aviso" icone={Heart}>
          Se você acabou de receber o diagnóstico, respire. Um diagnóstico de TEA não é
          uma sentença — é um mapa. Ele ajuda a entender melhor a criança (ou o adulto)
          que você ama e a encontrar o apoio certo para o caminho de vocês.
        </Callout>
      </Section>

      {/* Primeiros passos */}
      <Section
        titulo="Primeiros passos após o diagnóstico"
        subtitulo="Não é preciso resolver tudo de uma vez. Um passo de cada vez já é o suficiente."
        fundo="branco"
      >
        <div className={styles.gradeCards}>
          {primeirosPassos.map((passo) => (
            <Card
              key={passo.titulo}
              icone={passo.icone}
              titulo={passo.titulo}
              descricao={passo.descricao}
              corDestaque="var(--cor-primaria)"
            />
          ))}
        </div>
      </Section>

      {/* Como contar para a família e a escola */}
      <Section
        titulo="Como contar para a família e a escola"
        subtitulo="Cada conversa pode ser feita no seu tempo, mas algumas dicas ajudam a torná-la mais tranquila."
        fundo="suave"
      >
        <div className={styles.gradeComunicacao}>
          {comunicacao.map((bloco) => (
            <Card key={bloco.titulo} icone={bloco.icone} titulo={bloco.titulo} corDestaque={bloco.cor} tamanho="grande">
              <ul className={styles.listaDicas}>
                {bloco.dicas.map((dica) => (
                  <li key={dica}>{dica}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Rotina */}
      <Section
        titulo="Rotina: por que ela ajuda tanto"
        subtitulo="Muitas pessoas autistas se sentem mais seguras quando sabem o que esperar do dia. Uma rotina previsível reduz a ansiedade e facilita o aprendizado."
        fundo="branco"
      >
        <ul className={styles.listaRotina}>
          {dicasDeRotina.map((dica) => (
            <li key={dica}>
              <ChevronRight aria-hidden="true" size={18} />
              <span>{dica}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Terapias e apoios disponíveis */}
      <Section
        titulo="Terapias e apoios disponíveis"
        subtitulo="Cada família monta sua própria equipe de acompanhamento, de acordo com as necessidades específicas de cada pessoa."
        fundo="suave"
      >
        <div className={styles.gradeCards}>
          {terapias.map((terapia) => (
            <Card
              key={terapia.titulo}
              icone={terapia.icone}
              titulo={terapia.titulo}
              descricao={terapia.descricao}
              corDestaque="var(--cor-terciaria)"
            />
          ))}
        </div>
        <Callout variante="destaque" icone={Lightbulb} espacoExtra>
          Nem toda criança precisa de todas essas terapias. A equipe ideal deve ser
          definida junto aos profissionais que acompanham a família, de acordo com as
          necessidades de cada um.
        </Callout>
      </Section>

      {/* Cuidando de quem cuida */}
      <Section titulo="Cuidando de quem cuida" fundo="primaria">
        <div className={styles.blocoFinal}>
          <p>
            Cuidar de uma pessoa com TEA exige energia física e emocional. Cuidadores
            sobrecarregados têm mais dificuldade em oferecer o melhor apoio — por isso,
            cuidar de si também é cuidar do outro.
          </p>
          <Callout variante="claro" icone={Sprout}>
            Sinais de esgotamento, como cansaço constante, irritabilidade ou tristeza
            persistente, merecem atenção. Buscar apoio psicológico não é fraqueza — é
            parte do cuidado.
          </Callout>
          <ul className={styles.listaClara}>
            <li>Divida tarefas com outros familiares sempre que possível</li>
            <li>Aceite ajuda quando ela for oferecida</li>
            <li>Participe de grupos de apoio para pais e cuidadores</li>
            <li>Reserve, mesmo que pequenos, momentos só para você</li>
          </ul>
          <p className={styles.cta}>
            Quer conhecer os direitos garantidos por lei para a sua família?{' '}
            <Link to="/direitos-e-leis" className={styles.ctaLink}>
              Veja Direitos e Leis →
            </Link>
          </p>
        </div>
      </Section>
    </main>
  )
}

export default ParaFamilias
