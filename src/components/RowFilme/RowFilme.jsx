import { useState } from "react";
import Filme from "../Filme/Filme";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const RowFilme = (props) => {
  const [scrollX, setScrollX] = useState(-400);

  // cálculo para fazer o scroll dos filmes
  const handleSetaEsquerda = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if(x > 0 ){
        x = 0;
    }
    setScrollX(x)
  };

  const handleSetaDireita = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = 3600;
    if ((window.innerWidth - listWidth) > x) {
        x = (window.innerWidth - listWidth) - 40;
    }
    setScrollX(x)
  };

  return (
    <div className="ml-12 text-gray90 group">
      <h1 className="text-xl font-semibold pl-2 tracking-wide subpixel-antialiased pt-3">{props.titulo}</h1>

      <div
        className="absolute w-[40px] h-[200px] bg-chinese-black/50 left-0 z-40 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 ease-in duration-300"
        onClick={handleSetaEsquerda}
      >
        <IoIosArrowBack className="text-4xl" />
      </div>

      <div
        className="absolute w-[40px] h-[200px] bg-chinese-black/50 right-0 z-40 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 ease-in duration-300"
        onClick={handleSetaDireita}
      >
        <IoIosArrowForward className="text-4xl" />
      </div>

      <div className="mb-6 overflow-x-hidden">
        <div style={{ marginLeft: scrollX, width: '3600px' }} className="ease-in duration-300">

          {props.itensFilme.results.length > 0 &&
            props.itensFilme.results.map((itemFilme, chave) => (
              <div key={chave} className="inline-block w-44 h-56">
                <Filme filme={itemFilme} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RowFilme;
