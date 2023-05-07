import { useState } from "react"
import { usePageContext } from "../../contexts/PageContext";
import { Header } from "../Menu";
import { IoIosArrowBack, IoIosArrowForward }  from "react-icons/io"
import "./index.scss"

  const arrowStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    color:"black",
    cursor:"pointer",
    backgroundColor:"white",
    zIndex:2
  }
  
  export const Themes = ({ children }) => {
    const[isButtonsActive, setIsButtonsActive] = useState(false)
    const { handleChangeColor } = usePageContext()
  
    const handleButtonsActive = () => {
      setIsButtonsActive(!isButtonsActive)
    }
  
    return (
        <>
      <Header />
      <div style={{ position: "fixed", top:"5px", left: "14vw", zIndex: "2", display:"flex" }}>
        { isButtonsActive == true 
        ? <IoIosArrowBack style={arrowStyle} onClick={handleButtonsActive}/> 
        : <IoIosArrowForward style={arrowStyle} onClick={handleButtonsActive}/> }
  
        <div className={isButtonsActive === true ? "wrapper-buttons active" : "wrapper-buttons"}>
          <button
            style={{ backgroundColor: "red" }}
            onClick={() => handleChangeColor("red")}
          ></button>
          <button
            style={{ backgroundColor: "#6f2da8" }}
            onClick={() => handleChangeColor("#6f2da8")}
          ></button>
          <button
            style={{ backgroundColor: "orange" }}
            onClick={() => handleChangeColor("orange")}
          ></button>
          <button
            style={{ backgroundColor: "blue" }}
            onClick={() => handleChangeColor("blue")}
          ></button>
          <button
            style={{ backgroundColor: "green" }}
            onClick={() => handleChangeColor("green")}
          ></button>
        </div>
      </div>

      {children}
      </>
    );
  };