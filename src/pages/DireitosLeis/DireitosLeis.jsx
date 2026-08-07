import { Link } from 'react-router-dom'
import {
  Scroll,
  IdCard,
  Backpack,
  NotebookPen,
  ClipboardList,
  GraduationCap,
  Coins,
  BarChart3,
  Landmark,
  Wrench,
  Scale,
  Hospital,
  FileText,
  Pill,
  TriangleAlert,
  Lightbulb,
} from 'lucide-react'
import PageHero from '../../components/PageHero/PageHero.jsx'
import Section from '../../components/Section/Section.jsx'
import Card from '../../components/Card/Card.jsx'
import Callout from '../../components/Callout/Callout.jsx'
import styles from './DireitosLeis.module.css'

// As duas leis federais mais importantes para pessoas com TEA no Brasil
const leis = [
  {
    icone: Scroll,
    titulo: 'Lei Berenice Piana',
    subtitulo: 'Lei nº 12.764/2012',
    cor: 'var(--cor-primaria)',
    intro:
      'Instituiu a Política Nacional de Proteção dos Direitos da Pessoa com Transtorno do Espectro Autista — a base legal que sustenta a maior parte dos direitos descritos nesta página.',
    pontos: [
      'A pessoa com TEA é considerada pessoa com deficiência para todos os efeitos legais',
      'Garante diagnóstico precoce e atendimento multiprofissional pelo SUS',
      'Assegura acesso à educação e ao ensino profissionalizante',
      'Incentiva a inserção no mercado de trabalho',
      'Recusar a matrícula de um aluno por causa do diagnóstico é crime, sujeito a multa',
    ],
  },
  {
    icone: IdCard,
    titulo: 'Lei Romeo Mion',
    subtitulo: 'Lei nº 13.977/2020 — Carteira CIPTEA',
    cor: 'var(--cor-secundaria)',
    intro:
      'Criou a Carteira de Identificação da Pessoa com Transtorno do Espectro Autista (CIPTEA), um documento gratuito que facilita o reconhecimento da condição no dia a dia.',
    pontos: [
      'Evita a necessidade de apresentar laudos médicos a todo momento',
      'Facilita o atendimento prioritário em bancos, comércios e órgãos públicos',
      'É emitida pelos governos estaduais, geralmente por meio de solicitação online',
      'Costuma exigir laudo médico e documentos pessoais para o cadastro',
    ],
  },
]

// Direitos garantidos no ambiente escolar
const direitosEscola = [
  {
    icone: Backpack,
    titulo: 'Matrícula garantida',
    descricao: 'Escolas públicas ou particulares não podem recusar a matrícula por causa do diagnóstico — recusar é crime.',
  },
  {
    icone: NotebookPen,
    titulo: 'Atendimento Educacional Especializado',
    descricao: 'Direito a suporte pedagógico complementar, geralmente oferecido na sala de recursos multifuncionais.',
  },
  {
    icone: ClipboardList,
    titulo: 'Plano Educacional Individualizado',
    descricao: 'Adaptação de atividades, materiais e avaliações às necessidades específicas de cada aluno.',
  },
  {
    icone: GraduationCap,
    titulo: 'Profissional de apoio',
    descricao: 'Quando necessário, a escola deve oferecer um mediador ou cuidador especializado para acompanhar o aluno.',
  },
  {
    icone: Coins,
    titulo: 'Sem cobrança extra',
    descricao: 'Escolas particulares não podem cobrar valores adicionais pelas adaptações exigidas por lei.',
  },
]

// Direitos garantidos no ambiente de trabalho
const direitosTrabalho = [
  {
    icone: BarChart3,
    titulo: 'Lei de Cotas',
    descricao: 'Empresas com 100 ou mais funcionários devem reservar parte das vagas para pessoas com deficiência, incluindo pessoas com TEA.',
  },
  {
    icone: Landmark,
    titulo: 'Concursos públicos',
    descricao: 'Editais devem reservar um percentual de vagas para candidatos com deficiência, incluindo pessoas com TEA.',
  },
  {
    icone: Wrench,
    titulo: 'Adaptações razoáveis',
    descricao: 'O empregador deve oferecer ajustes no ambiente e na rotina de trabalho quando forem necessários.',
  },
  {
    icone: Scale,
    titulo: 'Proteção contra discriminação',
    descricao: 'Recusar contratação, promoção ou demitir alguém apenas por causa do diagnóstico fere a legislação.',
  },
]

// Direitos relacionados à saúde: SUS e planos de saúde
const direitosSaude = [
  {
    icone: Hospital,
    titulo: 'SUS',
    descricao: 'Garante atendimento multiprofissional — fonoaudiologia, terapia ocupacional, psicologia e outros — por meio de CAPS, UBS e serviços especializados da rede pública.',
  },
  {
    icone: FileText,
    titulo: 'Planos de saúde',
    descricao: 'Seguindo as diretrizes da ANS, os planos devem cobrir as terapias indicadas para o TEA, prescritas por profissional habilitado.',
  },
  {
    icone: Pill,
    titulo: 'Medicamentos e insumos',
    descricao: 'Quando prescritos, alguns medicamentos e insumos podem ser fornecidos gratuitamente pelo SUS, conforme protocolos clínicos.',
  },
]

