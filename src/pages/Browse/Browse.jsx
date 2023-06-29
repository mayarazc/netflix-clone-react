import BrowsePerfil from "../../components/BrowsePerfil/BrowsePerfil";
import icone1 from "../../images/account-01.png";
import icone2 from "../../images/account-02.png";
import icone3 from "../../images/account-03.png";
import { BiPlusMedical } from "react-icons/bi";

const Browse = () => {

    return(
        <div className="w-screen h-screen bg-chinese-black flex justify-center items-center flex-col">
        <h1 className="text-white text-5xl">Quem está assistindo?</h1>

        <div className="flex flex-row w-2/4 pt-10">
        <BrowsePerfil nomeUsuario="Mayu" iconeUsuario={icone1} />
        <BrowsePerfil nomeUsuario="Miltin" iconeUsuario={icone2}/>
        <BrowsePerfil nomeUsuario="Infantil" iconeUsuario={icone3}/>

        <div className="group w-72">
            <div className="group flex justify-center items-center w-full h-5/6 rounded-lg border-y-6 ">
              <BiPlusMedical className="text-chinese-black text-8xl bg-gray rounded-full px-4"/>
            </div>
            <p className="text-gray text-lg text-center pt-2 group-hover:text-gray90">Adicionar Perfil</p>
        </div>

        </div>

        <div className="group border border-gray w-fit bg-transparent px-6 py-2 mt-16 hover:border-gray90 cursor-pointer">
          <p className="text-gray text-lg text-center group-hover:text-gray90">Gerenciar Perfis</p>
        </div>
      </div>
    )
}

export default Browse;