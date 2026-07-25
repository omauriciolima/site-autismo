import Section from '../../components/Section/Section.jsx'
import Card from '../../components/Card/Card.jsx'
import { paginasMenu } from '../../data/paginas'
import styles from './Home.module.css'

/**
 * Página inicial do site.
 * Estrutura: Hero de impacto -> Cards de acesso rápido -> "Por que esse site existe?"
 */
function Home() {
  return (
    <main>
      {/* Hero section */}
      <section className={styles.hero} aria-labelledby="hero-titulo">
        <div className={`container ${styles.heroConteudo}`}>
          <h1 id="hero-titulo" className={styles.heroTitulo}>
            Todo mundo merece ser compreendido.
          </h1>
          <p className={styles.heroTexto}>
            Informação clara, acolhedora e sem jargões para famílias, educadores e
            profissionais que querem entender e apoiar melhor pessoas com Autismo (TEA).
          </p>
        </div>
      </section>

      {/* Cards de acesso rápido */}
      <Section
        id="acesso-rapido"
        titulo="Explore o site"
        subtitulo="Escolha um tema para começar. Cada página foi pensada para responder às suas dúvidas com carinho e clareza."
        fundo="suave"
      >
        <div className={styles.gradeCards}>
          {paginasMenu.map((pagina) => (
            <Card
              key={pagina.caminho}
              to={pagina.caminho}
              titulo={pagina.titulo}
              descricao={pagina.descricao}
              icone={pagina.icone}
              corDestaque={pagina.cor}
            />
          ))}
        </div>
      </Section>

      {/* Por que esse site existe */}
      <Section id="por-que-existe" titulo="Por que esse site existe?" fundo="branco">
        <article className={styles.textoExplicativo}>
          <p>
            Receber informações sobre o Autismo pode ser confuso, especialmente quando os
            textos disponíveis usam uma linguagem técnica e distante. Este site nasceu do
            desejo de mudar isso: queremos que pais, mães, professores, terapeutas e
            curiosos encontrem, em um só lugar, respostas simples e verdadeiras.
          </p>
          <p>
            Não somos uma clínica, nem substituímos o acompanhamento de profissionais de
            saúde. Somos um ponto de partida acolhedor — um espaço para entender melhor o
            TEA, reconhecer sinais, conhecer direitos e, principalmente, lembrar que cada
            pessoa autista é única e merece respeito, paciência e inclusão.
          </p>
          <p>
            Se este site ajudar uma família a se sentir menos sozinha, ou um professor a
            enxergar um aluno com mais empatia, o nosso propósito já terá sido cumprido.
          </p>
        </article>
      </Section>
    </main>
  )
}

export default Home
