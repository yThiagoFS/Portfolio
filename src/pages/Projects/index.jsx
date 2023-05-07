import { usePageContext } from "../../contexts/PageContext"
import { useEffect  } from "react"
import { Header } from "../../components/Menu"

export const Projects = () => {
    const { handleActualPage } = usePageContext()

    useEffect(() => {
        handleActualPage("projects")
    },[])

    return (<>
        <Header />
        <div>Projects</div>
      
        </>
        )
}