
import Escena from "./components/Escena"
import {useState} from "react"
import historia from "./frases"


function App() {
  
  const imatges = historia.map(element => element.imatge);
  
  const [estado, setEstado] = useState(0);
  const [empezar, setEmpezar] = useState(false);
 
  const anterior = () => {
    if(estado>0) {
      setEstado(estado-1);
      console.log(estado);
      console.log(historia[estado].imatge);
    }
    else {return}
  }

  const siguiente = () => {
    if(estado<3) {
      setEstado(estado+1);
      console.log(estado);}
    else {return}
  }

  function start() {
    setEmpezar(true);
    console.log(empezar);
  }


  return (
    
    <div className="divgeneral">
      {!empezar && <div className="pantallainicio">
        <h1>Benvingut! vols començar aquesta historia?</h1>
        <button onClick={start}>Començar</button>
      </div>}
      {empezar && 
      <div className="containerprincipal" style={{backgroundImage: `url(${imatges[estado]})`}}>
        <div className="botones">
            <button onClick={anterior}>Anterior</button>
            <button onClick={siguiente}>Seguent</button>
        </div> 
          <Escena index="0" clase={estado === 0 ? "actiu" : "noactiu"}/>
          <Escena index="1" clase={estado === 1 ? "actiu" : "noactiu"}/> 
          <Escena index="2" clase={estado === 2 ? "actiu" : "noactiu"}/> 
          <Escena index="3" clase={estado === 3 ? "actiu" : "noactiu"}/>  
    
      </div>
      }
    </div>
  )
}

export default App;