/**
 * Página "Direitos e Leis": apresenta as principais leis brasileiras de
 * proteção às pessoas com TEA e os direitos garantidos na escola, no
 * trabalho, no SUS e nos planos de saúde.
 */
function DireitosLeis() {
  return (
    <main>
      <PageHero
        titulo="Direitos e Leis"
        subtitulo="Conhecer a legislação é um passo importante para garantir que os direitos das pessoas com TEA sejam respeitados na escola, no trabalho e na saúde."
        gradiente="gradientePrimariaPrimariaEscura"
      />

      {/* Aviso importante */}
      <Section fundo="suave">
        <Callout variante="aviso" icone={TriangleAlert}>
          Este conteúdo tem caráter educativo e informativo, não substitui orientação
          jurídica. Leis e regulamentações podem mudar ou variar conforme o estado — em
          caso de dúvida sobre uma situação específica, procure um advogado ou a
          Defensoria Pública.
        </Callout>
      </Section>

      {/* Principais leis */}
      <Section
        titulo="As principais leis para pessoas com TEA"
        subtitulo="Duas leis federais formam a base da proteção legal às pessoas com autismo no Brasil."
        fundo="branco"
      >
        <div className={styles.gradeLeis}>
          {leis.map((lei) => (
            <Card key={lei.titulo} icone={lei.icone} titulo={lei.titulo} corDestaque={lei.cor} tamanho="grande">
              <p className={styles.cardLeiSubtitulo}>{lei.subtitulo}</p>
              <p className={styles.cardLeiIntro}>{lei.intro}</p>
              <ul className={styles.listaPontos}>
                {lei.pontos.map((ponto) => (
                  <li key={ponto}>{ponto}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Direitos na escola */}
      <Section
        titulo="Direitos na escola"
        subtitulo="A inclusão escolar é um direito garantido por lei, em escolas públicas e privadas."
        fundo="suave"
      >
        <div className={styles.gradeCards}>
          {direitosEscola.map((direito) => (
            <Card
              key={direito.titulo}
              icone={direito.icone}
              titulo={direito.titulo}
              descricao={direito.descricao}
              corDestaque="var(--cor-primaria)"
            />
          ))}
        </div>
      </Section>

      {/* Direitos no trabalho */}
      <Section
        titulo="Direitos no trabalho"
        subtitulo="Pessoas com TEA têm os mesmos direitos trabalhistas garantidos às pessoas com deficiência."
        fundo="branco"
      >
        <div className={styles.gradeCards}>
          {direitosTrabalho.map((direito) => (
            <Card
              key={direito.titulo}
              icone={direito.icone}
              titulo={direito.titulo}
              descricao={direito.descricao}
              corDestaque="var(--cor-secundaria)"
            />
          ))}
        </div>
      </Section>

      {/* Direitos no SUS e em planos de saúde */}
      <Section
        titulo="Direitos no SUS e em planos de saúde"
        subtitulo="O acesso ao tratamento é um direito, seja pela rede pública, seja pela rede privada."
        fundo="suave"
      >
        <div className={styles.gradeCards}>
          {direitosSaude.map((direito) => (
            <Card
              key={direito.titulo}
              icone={direito.icone}
              titulo={direito.titulo}
              descricao={direito.descricao}
              corDestaque="var(--cor-terciaria)"
            />
          ))}
        </div>
        <Callout variante="destaque" icone={Lightbulb} espacoExtra>
          As regras podem mudar e variam conforme o plano e a operadora. Em caso de
          negativa de cobertura, vale registrar reclamação na ANS e buscar orientação
          jurídica.
        </Callout>
      </Section>

      {/* O que fazer se um direito for negado */}
      <Section titulo="O que fazer se um direito for negado" fundo="primaria">
        <div className={styles.blocoFinal}>
          <p>
            Infelizmente, nem sempre os direitos são respeitados de primeira. Saber a quem
            recorrer facilita a resolução do problema.
          </p>
          <ul className={styles.listaClara}>
            <li>Peça a recusa por escrito, sempre que possível</li>
            <li>Para questões escolares, procure o Conselho Tutelar, a Secretaria de Educação ou o Ministério Público</li>
            <li>Para questões de planos de saúde, registre reclamação na ANS e no Procon</li>
            <li>Para orientação jurídica gratuita, procure a Defensoria Pública do seu estado</li>
          </ul>
          <p className={styles.cta}>
            Conhecer seus direitos é um passo importante para enfrentar o preconceito.{' '}
            <Link to="/preconceito-e-inclusao" className={styles.ctaLink}>
              Veja como →
            </Link>
          </p>
        </div>
      </Section>
    </main>
  )
}

export default DireitosLeis
