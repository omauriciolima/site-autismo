import { Link } from 'react-router-dom'
import Section from '../../components/Section/Section.jsx'

/**
 * Página exibida quando a rota acessada não existe (erro 404).
 */
function NaoEncontrada() {
  return (
    <main>
      <Section titulo="Página não encontrada">
        <p>A página que você tentou acessar não existe ou foi movida.</p>
        <p>
          <Link to="/">Voltar para a página inicial</Link>
        </p>
      </Section>
    </main>
  )
}

export default NaoEncontrada
