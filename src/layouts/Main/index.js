import { Link, Outlet } from "react-router-dom"
import "./main.css";

const Main = ()=> {    return(
        <div>
            <nav className="navar">
                <div>
                    <img className="img" src="https://playsight.com/wp-content/uploads/2018/08/2000px-Naver_Logotype.svg.png" alt=""/>
                </div>
                <div className="listas">
                    <ul >
                        <li>
                            <Link to = "/">Pokemon</Link>
                        </li>
                        <li>
                            <Link to = "/flags">Banderas</Link>
                        </li>
                        <li>
                            <Link to = "/youtube">Youtube</Link>
                        </li>
                        <li>
                            <Link to = "/maps">Maps</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet/>
        </div>
    );
};

export default Main;