import { useNavigate } from "react-router-dom";

const Filme = (props) => {
    const navegacao = useNavigate();

    return(
        <div className="inline-block w-44 h-56" 
        onClick={() => navegacao(`/detalhes/${props.filme.id}`)}>

        <img src={`https://image.tmdb.org/t/p/w300/${props.filme.poster_path}`} alt="Imagem filme" className="scale-90 w-full h-full object-cover rounded-lg ease-in duration-200 cursor-pointer hover:scale-100"/>
    </div>
    )
}

export default Filme;