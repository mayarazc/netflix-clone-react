import DetalhesFilme from "../../components/DetalhesFilme/DetalhesFilme";
import { useParams } from "react-router-dom";

const PaginaFilme = (props) => {
    const parametro = useParams();

    /* para cada item do vetor listaFilmes foi usado spread para adicionar num vetor (inicialmente vazio)
    os resultados vindo da API, resultando em um vetor com apenas os filmes */
    let filmes = [];
    props.listaFilmes.forEach((ele) => {
      filmes = [...filmes, ...ele.itens.results]
    })

    const itemId = filmes.find((item) => {
      return item.id === Number(parametro.urlParametro);
    })

    return(
        <div>
            <DetalhesFilme item={itemId}/>
        </div>
    )
}

export default PaginaFilme;