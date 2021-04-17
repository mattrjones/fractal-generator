import { useState } from 'react'
import Cantor from './Cantor'
import Koch from './Koch'

export default function Selector() {
    const[fractal, setFractal] = useState("")
    const[nextFractal, setNextFractal] = useState("Cantor")

    const handleSubmit = event => {
        event.preventDefault();
        setFractal(nextFractal)
    }

    const showFractal = () => {
        switch(fractal){
            case "Cantor":
                return <div><Cantor /></div>
            case "Koch":
                return <div><Koch /></div>
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
        <option value="Koch">Koch</option>
        <option value="None">None</option>
        </select>
        <input type="submit" value="Generate Fractal" />
        </form>
        {showFractal()}
    </div>
    )

}