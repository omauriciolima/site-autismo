import { Link } from 'react-router-dom'
import { paginasMenu } from '../../data/paginas'
import styles from './Footer.module.css'

/**
 * Rodapé com links rápidos para todas as páginas e créditos do projeto.
 */
function Footer() {
  const anoAtual = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.conteudo}`}>
        <div className={styles.bloco}>
          <h2 className={styles.titulo}>Davi para Autistas</h2>
          <p className={styles.texto}>
            Um projeto independente, educativo e sem fins lucrativos, criado para levar
            informação clara e acolhedora sobre o Transtorno do Espectro Autista (TEA).
          </p>
        </div>

        <nav className={styles.bloco} aria-label="Links rápidos">
          <h2 className={styles.titulo}>Links rápidos</h2>
          <ul className={styles.lista}>
            {paginasMenu.map((pagina) => (
              <li key={pagina.caminho}>
                <Link to={pagina.caminho}>{pagina.titulo}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.bloco}>
          <h2 className={styles.titulo}>Aviso importante</h2>
          <p className={styles.texto}>
            Este site tem caráter informativo e educativo. Ele não substitui a avaliação,
            o diagnóstico ou o acompanhamento de profissionais de saúde qualificados.
          </p>
        </div>
      </div>

      <div className={styles.creditos}>
        <p>&copy; {anoAtual} Davi para Autistas. Projeto independente e sem fins lucrativos.</p>
      </div>
    </footer>
  )
}

export default Footer
