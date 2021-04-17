import { drawLine } from '../geometry/shapes'

export default function Cantor(){

   function cantor(x, y, length) {     
    if (length >= 1) {
        drawLine(x,y,x+length);
        y += 20;
        cantor(x,y,length/3);
        cantor(x+length*2/3,y,length/3);
      }
   }

   return (
       <div className="Cantor">
           {drawLine(0,10,1374)}
       </div>
   )
}