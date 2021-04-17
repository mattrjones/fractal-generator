import { useState } from 'react'
import Cantor from './Cantor'

export default function Selector() {
    const[fractal, setFractal] = useState("")
    const[nextFractal, setNextFractal] = useState("Cantor")

    const handleSubmit = event => {
        debugger;
        event.preventDefault();
        setFractal(nextFractal)
    }

    const showFractal = () => {
        switch(fractal){
            case "Cantor":
                return <div><Cantor /></div>
            default: 
                break;
        }
    }

    const handleChange = event => {
        setNextFractal(event.target.value)
    }

    return(
    <div className="FractalForm">
        <form onSubmit={handleSubmit}>
        <select value={nextFractal} onChange={handleChange}>
        <option value="Cantor">Cantor</option>
        <option value="Blah">Blah</option>
        </select>
        <input type="submit" value="Generate Fractal" />
        </form>
        {showFractal()}
    </div>
    )

}