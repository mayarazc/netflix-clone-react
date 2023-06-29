import Botao from "../Botao/Botao";
import Header from "../Header/Header";
import { FiArrowLeftCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const DetalhesFilme = (props) => {
    const navegar = useNavigate();

    return(
        <>
            <Header/>
            <div className="bg-white w-screen h-screen flex justify-center items-center bg-gradient-to-t from-chinese-black to-transparent">
                <div className="w-7/12 max-h-max bg-chinese-black rounded-lg mt-14">
                
                    <div style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${props.item.backdrop_path})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center'
                  }} className="w-full h-56 rounded-t-lg"/>
                    <div className="ml-5 mt-5 text-gray90">
                        <div className="items-center">
                            <h1 className="text-4xl text-white font-semibold mb-2">{props.item.original_name || props.item.name || props.item.original_title}</h1>
                            <Botao/>
                        </div>
                        <div className="flex flex-row gap-5 my-3">
                            <p className="text-green-500">Pontuação: {props.item.vote_average}</p>
                            <p>Data de Lançamento: {props.item.release_date} 
                            {props.item.first_air_date}</p>
                        </div>
                        <div className="w-auto mr-2">
                            <p className="italic my-5"></p>
                            <p className="my-2">{props.item.overview}</p>
                        </div>
                        <div className="mt-10 mb-5 cursor-pointer w-15" onClick={() => navegar(-1)}>
                            <FiArrowLeftCircle className="text-2xl"/> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetalhesFilme;