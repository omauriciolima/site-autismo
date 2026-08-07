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

/* O ícone usa a variante "-escura" da cor de destaque, não a base: com um
   SVG (currentColor) a cor passa a valer de verdade, e as cores base não
   atingem 4.5:1 sobre o fundo claro do card (terciária fica em 1.83:1).
   O border-top e a sombra continuam na cor base — só o ícone escurece,
   como manda a regra de governança de cores documentada em variables.css. */
const COR_ICONE = {
  'var(--cor-primaria)': 'var(--cor-primaria-escura)',
  'var(--cor-secundaria)': 'var(--cor-secundaria-escura)',
  'var(--cor-terciaria)': 'var(--cor-terciaria-escura)',
  'var(--cor-apoio)': 'var(--cor-apoio-escura)',
  'var(--cor-roxo)': 'var(--cor-roxo-escura)',
}

/**
 * Card reutilizável usado principalmente nos acessos rápidos da Home, mas
 * também como base para cards com conteúdo extra (listas, linhas adicionais)
 * via `children`.
 * Se `to` for informado, o card inteiro se comporta como um link de navegação.
 *
 * O peso visual acompanha automaticamente essa mesma prop `to`, sem
 * precisar de uma prop de variante separada: cards de navegação (com `to`,
 * hoje só os 7 da Home) recebem a sombra isométrica completa + hover, por
 * serem clicáveis; cards de conteúdo (sem `to`, os outros 77 usos no
 * projeto) ficam planos — só a borda neutra e o border-top colorido — para
 * não competir visualmente com os cards de navegação nem sugerir uma
 * interatividade que eles não têm.
 *
 * Props:
 * - titulo: texto principal do card
 * - descricao: texto de apoio, curto e claro (opcional)
 * - icone: componente de ícone (Lucide), decorativo (opcional — quando
 *   omitido, nenhum espaço de ícone é reservado)
 * - to: rota interna para navegação (opcional) — também decide o peso visual
 * - corDestaque: cor da barra/ícone de destaque (opcional) — quando `to`
 *   está presente, também define a cor da sombra isométrica (ver
 *   CLASSE_SOMBRA_ISOMETRICA); a cor do ícone usa a variante -escura (ver
 *   COR_ICONE)
 * - tamanho: 'padrao' | 'grande' — 'grande' aumenta o título (usado em cards
 *   com mais conteúdo, como listas internas)
 * - children: conteúdo extra opcional, renderizado após a descrição
 */
function Card({ titulo, descricao, icone: Icone, to, corDestaque, tamanho = 'padrao', children }) {
  const conteudo = (
    <>
      {Icone && (
        <span
          className={styles.icone}
          style={{ color: COR_ICONE[corDestaque] || 'var(--cor-primaria-escura)' }}
          aria-hidden="true"
        >
          <Icone size={32} />
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
    const classeSombra = CLASSE_SOMBRA_ISOMETRICA[corDestaque] || 'sombra-iso-primaria'
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
    <article className={styles.card} style={{ borderTopColor: corDestaque }}>
      {conteudo}
    </article>
  )
}

export default Card
