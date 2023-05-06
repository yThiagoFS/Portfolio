import { useEffect, useState } from "react"
import "./index.scss"
export const HomeContent = ({ content, indexContent }) => {
    const[cardContent, setCardContent] = useState({})
    const[isActive, setIsActive] = useState(false)

    useEffect(() => {
      setIsActive(false)
      renderContent(indexContent)
      setTimeout(() => setIsActive(true), 200)
    }, [indexContent])

    const renderContent = (indexContent) => {
      setCardContent({})
      if(content[indexContent] ===  "Sobre Mim"){
        setCardContent(
          {
          title: <>Olá, me chamo Thiago, tenho 20 anos e comecei a estudar programação a cerca de um ano!</>,
          text: <>Tenho contato com a tecnologia desde pequeno, sempre gostei bastante de jogar e entender mais sobre o funcionamento do computador, sempre resolvendo os eventuais
          problemas que apareciam por conta própria! <br/> 
          No final de 2021, conheci o <a href="">Instituro PROA</a>, que oferece cursos profissionalizantes de programação Web Java para jovens de baixa renda. <br/> 
          Realizei o processo seletivo e passei, e a partir dai, tive meu primeiro contato com programação, e venho me apaixonando cada vez mais pela área!</>
          })
      }
      if(content[indexContent] ===  "Experiência"){
        setCardContent(
          {
          title: <>Experiencia </>,
          text: <>Atualmente, estou há 7 meses atuando como Jovem Aprendiz em Engenharia de Software na Grupo Recovery, aprendendo e dando auxílio na criação de aplicações baseadas em microsserviços utilizando .NET 6 e Microsoft Azure. <br/>
          Realizei também projetos a parte, um deles o Projeto DemoDay, projeto de conclusão do curso do Instituto PROA, onde criamos uma plataforma que diminui o abismo entre o jovem de periferia e o intercâmbio.</>
          })
      }

      if(content[indexContent] ===  "Objetivos"){
        setCardContent(
          {
          title: <>Objetivos </>,
          text: <>Atualmente, pretendo me especializar cada vez mais em .NET e aplicações baseadas em microsserviços, e evoluir pessoalmente e profissionalmente, não só em questões técnicas, mas também comportamentais.</>
          })
      }
    }
  
    return <div className="content">
      <h1 className={ isActive == true ? "content-title active" : "content-text"  }>
        {cardContent.title}
      </h1>
      <p className={ isActive == true ? "content-text active" : "content-text"  }>
        {cardContent.text}
      </p>
    </div>
  }