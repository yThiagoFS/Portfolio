import { useState } from "react"
import { Header } from "../../components/Menu"
import { HomeContent } from "../../components/HomeContent"
import Img from "../../assets/imgs/img-teste.jpg"
import "./index.scss"
import { Buttons } from "../../components/HomeContent/buttons"

export const Home = () => {
    const content = ["Sobre Mim", "Experiência", "Objetivos"]
    const [indexContent, setIndexContent] = useState(0)

    const handleContent = (index) => {
        setIndexContent(index)
    }
    return (
        <div className="home-container">
             <Header />
            <div className="home-content">
                <div className="container-photo">
                    <img className="photo" src={Img}></img>
                </div>
                <hr style={{width:"80%"}}/>
                <div className="container-content">
                    <div className="container-options">
                        {content.map((value, index) => {
                            return (
                                <Buttons key={index} index={index} isActive={indexContent} handleActive={() => handleContent(index)} value={value} />
                            )
                        })}
                    </div>
                        <HomeContent content={content} indexContent={indexContent} />
                </div>
            </div>
        </div>)
}