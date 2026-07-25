import styles from './Section.module.css'

/**
 * Seção reutilizável: agrupa um título e um conteúdo dentro de uma <section> semântica.
 *
 * Props:
 * - titulo: texto do título da seção (opcional — algumas seções podem não ter título visível)
 * - subtitulo: texto de apoio abaixo do título (opcional)
 * - id: usado para âncoras de navegação (ex: menu do Header)
 * - fundo: 'branco' | 'suave' | 'primaria' — controla a cor de fundo da seção
 * - children: conteúdo interno da seção
 */
function Section({ titulo, subtitulo, id, fundo = 'branco', children }) {
  return (
    <section id={id} className={`${styles.secao} ${styles[fundo] || ''}`}>
      <div className={`container ${styles.conteudo}`}>
        {titulo && <h2 className={styles.titulo}>{titulo}</h2>}
        {subtitulo && <p className={styles.subtitulo}>{subtitulo}</p>}
        {children}
      </div>
    </section>
  )
}

export default Section
