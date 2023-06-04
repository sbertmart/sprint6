import React from "react"
import historia from "../frases.js"
import {StyledFrase} from "./styledFrase.js"


const Escena = (props) => {
  
    return (
        <StyledFrase className={props.clase}>
        {historia[props.index]}
        </StyledFrase>
    )
}

export default Escena;


