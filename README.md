# Davi para Autistas

Site informativo, educativo e **sem fins lucrativos** sobre o Transtorno do Espectro
Autista (TEA), voltado para pais e familiares, professores/educadores e profissionais
de saúde.

Este é um projeto independente. As informações aqui apresentadas têm caráter educativo
e não substituem avaliação, diagnóstico ou acompanhamento profissional.

## Stack técnica

- [React](https://react.dev/) (componentes funcionais + hooks)
- [React Router DOM](https://reactrouter.com/) para navegação entre páginas
- CSS Modules para estilização (sem dependências extras de UI)
- [Vite](https://vitejs.dev/) como ferramenta de build/dev server
- Sem backend — site 100% estático

## Como rodar o projeto

Pré-requisito: [Node.js](https://nodejs.org/) versão 18 ou superior instalado.

```bash
# 1. Instalar as dependências
npm install

# 2. Rodar o servidor de desenvolvimento
npm run dev
```

O terminal vai mostrar um endereço local (geralmente `http://localhost:5173`) — abra
esse endereço no navegador para ver o site.

Outros comandos disponíveis:

```bash
# Gerar a versão de produção (pasta dist/)
npm run build

# Pré-visualizar a versão de produção localmente
npm run preview
```

## Estrutura de pastas

```
site-autismo/
├── index.html                  # HTML base carregado pelo Vite
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx                 # Ponto de entrada da aplicação
    ├── App.jsx                  # Roteamento principal (React Router)
    ├── index.css                 # Estilos globais, reset e importação de fonte
    ├── styles/
    │   └── variables.css        # Paleta de cores, tipografia e espaçamentos
    ├── data/
    │   └── paginas.js            # Lista central das páginas (usada no menu, footer e home)
    ├── components/
    │   ├── Header/               # Cabeçalho com logo e menu responsivo
    │   ├── Footer/                # Rodapé com links rápidos e créditos
    │   ├── Card/                  # Card reutilizável (usado nos acessos rápidos)
    │   └── Section/               # Seção reutilizável (título + conteúdo)
    └── pages/
        ├── Home/                       # Página inicial
        ├── OQueEAutismo/               # O que é Autismo
        ├── SinaisDiagnostico/          # Sinais e Diagnóstico
        ├── ParaFamilias/               # Para Famílias
        ├── DireitosLeis/               # Direitos e Leis
        ├── PreconceitoInclusao/        # Preconceito e Inclusão
        ├── RecursosApoio/              # Recursos e Apoio
        ├── SobreOSite/                 # Sobre o Site
        └── NaoEncontrada/              # Página 404
```

## Identidade visual

| Uso | Cor |
| --- | --- |
| Fundo geral | `#FFFFFF` / `#F9F9F9` |
| Primária (azul acolhedor) | `#4A90D9` |
| Secundária (laranja suave) | `#F5A623` |
| Terciária (verde menta) | `#5CB85C` |
| Texto principal | `#333333` |

Fonte principal: **Nunito** (Google Fonts). Todas as variáveis de cor, tipografia e
espaçamento ficam centralizadas em `src/styles/variables.css`.

## Acessibilidade

- Contraste mínimo 4.5:1 entre texto e fundo
- HTML semântico (`header`, `nav`, `main`, `section`, `article`, `footer`)
- Navegação completa por teclado, com foco visível em todos os elementos interativos
- Textos alternativos (`alt`) obrigatórios em imagens (a serem adicionadas nas próximas
  etapas de conteúdo)

## Status do projeto

Todas as 8 páginas do site estão com conteúdo completo: Home, O que é Autismo, Sinais e
Diagnóstico, Para Famílias, Direitos e Leis, Preconceito e Inclusão, Recursos e Apoio e
Sobre o Site. Os componentes globais (Header, Footer, Card e Section) são reaproveitados
em todas elas para manter a identidade visual consistente.
