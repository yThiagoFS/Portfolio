import { createContext, useState } from "react"

const PageContext = createContext(null)

export const PageContextProvider = ({ children }) => {
    const[actualPage, setActualPage] = useState("")


    const handleActualPage = (actualPage) => {
        setActualPage(actualPage)
    }

    return (
        <PageContext.Provider value={{actualPage, handleActualPage}}>
            {children}
        </PageContext.Provider>
    )
}

export const usePageContext = () =>{
    return createContext(PageContext)
}