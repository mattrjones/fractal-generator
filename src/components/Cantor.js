import { Line } from 'react-lineto'

export default function Cantor(){

    let coords = []

   const genCantor = (x=0, y=50, length=window.innerWidth) => {     
    if (length >= 1) {
        coords = [...coords, {x:x,y:y,len:length}]
        y += 20;
        genCantor(x,y,length/3);
        genCantor(x+length*2/3,y,length/3);
    }
      }

    const drawCantor = () => {
        genCantor()
        return coords.map((line) => (
            <div key={line.id}><Line x0={line.x} y0={line.y} x1={line.x + line.len} y1={line.y} /></div>
        ))
    }

    // const drawCantorDelayed = () => {
    //     genCantor()
    //     const interval = 1000
    //     return coords.forEach(function(el, index) {
    //         setTimeout(function () {
    //             console.log("Working");
                
    //             return <div key="line"><Line x0={el.x} y0={el.y} x1={el.x + el.len} y1={el.y} /></div>

    //         }, index * interval)
    //     })
    // }
   

   return (
       <div className="Cantor">
           {drawCantor()}
       </div>
   )
}