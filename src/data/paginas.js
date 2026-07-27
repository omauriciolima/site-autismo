// Lista central das páginas do site.
// Usada pelo Header (menu), Footer (links rápidos) e Home (cards de acesso rápido)
// para manter a navegação sempre consistente em um único lugar.

export const paginas = [
  {
    titulo: 'Início',
    caminho: '/',
    descricao: 'Volte para a página inicial do site.',
    icone: '🏠',
    cor: 'var(--cor-primaria)',
  },
  {
    titulo: 'O que é Autismo',
    caminho: '/o-que-e-autismo',
    descricao: 'Entenda de forma simples o que é o Transtorno do Espectro Autista.',
    icone: '♾️',
    cor: 'var(--cor-primaria)',
  },
  {
    titulo: 'Sinais e Diagnóstico',
    caminho: '/sinais-e-diagnostico',
    descricao: 'Saiba quais sinais observar e como funciona o processo de diagnóstico.',
    icone: '🔎',
    cor: 'var(--cor-secundaria)',
  },
  {
    titulo: 'Para Famílias',
    caminho: '/para-familias',
    descricao: 'Orientações acolhedoras para o dia a dia em família.',
    icone: '👨‍👩‍👧‍👦',
    cor: 'var(--cor-terciaria)',
  },
  {
    titulo: 'Direitos e Leis',
    caminho: '/direitos-e-leis',
    descricao: 'Conheça os direitos garantidos por lei às pessoas com TEA.',
    icone: '⚖️',
    cor: 'var(--cor-primaria)',
  },
  {
    titulo: 'Preconceito e Inclusão',
    caminho: '/preconceito-e-inclusao',
    descricao: 'Reflexões sobre combate ao preconceito e construção de uma sociedade inclusiva.',
    icone: '🤝',
    cor: 'var(--cor-secundaria)',
  },
  {
    titulo: 'Recursos e Apoio',
    caminho: '/recursos-e-apoio',
    descricao: 'Materiais, organizações e canais de apoio para consultar.',
    icone: '📚',
    cor: 'var(--cor-terciaria)',
  },
  {
    titulo: 'Sobre o Site',
    caminho: '/sobre-o-site',
    descricao: 'Conheça o propósito, os valores e quem está por trás deste projeto.',
    icone: 'ℹ️',
    cor: 'var(--cor-primaria)',
  },
]

// Páginas exibidas no menu principal (sem o próprio "Início", que já é o logo)
export const paginasMenu = paginas.filter((pagina) => pagina.caminho !== '/')
