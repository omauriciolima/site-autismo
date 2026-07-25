import { useState } from 'react'
import Section from '../../components/Section/Section.jsx'
import Card from '../../components/Card/Card.jsx'
import styles from './SobreOSite.module.css'

// Valores que orientam a construção e a manutenção do site
const valores = [
  {
    icone: '💙',
    titulo: 'Acolhimento',
    descricao: 'Cada família chega até aqui em um momento diferente. Este espaço busca acolher, não julgar.',
  },
  {
    icone: '🔍',
    titulo: 'Informação com responsabilidade',
    descricao: 'Buscamos apresentar conteúdo alinhado ao conhecimento atual, revisando e atualizando sempre que necessário.',
  },
  {
    icone: '🌈',
    titulo: 'Respeito à diversidade',
    descricao: 'Cada pessoa autista é única. Tratamos essa diversidade como algo a ser respeitado, não corrigido.',
  },
  {
    icone: '🗣️',
    titulo: 'Linguagem acessível',
    descricao: 'Evitamos jargões desnecessários. Informação de qualidade deve poder ser entendida por qualquer pessoa.',
  },
  {
    icone: '🤝',
    titulo: 'Gratuidade e independência',
    descricao: 'Este é um projeto sem fins lucrativos e sem vínculos comerciais que influenciem o conteúdo apresentado.',
  },
]

/**
 * Página "Sobre o Site": explica o propósito do projeto, seus valores, quem
 * está por trás dele, reforça o aviso educativo e convida o visitante a
 * compartilhar o site com outras pessoas.
 */
function SobreOSite() {
  const [linkCopiado, setLinkCopiado] = useState(false)

  const urlAtual = window.location.href
  const mensagemCompartilhar = 'Encontrei um site com informações acolhedoras sobre o Autismo (TEA) e achei que você poderia gostar:'

  async function copiarLink() {
    try {
      await navigator.clipboard.writeText(urlAtual)
      setLinkCopiado(true)
      setTimeout(() => setLinkCopiado(false), 2500)
    } catch {
      setLinkCopiado(false)
    }
  }

  return (
    <main>
      {/* Hero da página */}
      <section className={styles.hero} aria-labelledby="hero-titulo">
        <div className={`container ${styles.heroConteudo}`}>
          <h1 id="hero-titulo" className={styles.heroTitulo}>
            Sobre o Site
          </h1>
          <p className={styles.heroTexto}>
            Conheça o propósito, os valores e a história por trás deste projeto
            independente e educativo sobre o Autismo.
          </p>
        </div>
      </section>

      {/* Por que este site existe */}
      <Section titulo="Por que este site existe" fundo="branco">
        <div className={styles.blocoTexto}>
          <p>
            A internet está cheia de informações sobre autismo — mas nem sempre elas são
            claras, atualizadas ou acolhedoras. Muitas vezes, textos técnicos demais ou
            alarmistas demais afastam justamente quem mais precisa de uma resposta
            tranquila: pais recém-diagnosticados, professores em dúvida, profissionais em
            busca de uma linguagem melhor para conversar com as famílias.
          </p>
          <p>
            Este site nasceu da vontade de mudar isso. Acreditamos que o acesso a uma boa
            informação não deveria depender de sorte, dinheiro ou de saber por onde
            procurar. Por isso, reunimos aqui, em um só lugar e em linguagem simples,
            conteúdos sobre o que é o TEA, sinais, diagnóstico, direitos e inclusão.
          </p>
          <div className={styles.destaque}>
            <span className={styles.destaqueIcone} aria-hidden="true">
              🎯
            </span>
            <p>
              Nosso objetivo é simples: ajudar mais pessoas a entender o autismo com
              empatia, clareza e respeito.
            </p>
          </div>
        </div>
      </Section>

      {/* Nossos valores */}
      <Section
        titulo="Nossos valores"
        subtitulo="Estes são os princípios que guiam cada texto e cada decisão deste site."
        fundo="suave"
      >
        <div className={styles.gradeCards}>
          {valores.map((valor) => (
            <Card
              key={valor.titulo}
              icone={valor.icone}
              titulo={valor.titulo}
              descricao={valor.descricao}
              corDestaque="var(--cor-primaria)"
            />
          ))}
        </div>
      </Section>

      {/* Quem está por trás do projeto */}
      <Section titulo="Quem está por trás deste projeto" fundo="branco">
        <div className={styles.blocoTexto}>
          <p>
            Este site é um projeto independente, sem fins lucrativos e sem vínculo
            institucional. Ele nasceu do desejo de reunir, em um só lugar, informações
            confiáveis e acolhedoras sobre o Transtorno do Espectro Autista — pensadas
            especialmente para quem vive essa realidade de perto: famílias, educadores e
            profissionais de saúde.
          </p>
          <div className={styles.destaque}>
            <span className={styles.destaqueIcone} aria-hidden="true">
              🛠️
            </span>
            <p>
              Este espaço está sempre em construção. Sugestões, correções e vivências são
              bem-vindas — quanto mais vozes ajudarem a construir este conteúdo, mais
              completo e cuidadoso ele se torna.
            </p>
          </div>
        </div>
      </Section>

      {/* Aviso importante */}
      <Section titulo="Um aviso importante" fundo="primaria">
        <div className={styles.blocoAviso}>
          <span className={styles.destaqueIcone} aria-hidden="true">
            ⚠️
          </span>
          <p>
            Todo o conteúdo deste site tem caráter educativo e informativo. Ele não
            substitui a avaliação, o diagnóstico ou o acompanhamento de médicos,
            terapeutas e demais profissionais qualificados. Em caso de dúvida sobre uma
            situação específica, procure sempre um profissional de saúde ou jurídico
            especializado.
          </p>
        </div>
      </Section>

      {/* Compartilhe o site */}
      <Section
        titulo="Compartilhe este site"
        subtitulo="Se este conteúdo te ajudou de alguma forma, ele também pode ajudar outra família, professor ou profissional. Compartilhar é uma forma simples de espalhar acolhimento."
        fundo="suave"
      >
        <div className={styles.compartilhar}>
          <button type="button" className={styles.botaoCompartilhar} onClick={copiarLink}>
            <span aria-hidden="true">🔗</span>
            {linkCopiado ? 'Link copiado!' : 'Copiar link do site'}
          </button>

          <a
            className={styles.botaoCompartilhar}
            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${mensagemCompartilhar} ${urlAtual}`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span aria-hidden="true">💬</span>
            Compartilhar no WhatsApp
          </a>

          <a
            className={styles.botaoCompartilhar}
            href={`mailto:?subject=${encodeURIComponent('Um site que pode te ajudar a entender o Autismo')}&body=${encodeURIComponent(`${mensagemCompartilhar}\n\n${urlAtual}`)}`}
          >
            <span aria-hidden="true">✉️</span>
            Compartilhar por e-mail
          </a>
        </div>
      </Section>
    </main>
  )
}

export default SobreOSite
