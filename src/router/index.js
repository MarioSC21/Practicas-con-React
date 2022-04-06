// para crear nuestra rutas debemos importar BrowsRouter
//Despues Routes > crea rutas por componente
//Route > recibe el path y el element y los renderiza
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Pokemon from "../pages/Pokemon";
import Flags from "../pages/Flags";
import VerBandera from "../pages/FlagsVerBandera";
import Youtube from "../pages/Youtube";
import YoutubeAdministrator from "../pages/YoutubeAdministrator";
import MovieUpdate from "../pages/MovieUpdate";
import Main from "../layouts/Main";
import Login from "../pages/Login";
import Private from "../layouts/Private";
import Ecommerce from "../layouts/Ecommerce";
import PopularWeek from "../pages/PopularWeek";
import BasketView from "../pages/BasketView";
import ProductAdmin from "../pages/ProductAdmin";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Map from "../pages/Map";
import SingUp from "../pages/SingUp";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                {/* Route del main(publicas) */}
                <Route path="login" element={<Login />}/>
                <Route path="singUp" element={<SingUp />}/>
                <Route element={<Main />}>
                    <Route path="/" element={<Pokemon />} />
                    <Route path="/flags" element={<Flags />} />
                    <Route path="/flags/ver/:names" element={<VerBandera />} />
                    <Route path="/youtube" element={<Youtube />} /> 
                    <Route path="/maps" element={<Map />} /> 
                </Route>

                {/* Route para ecommerce */}
                <Route element={<Ecommerce />}>
                    <Route path="ecommerce" element={<PopularWeek />} />
                    <Route path="/ecommerce/basket" element={<BasketView />} />
                </Route>

                {/* Route del main(privadas) */}
                <Route element={<Private />}>
                    <Route
                        path="/youtube/admin"
                        element={<YoutubeAdministrator />}
                    />
                    <Route
                        path="/youtube/admin/editar/:id"
                        element={<MovieUpdate />}
                    />
                    {/* Route admin ecommerce private */}
                    <Route path="/ecommerce/create" element={<ProductAdmin/>}/>
                    
                    <Route path="/perfil" element={<Profile/>}/>

                    <Route path="/home" element={<Home/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )    
};
export default Router;