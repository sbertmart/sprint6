import React from "react"
import Escena from "./Escena"

function Botons() {

    var count = 1;

   
    function anterior() {
        if (count >1 && count <=4) {count--;}
        else {return;}
        console.log(count);
        return count;
    }
    
    function seguent() {
        if (count >=1 && count <4) {count++;}
        else{return;}
        console.log(count);
        return count;
    }

    return (
        <div className="botones">
            <button onClick={anterior} className="anterior">Anterior</button>
            <button onClick ={seguent} className="seguent">Seguent</button>
        </div>    
)

}

export default Botons;