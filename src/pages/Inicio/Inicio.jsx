import Header from "../../components/Header/Header";
import FilmeDestaque from "../../components/FilmeDestaque/FilmeDestaque";
import RowFilme from "../../components/RowFilme/RowFilme";

const Inicio = (props) => {
  return (
      <div className="bg-chinese-black">
        <Header/>
        <FilmeDestaque/>
        <section className="pb-3 mt-[-150px]">
          {props.listaFilmes.map((filme, key) => (
              <RowFilme titulo={filme.titulo} itensFilme={filme.itens} key={key}/>
          ))}
        </section>
      </div> 
  )
}

export default Inicio;
