import styles from './Callout.module.css'

/**
 * Caixa de destaque reutilizável (ícone + texto), usada para avisos e
 * informações importantes dentro das seções de conteúdo.
 *
 * Props:
 * - variante: 'aviso' | 'destaque' | 'claro'
 *   - aviso: fundo coral suave, borda coral (avisos e alertas)
 *   - destaque: fundo lavanda, borda roxa (informação complementar)
 *   - claro: fundo branco sem borda (usado sobre seções de fundo roxo)
 * - icone: emoji decorativo (renderizado com aria-hidden)
 * - espacoExtra: adiciona um respiro extra acima — usado quando o callout
 *   vem logo depois de uma grade de cards dentro da mesma seção
 * - children: conteúdo textual do callout
 */
function Callout({ variante = 'destaque', icone, espacoExtra = false, children }) {
  return (
    <div
      className={`${styles.callout} ${styles[variante] || ''} ${espacoExtra ? styles.comEspacoExtra : ''}`}
    >
      {icone && (
        <span className={styles.icone} aria-hidden="true">
          {icone}
        </span>
      )}
      <p className={styles.texto}>{children}</p>
    </div>
  )
}

export default Callout
