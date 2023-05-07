import { createContext, useEffect, useContext, useState } from "react"

const PageContext = createContext(null)


export const PageContextProvider = ({ children }) => {
    const[actualPage, setActualPage] = useState("")
    const[actualColor, setActualColor] = useState("purple")

    useEffect(() => {
        document.documentElement.style.setProperty("--background-color", actualColor)
    }, [actualColor])

    const Themes = () => {
        return(
            <div style={{position:"fixed", left:"16vw", zIndex:"2"}}>
                <button style={{width:"40px", height:"40px", backgroundColor:"red", borderRadius:"50%"}} onClick={() => changeVariableColor("red")} ></button>
                <button style={{width:"40px", height:"40px", backgroundColor:"purple", borderRadius:"50%"}} onClick={() => changeVariableColor("purple")}></button>
                <button style={{width:"40px", height:"40px", backgroundColor:"orange", borderRadius:"50%"}} onClick={() => changeVariableColor("orange")}></button>
                <button style={{width:"40px", height:"40px", backgroundColor:"blue", borderRadius:"50%"}} onClick={() => changeVariableColor("blue")}></button>
                <button style={{width:"40px", height:"40px", backgroundColor:"green", borderRadius:"50%"}} onClick={() => changeVariableColor("green")}></button>
            </div>
        )
    }

    const changeVariableColor = (color) => {
        setActualColor(color)
    }

    const handleActualPage = (actualPage) => {
        setActualPage(actualPage)
    }

    return (
        <PageContext.Provider value={{actualPage, handleActualPage, actualColor}}>
            <Themes />
            {children}
        </PageContext.Provider>
    )
}

export const usePageContext = () =>{
    return useContext(PageContext)
}