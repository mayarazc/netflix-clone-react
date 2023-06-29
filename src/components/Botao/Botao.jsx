import { FaPlay } from "react-icons/fa";

const Botao = () => {
    return(
        <button className="bg-white text-chinese-black rounded px-8 py-2 text-lg font-semibold flex flex-row justify-center items-center tracking-wide subpixel-antialiased hover:opacity-70"><FaPlay className="mr-2"/>Assistir</button>
    )
}

export default Botao;