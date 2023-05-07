import { Link } from "react-router-dom"
import { usePageContext } from "../../contexts/PageContext"
import "./index.scss"
export const Header = () => {

    const { actualPage  } = usePageContext()

    return(
        <>
            <div className="header-wrapper">
                <nav className="navbar">
                    <ul>
                        <li>
                           <Link to="/" className={actualPage == "home" ? "active" : "" } >Home</Link>
                        </li>
                        <li>
                           <Link to="/Projects" className={actualPage == "projects" ? "active" : "" } >Projects</Link>
                        </li>
                        <li>
                           <Link to="/" className={actualPage == "socialmedia" ? "active" : "" }>Social Medias</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}