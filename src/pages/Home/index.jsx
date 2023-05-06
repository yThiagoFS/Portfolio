import { useState, useEffect } from "react"
import { Header } from "../../components/Menu"
import { HomeContent } from "../../components/HomeContent"
import Img from "../../assets/imgs/minha-foto.jpg"
import "./index.scss"
import { Buttons } from "../../components/HomeContent/buttons"
import { usePageContext } from "../../contexts/PageContext"

export const Home = () => {
    const content = ["Sobre Mim", "Experiência", "Objetivos"]
    const [indexContent, setIndexContent] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const { handleActualPage } = usePageContext()

    useEffect(() => {
        setTimeout(() => setIsActive(true), 250)
        
    },[])

    const handleContent = (index) => {
        setIndexContent(index)
    }
    return (
        <div className="home-container">
             <Header />
            <div className="home-content">

                <div className="container-animation">

                </div>
                <div className={ isActive == true ? "container-photo active" : "container-photo"  }>
                    <img className="photo" src={Img}></img>
                </div>
                <hr className={ isActive == true ? "active" : ""  }/>
                <div className={ isActive == true ? "container-content active" : "container-content"  }>
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