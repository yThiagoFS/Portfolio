import { useState } from "react"

export const Buttons = ({ index, value, isActive, handleActive }) => {
    return(
        <button onClick={handleActive} className={isActive == index ? "active" : "not-active"}>{value}</button>
    )
}