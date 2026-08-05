import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { paginasMenu } from '../../data/paginas'
import styles from './Header.module.css'

/**
 * Cabeçalho do site com logo e menu de navegação responsivo.
 * No mobile, o menu fica escondido atrás de um botão "hamburger";
 * no desktop, os links aparecem lado a lado.
 */
function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  function alternarMenu() {
    setMenuAberto((aberto) => !aberto)
  }

  function fecharMenu() {
    setMenuAberto(false)
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.conteudo}`}>
        <NavLink to="/" className={styles.logo} onClick={fecharMenu}>
          <span aria-hidden="true">♾️</span>
          <span>Davi para Autistas</span>
        </NavLink>

        <button
          type="button"
          className={styles.botaoMenu}
          aria-expanded={menuAberto}
          aria-controls="menu-principal"
          onClick={alternarMenu}
        >
          <span className="somente-leitor-de-tela">
            {menuAberto ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          </span>
          <span className={`${styles.icone} ${menuAberto ? styles.iconeAberto : ''}`} aria-hidden="true" />
        </button>

        <nav
          id="menu-principal"
          className={`${styles.nav} ${menuAberto ? styles.navAberta : ''}`}
          aria-label="Navegação principal"
          hidden={!menuAberto}
        >
          <ul className={styles.lista}>
            {paginasMenu.map((pagina) => (
              <li key={pagina.caminho}>
                <NavLink
                  to={pagina.caminho}
                  className={({ isActive }) => (isActive ? styles.linkAtivo : styles.link)}
                  onClick={fecharMenu}
                >
                  {pagina.titulo}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
