
import Escena from "./components/Escena"
import {useState} from "react"

function App() {
  
  const [estado, setEstado] = useState(0);
 
  const anterior = () => {
    if(estado>0) {
      setEstado(estado-1);
      console.log(estado);
    }
    else {return}
  }

  const siguiente = () => {
    if(estado<3) {
      setEstado(estado+1);
      console.log(estado);}
    else {return}
  } 

  return (
    <div>
      <div className="botones">
            <button onClick={anterior}>Anterior</button>
            <button onClick={siguiente}>Seguent</button>
      </div> 
        <Escena index="0" clase={estado === 0 ? "actiu" : "noactiu"}/>
        <Escena index="1" clase={estado === 1 ? "actiu" : "noactiu"}/> 
        <Escena index="2" clase={estado === 2 ? "actiu" : "noactiu"}/> 
        <Escena index="3" clase={estado === 3 ? "actiu" : "noactiu"}/>  
    
    </div>
  )
}

export default App;
