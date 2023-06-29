import { useEffect, useState } from "react";
import { tmdb } from "./tmdb";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Browse from "./pages/Browse/Browse";
import Inicio from "./pages/Inicio/Inicio";
import PaginaFilme from "./pages/PaginaFilme/PaginaFilme";
import Erro from "./pages/Erro/Erro";

function App() {
  const [listaFilmes, setListaFilmes] = useState([]);

  useEffect(() => {
    const carregaDados = async () => { 
      let dados = await tmdb.getAllMovies();
      setListaFilmes(dados)
    }
    carregaDados();
  }, [])

  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Browse/>}></Route>
          <Route path="/inicio" element={<Inicio listaFilmes={listaFilmes}/>}></Route>
          <Route path="/detalhes/:urlParametro" 
          element={<PaginaFilme listaFilmes={listaFilmes}/>}></Route>
          <Route path="*" element={<Erro/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
