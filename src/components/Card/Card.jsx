import { Link } from 'react-router-dom'
import styles from './Card.module.css'

/**
 * Card reutilizável usado principalmente nos acessos rápidos da Home.
 * Se `to` for informado, o card inteiro se comporta como um link de navegação.
 *
 * Props:
 * - titulo: texto principal do card
 * - descricao: texto de apoio, curto e claro
 * - icone: emoji ou elemento usado como ilustração (decorativo)
 * - to: rota interna para navegação (opcional)
 * - corDestaque: cor da barra/ícone de destaque (opcional)
 */
function Card({ titulo, descricao, icone, to, corDestaque }) {
  const conteudo = (
    <>
      <span className={styles.icone} style={{ color: corDestaque }} aria-hidden="true">
        {icone}
      </span>
      <h3 className={styles.titulo}>{titulo}</h3>
      {descricao && <p className={styles.descricao}>{descricao}</p>}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={styles.cardLink} style={{ borderTopColor: corDestaque }}>
        {conteudo}
      </Link>
    )
  }

  return (
    <article className={styles.card} style={{ borderTopColor: corDestaque }}>
      {conteudo}
    </article>
  )
}

export default Card
