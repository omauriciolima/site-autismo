import { Link } from 'react-router-dom'
import styles from './Card.module.css'

/* Mapeia a cor de destaque (sempre uma referência var(--cor-x), ver
   data/paginas.js e os arrays de conteúdo das páginas) para a classe
   utilitária de sombra isométrica da mesma família de cor, definida em
   index.css. Mantém a sombra coerente com o border-top que o card já
   mostra hoje. */
const CLASSE_SOMBRA_ISOMETRICA = {
  'var(--cor-primaria)': 'sombra-iso-primaria',
  'var(--cor-secundaria)': 'sombra-iso-secundaria',
  'var(--cor-terciaria)': 'sombra-iso-terciaria',
  'var(--cor-apoio)': 'sombra-iso-apoio',
  'var(--cor-roxo)': 'sombra-iso-roxo',
}

/**
 * Card reutilizável usado principalmente nos acessos rápidos da Home, mas
 * também como base para cards com conteúdo extra (listas, linhas adicionais)
 * via `children`.
 * Se `to` for informado, o card inteiro se comporta como um link de navegação.
 *
 * Props:
 * - titulo: texto principal do card
 * - descricao: texto de apoio, curto e claro (opcional)
 * - icone: emoji ou elemento usado como ilustração, decorativo (opcional —
 *   quando omitido, nenhum espaço de ícone é reservado)
 * - to: rota interna para navegação (opcional)
 * - corDestaque: cor da barra/ícone de destaque (opcional) — também define
 *   a cor da sombra isométrica do card (ver CLASSE_SOMBRA_ISOMETRICA)
 * - tamanho: 'padrao' | 'grande' — 'grande' aumenta o título (usado em cards
 *   com mais conteúdo, como listas internas)
 * - children: conteúdo extra opcional, renderizado após a descrição
 */
function Card({ titulo, descricao, icone, to, corDestaque, tamanho = 'padrao', children }) {
  const classeSombra = CLASSE_SOMBRA_ISOMETRICA[corDestaque] || 'sombra-iso-primaria'

  const conteudo = (
    <>
      {icone && (
        <span className={styles.icone} style={{ color: corDestaque }} aria-hidden="true">
          {icone}
        </span>
      )}
      <h3 className={`${styles.titulo} ${tamanho === 'grande' ? styles.tituloGrande : ''}`}>
        {titulo}
      </h3>
      {descricao && <p className={styles.descricao}>{descricao}</p>}
      {children}
    </>
  )

  if (to) {
    return (
      <Link
        to={to}
        className={`${styles.cardLink} cartao-isometrico ${classeSombra}`}
        style={{ borderTopColor: corDestaque }}
      >
        {conteudo}
      </Link>
    )
  }

  return (
    <article
      className={`${styles.card} cartao-isometrico ${classeSombra}`}
      style={{ borderTopColor: corDestaque }}
    >
      {conteudo}
    </article>
  )
}

export default Card
