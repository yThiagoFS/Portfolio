import { useState } from "react"
import { Header } from "../../components/Menu"
import { HomeContent } from "../../components/HomeContent"
import Img from "../../assets/imgs/img-teste.jpg"
import "./index.scss"

export const Home = () => {
    const [content, setContent] = useState()
    const [classs, setClasss] = useState("no")

    const handleContent = (contentSelected) => {
        if(contentSelected != content)
            setContent(contentSelected)

            setClasss("active")
    }

    return (
        <div className="home-container">
             <Header />
            <div className="home-content">
                <div className="container-photo">
                    <img className="photo" src={Img}></img>
                </div>

                <div className="container-content">
                    <div className="container-options">
                        <button className="active" onClick={() => handleContent("sobreMim")}>Sobre mim</button>
                        <button className={classs} onClick={() => handleContent("experiencia")}>Experiência</button>
                        <button onClick={() => handleContent("objetivos")}>Objetivos</button>
                    </div>
                    <div className="content">
                        <HomeContent content={content} />
                    </div>
                </div>
            </div>
        </div>)
}