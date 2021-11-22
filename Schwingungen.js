//Faden
//T=2 pi * sqrt(l/g)
//1/T = 1/2 pi * sqrt(g/l)

let l = 1; // m
let g = 10; // m/s^2
let c = 1;  //Herleitung??? => Federkonstante
let m = 1 // Masse in Kg
let s = 0.01; // m

let t = 2 * Math.PI * Math.sqrt(l/g);
let _1_t = (1/2*Math.PI) * Math.sqrt(g/l);


//Federpendel
let tFeder = (2*Math.PI)*Math.sqrt(m/c);

// f & f2 => frequenz in Hz
let f = (1/2*Math.PI) * Math.sqrt(c/m);
let f2 = (1/2*Math.PI) * Math.sqrt(g/s);

//G-<Kraft
let fg = m*g;
//c/m = g/deltaS

