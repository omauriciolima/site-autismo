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
          <svg className={styles.marca} viewBox="0 0 120 60" aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="gradienteMarcaInfinito" x1="0" y1="0" x2="120" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="var(--cor-primaria)" />
                <stop offset="100%" stopColor="var(--cor-secundaria)" />
              </linearGradient>
            </defs>
            <path
              d="M60,30 C50,10 40,2 30,2 C15,2 2,15 2,30 C2,45 15,58 30,58 C40,58 50,50 60,30 C70,10 80,2 90,2 C105,2 118,15 118,30 C118,45 105,58 90,58 C80,58 70,50 60,30 Z"
              fill="none"
              stroke="url(#gradienteMarcaInfinito)"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
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
