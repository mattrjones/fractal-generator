import { Line } from 'react-lineto'

export default function Cantor(){

    let coords = []

   const genCantor = (x=0, y=10, length=1374) => {     
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
            <div key="line"><Line x0={line.x} y0={line.y} x1={line.x + line.len} y1={line.y} /></div>
        ))
    }
   

   return (
       <div className="Cantor">
           {drawCantor()}
       </div>
   )
}