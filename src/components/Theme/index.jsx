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
    const[isButtonsActive, setIsButtonsActive] = useState([false, ""])
    const { handleChangeColor, handleChangeBackground, backgrounds } = usePageContext()
  
    const handleButtonsActive = (property) => {
      setIsButtonsActive([!isButtonsActive[0], property])
    }
  
    return (
        <>
      <Header />
      <div style={{ position: "fixed", top:"5px", left: "14vw", zIndex: "2", display:"flex" }}>
        { ( isButtonsActive[0] === true && isButtonsActive[1] === "colors" ) 
        ? <IoIosArrowBack style={arrowStyle} onClick={() => handleButtonsActive("colors")}/> 
        : <IoIosArrowForward style={arrowStyle} onClick={() => handleButtonsActive("colors")}/> }
  
        <div className={( isButtonsActive[0] === true && isButtonsActive[1] === "colors" ) ? "wrapper-buttons active" : "wrapper-buttons"}>
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
          <div style={{position: "fixed", top:"5px", right: "14vw", zIndex: "2", display:"flex"}}>
          { ( isButtonsActive[0] === true && isButtonsActive[1] === "images" ) 
          ? <IoIosArrowForward style={arrowStyle} onClick={() => handleButtonsActive("images")} />
          : <IoIosArrowBack style={arrowStyle} onClick={() => handleButtonsActive("images")} />}

          <div className={( isButtonsActive[0] === true && isButtonsActive[1] === "images" ) ? "wrapper-images active" : "wrapper-images"}>
            {backgrounds.map((background, index) => (
              <img key={index} src={background} style={{width:"40px", height:"40px", marginLeft:"10px", cursor:"pointer"}} onClick={() => handleChangeBackground(index)} />
            ))}
          </div>
          </div>
      {children} 
      </>
    );
  };