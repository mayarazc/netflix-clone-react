import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

const Erro = () => {

    return(
        <>
            <Header/>
            <div className="w-screen h-screen flex flex-col justify-center items-center text-white" style={{backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/pages/errors/bg-lost-in-space.png)`, backgroundSize: 'cover'}}>
                <h1 className="text-6xl font-semibold mb-10">Você se perdeu?</h1>
                <p className="text-2xl text-center">Infelizmente, não localizamos essa página. <br/> Você encontra muitos outros títulos na página da Netflix.</p>
                <Link to="/inicio"><button className="bg-white text-chinese-black rounded px-8 py-2 text-lg font-semibold flex flex-row justify-center items-center my-8 tracking-wide subpixel-antialiased hover:opacity-70">Página Inicial da Netflix</button></Link>
                <p className="text-2xl font-thin">Código de Erro <span className="font-semibold">NSES-404</span></p>
            </div>
        </>
    )

}

export default Erro;