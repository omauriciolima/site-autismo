import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import OQueEAutismo from './pages/OQueEAutismo/OQueEAutismo.jsx'
import SinaisDiagnostico from './pages/SinaisDiagnostico/SinaisDiagnostico.jsx'
import ParaFamilias from './pages/ParaFamilias/ParaFamilias.jsx'
import DireitosLeis from './pages/DireitosLeis/DireitosLeis.jsx'
import PreconceitoInclusao from './pages/PreconceitoInclusao/PreconceitoInclusao.jsx'
import RecursosApoio from './pages/RecursosApoio/RecursosApoio.jsx'
import SobreOSite from './pages/SobreOSite/SobreOSite.jsx'
import NaoEncontrada from './pages/NaoEncontrada/NaoEncontrada.jsx'

/**
 * Componente raiz: define o Header e o Footer fixos e as rotas
 * de todas as páginas do site.
 */
function App() {
  return (
    <>
      <a href="#conteudo-principal" className="pular-para-conteudo">
        Pular para o conteúdo principal
      </a>
      <Header />
      <div id="conteudo-principal" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-que-e-autismo" element={<OQueEAutismo />} />
          <Route path="/sinais-e-diagnostico" element={<SinaisDiagnostico />} />
          <Route path="/para-familias" element={<ParaFamilias />} />
          <Route path="/direitos-e-leis" element={<DireitosLeis />} />
          <Route path="/preconceito-e-inclusao" element={<PreconceitoInclusao />} />
          <Route path="/recursos-e-apoio" element={<RecursosApoio />} />
          <Route path="/sobre-o-site" element={<SobreOSite />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
