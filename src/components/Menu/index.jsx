import { Link } from "react-router-dom"
import Img from "../../assets/imgs/img-teste.jpg"
import "./index.scss"
export const Header = () => {
    return(
        <>
            <div className="header-wrapper">
                <nav className="navbar">
                    <ul>
                        <li>
                           <Link to="/">Home</Link>
                        </li>
                        <li>
                           <Link to="/Projects">Projects</Link>
                        </li>
                        <li>
                           <Link to="/">Social Medias</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}