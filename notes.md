We want to make a react app that uses recursive functions to draw basic fractals on the screen

We will need functions to draw basic shapes using divs that are styled to have a dark background

Line function - 
 
fn line(x,y,length) {
    creates div at point x,y on the screen
    continues to create dives at x+1,y...x+n,y where n is length
}

use react-lineto package to import "line" function

so cantor is:

fn cantor(x,y,length) {
    if (length >= 1) {
    drawLine(x,y,length);
    y += 20;
    cantor(x,y,len/3);
    cantor(x+len*2/3,y,len/3);
  }
}

fn drawLine(x,y,length) {
    return (
        <Line x=x, y=y x1=x+length  y1=y />
    )
}