import { AiOutlineInfoCircle } from "react-icons/ai";
import Botao from "../Botao/Botao";

const FilmeDestaque = () => {
  return (
    <section
      style={{
        backgroundImage: `url(https://staticg.sportskeeda.com/editor/2022/08/178d5-16604131997586-1920.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      className="w-full h-35"
    >
      <div className="w-full h-full bg-gradient-to-r from-chinese-black to-transparent ">
        <div className="w-full h-full bg-gradient-to-t from-chinese-black to-transparent">
            <div className="ml-16 pt-60 pb-[150px]">

              <p className="text-white text-7xl mb-5 font-bold">Eu Nunca</p>
              <p className="text-white text-lg w-2/5 mb-4">Inspirada em momentos reais da infância da atriz e comediante Mindy Kaling, Eu Nunca retrata a vida moderna e complicada de Devi, uma adolescente americana, filha de indianos e aluna nada popular na escola.</p>

              <div className="flex gap-2">
               <Botao/>
                <button className="bg-[#6d6d6eb3] text-white rounded px-8 py-2 text-lg font-semibold flex flex-row justify-center items-center tracking-wide subpixel-antialiased hover:opacity-90"><AiOutlineInfoCircle className="mr-2" />Mais informações</button>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FilmeDestaque;
