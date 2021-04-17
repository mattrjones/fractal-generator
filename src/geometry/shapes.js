import { Line } from 'react-lineto'

export function drawLine(x, y, length){
    return (
        <div className="line">
            <Line x0={x} y0={y} x1={x + length} y1={y} />
        </div>
    )
}