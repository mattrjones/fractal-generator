import { Line } from 'react-lineto'

export default function Koch(){

    let coords = []

    let a2 = {}
    let b2 = {}

    const genKoch = (a = {x: 200, y: window.innerHeight/2}, b = {x: 1200, y: window.innerHeight/2}) => {
     if((b.x-a.x) > 50) {
        a2 = {x: (1/3)*(b.x-a.x), y: a.y}
        b2 = {x: (2/3)*(b.x-a.x), y: b.y}

        coords = [...coords, {from:a, to:a2}, {from:b, to:b2}]

        let c = ((0.5*(b.x-a.x)), (((1/3)*(b.x-a.x))*(Math.sqrt(3)/2)))

        genKoch(a2, c)
        genKoch(b2, c)
     }
    }

    const drawKoch = () => {
        genKoch()
        return coords.map(line => (
          <div><Line x0={line.from.x} y0={line.from.y} x1={line.to.x} y1={line.to.y} /></div>  
        ))

    }

    return (
        <div className="Koch">
            {drawKoch()}
        </div>
    )

}