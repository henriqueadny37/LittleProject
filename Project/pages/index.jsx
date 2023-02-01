import { useState } from "react"
import Porta from "../Components/Porta"
import PortaModel from "../Model/Porta"

export default function Home() {

  const [p1, setP1] = useState(new PortaModel(1))
  const [texto, setTexto] = useState("...")
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <input type="text" value={texto} 
      onChange={e => setTexto(e.target.value)}/>
        <Porta  value={p1} />
        </div>
  )
}