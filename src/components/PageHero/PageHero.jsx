import styles from './PageHero.module.css'

/* Para cada gradiente de hero, as duas famílias de cor usadas nas formas
   decorativas — as mesmas duas cores do próprio gradiente, para os
   losangos "harmonizarem" com o fundo em vez de destoar dele. */
const CORES_LOSANGO_POR_GRADIENTE = {
  gradientePrimariaApoioEscura: ['primaria', 'apoio'],
  gradientePrimariaSecundariaEscura: ['primaria', 'secundaria'],
  gradientePrimariaTerciariaEscura: ['primaria', 'terciaria'],
  gradienteApoioEscuraPrimaria: ['apoio', 'primaria'],
  gradientePrimariaPrimariaEscura: ['primaria', 'primaria'],
  gradienteSecundariaEscuraPrimaria: ['secundaria', 'primaria'],
  gradienteTerciariaEscuraSecundariaEscura: ['terciaria', 'secundaria'],
  gradientePrimariaEscuraApoioEscura: ['primaria', 'apoio'],
}

/**
 * Hero reutilizável para o topo de cada página.
 * Duas variantes, escolhidas automaticamente pela presença da prop `imagem`:
 * - com imagem: texto e ilustração lado a lado a partir de 900px
 * - sem imagem: coluna única centralizada (usado em Direitos e Leis, Recursos e Apoio)
 *
 * Quatro losangos decorativos (.forma-losango, definida em index.css) ficam
 * nos quatro cantos do hero, atrás do conteúdo (que tem z-index próprio) —
 * não competem com o texto nem com a imagem em nenhuma das duas variantes.
 * Somem em telas muito estreitas (ver PageHero.module.css) para não
 * apertar o hero no mobile.
 *
 * Props:
 * - titulo: texto do h1 (obrigatório)
 * - subtitulo: texto de apoio abaixo do título (opcional)
 * - imagem: caminho da ilustração (opcional — se omitido, usa a variante sem imagem)
 * - imagemAlt: texto alternativo da imagem (obrigatório quando `imagem` é informado)
 * - imagemLargura / imagemAltura: atributos width/height da imagem, para evitar CLS
 * - tamanhoImagem: 'padrao' | 'grande' — altura de exibição da imagem (a Home usa 'grande')
 * - gradiente: nome de uma das classes de gradiente definidas em PageHero.module.css
 *   (também escolhe a cor dos losangos decorativos, ver CORES_LOSANGO_POR_GRADIENTE)
 * - children: conteúdo extra opcional, renderizado após o subtítulo (ex: um CTA)
 */
function PageHero({
  titulo,
  subtitulo,
  imagem,
  imagemAlt,
  imagemLargura = 420,
  imagemAltura = 320,
  tamanhoImagem = 'padrao',
  gradiente,
  children,
}) {
  const [corLosangoA, corLosangoB] = CORES_LOSANGO_POR_GRADIENTE[gradiente] || ['primaria', 'apoio']

  const conteudoTexto = (
    <>
      <h1 id="hero-titulo" className={styles.heroTitulo}>
        {titulo}
      </h1>
      {subtitulo && <p className={styles.heroTexto}>{subtitulo}</p>}
      {children}
    </>
  )

  return (
    <section
      className={`${styles.hero} ${styles[gradiente] || ''} ${!imagem ? styles.heroSemImagem : ''}`}
      aria-labelledby="hero-titulo"
    >
      <div
        aria-hidden="true"
        className={`forma-losango forma-losango--minusculo forma-losango--${corLosangoA} ${styles.losangoTopoEsquerda}`}
      />
      <div
        aria-hidden="true"
        className={`forma-losango forma-losango--pequeno forma-losango--${corLosangoB} ${styles.losangoTopoDireita}`}
      />
      <div
        aria-hidden="true"
        className={`forma-losango forma-losango--pequeno forma-losango--${corLosangoB} ${styles.losangoBaixoEsquerda}`}
      />
      <div
        aria-hidden="true"
        className={`forma-losango forma-losango--minusculo forma-losango--${corLosangoA} ${styles.losangoBaixoDireita}`}
      />
      <div className={`container ${styles.heroConteudo}`}>
        {imagem ? (
          <>
            <div className={styles.heroColunaTexto}>{conteudoTexto}</div>
            <div className={`${styles.heroImagem} ${tamanhoImagem === 'grande' ? styles.imagemGrande : ''}`}>
              <img src={imagem} alt={imagemAlt} width={imagemLargura} height={imagemAltura} />
            </div>
          </>
        ) : (
          conteudoTexto
        )}
      </div>
    </section>
  )
}

export default PageHero
