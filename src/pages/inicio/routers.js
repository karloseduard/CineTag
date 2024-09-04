import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from ".";
import Favoritos from "pages/Favoritos";
import Player from "pages/Player";
import NaoEncontrada from "pages/NaoEncontrada";
import PaginaBase from "pages/PaginaBase";


export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="Favoritos" element={<Favoritos />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NaoEncontrada />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}