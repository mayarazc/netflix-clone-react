import netflix from "../../images/netflix-icon.png";
import conta1 from "../../images/account-01.png";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header className="flex bg-chinese-black h-14 w-full items-center py-8 fixed z-50">
        <h1 className="w-24 mx-10">
          <Link to="/inicio"><img src={netflix} alt="Icone da Netflix" /></Link>
        </h1>
        <nav className="w-full text-gray90 flex items-center justify-between">
          <ul className="flex flex-row text-[15px]">
            <Link to="/inicio"><li className="mx-3 cursor-pointer hover:text-gray transition ease">Início</li></Link>
            <li className="mx-3 cursor-pointer hover:text-gray transition ease">Séries</li>
            <li className="mx-3 cursor-pointer hover:text-gray transition ease">Filmes</li>
            <li className="mx-3 cursor-pointer hover:text-gray transition ease">Bombando</li>
            <li className="mx-3 cursor-pointer hover:text-gray transition ease">Minha Lista</li>
            <li className="cursor-pointer hover:text-gray transition ease">Navegar por idiomas</li>
          </ul>
          <img src={conta1} alt="Ícone conta" className="w-8 mr-12 rounded"/>

        </nav>
      </header>
    )
}

export default Header;