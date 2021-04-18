import { Line } from 'react-lineto'

export default function Koch(){

    let coords = []

    let a2 = {}
    let b2 = {}
    let c = {}
    let diff = 0

    // const genKoch = (a = {x: 200, y: window.innerHeight/2}, b = {x: 1200, y: window.innerHeight/2}) => {
    //  if((b.x-a.x) > 50) {
    //     a2 = {x: (1/3)*(b.x-a.x), y: a.y}
    //     b2 = {x: (2/3)*(b.x-a.x), y: b.y}

    //     coords = [...coords, {from:a, to:a2}, {from:b, to:b2}]

    //     let c = ((0.5*(b.x-a.x)), (((1/3)*(b.x-a.x))*(Math.sqrt(3)/2)))

    //     genKoch(a2, c)
    //     genKoch(b2, c)
    //  }
    // }

    const genSimpleKoch = (a = {x: 200, y: window.innerHeight/2}, b = {x: 1200, y: window.innerHeight/2}) => {
        diff = (1/3) * (b.x - a.x)
        a2 = {x: 200 + diff, y:(a.y + b.y)/2}
        b2 = {x: a2.x + diff, y:(b.y + a.y)/2}
        c = {x: a2.x + (0.5*diff), y: a.y - (diff * (Math.sqrt(3))/2)}
        coords = [...coords, {from: a, to: a2}, {from: b, to: b2}, {from: a2, to: c}, {from: b2, to: c}]

        if(diff > 50){
            genSimpleKoch(a2, c)
            // genSimpleKoch(b2, c)
        }
    }

    const drawSimpleKoch = () => {
        genSimpleKoch()
        return coords.map(line => (
            <div><Line x0={line.from.x} y0={line.from.y} x1={line.to.x} y1={line.to.y} /></div>  
          ))

    }

    const drawKoch = () => {
        // genKoch()
        return coords.map(line => (
          <div><Line x0={line.from.x} y0={line.from.y} x1={line.to.x} y1={line.to.y} /></div>  
        ))

    }

    return (
        <div className="Koch">
            {drawSimpleKoch()}
        </div>
    )

}