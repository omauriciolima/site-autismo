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
 * - icone: componente de ícone (Lucide), decorativo (renderizado com
 *   aria-hidden). Herda a cor do texto ao redor via currentColor — todas
 *   as variantes usam --cor-texto, já verificado acima de 16:1 nas 3
 *   variantes, então não precisa de um mapa de cor como o Card.
 * - espacoExtra: adiciona um respiro extra acima — usado quando o callout
 *   vem logo depois de uma grade de cards dentro da mesma seção
 * - children: conteúdo textual do callout
 */
function Callout({ variante = 'destaque', icone: Icone, espacoExtra = false, children }) {
  return (
    <div
      className={`${styles.callout} ${styles[variante] || ''} ${espacoExtra ? styles.comEspacoExtra : ''}`}
    >
      {Icone && (
        <span className={styles.icone} aria-hidden="true">
          <Icone size={28} />
        </span>
      )}
      <p className={styles.texto}>{children}</p>
    </div>
  )
}

export default Callout
