import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import FavoritosProvaider from "components/contextos/Favoritos";
import Rodape from "components/Rodape";
import { Outlet} from "react-router-dom";

export default function PaginaBase(){
    return(
        <>
        <Cabecalho/>
        <Container>
        <FavoritosProvaider>
            <Outlet/>
        </FavoritosProvaider>
        </Container>
        <Rodape/>
        </>
    )
}