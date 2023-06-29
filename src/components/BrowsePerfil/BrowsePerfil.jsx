import { Link } from "react-router-dom";

const BrowsePerfil = (props) => {
  return (
    <>
      <div className="group mr-8 w-72 cursor-pointer">
        <Link to="/inicio">
          <img
            src={props.iconeUsuario}
            alt="icone"
            className="border-4 border-transparent rounded-lg hover:border-[#E5E5E5]"
          />
          <p className="text-gray text-lg text-center pt-2 group-hover:text-[#e5e5e5]">
            {props.nomeUsuario}
          </p>
        </Link>
      </div>
    </>
  );
};

export default BrowsePerfil;
