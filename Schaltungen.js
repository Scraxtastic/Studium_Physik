/* Formeln
    U = R*I => I = U/R => R = U/I
    0 = u1 + u2 + ... - u0
    U0 = u1+u2+...


    R = Widerstand in Ohm
    U = Spannung in Volt
    i = Strom in Amper


    parallele Widerstände =
    RGes = 1/R1 + 1/R2 ...
    Rges = (R1*R2...)/(R1+R2...)
*/

/*  Googlen
 * Maschenregel
 */
// Konsanten
let I = 1 // Amper
let k = 1000

// Aufgaben

//Aufgabe 1

let R1 = 1 * k //*ohm
let R2 = 2.7 * k //*ohm
let UL = 4.5 //Volt

let U1 = R1 * I
let U2 = R2 * I
//UL = U1+U2;
//i = UL/(R1+R2)
I = UL / (R1 + R2)

//Aufgabe 2

R1 = 4.7 * k //*ohm
R2 = 820 //*ohm
I = 0.005 //Amper
R = (R1 * R2) / (R1 + R2)

UR1 = I * R1

//Aufgabe 3?
//a)
//R1 & R3 sind parallel

R1 = 820
R2 = 2.7 * k
let R3 = 1.5 * k

R = (R2 * (R1 + R3)) / (R2 + (R1 + R3))
console.log(`R = ${R} ohm`)

R1 = 10 * k
R2 = 4.2 * k
R3 = 8.7 * k

Rp = (R2 * R3) / (R2 + R3)
R = R1 + Rp
console.log(`R = ${R} ohm`)

//Aufgabe 6

console.log("Aufgabe 6")
R0 = 5
R1 = 10
R2 = 20
UB = 7 // Volt

R12 = (R1 * R2) / (R1 + R2)
I0 = UB / (R0 + R12)
console.log(`i0 = ${I0}`)

U2 = I0 * R12
I1 = U2 / R1
I2 = U2 / R2
console.log(`u2: ${U2}, I1: ${I1}, I2: ${I2}`)

//Aufgabe 7?

I0 = 0.003
U0 = 1.2 //Volt
RA = 2.4 * k // Ohm
RB = 3.6 * k // Ohm

//Innenwiderstand RI
RI = RA + RB

//Kurzschlussstrom IK

//Uers => U Ersatz
RAB = (RA * RB) / (RA + RB)
Uers = I0 * RAB
IK = Uers / RB
console.log(`RI: ${RI}, IK = ${IK}`)

/**
 * _____RB_____A
 * | |
 * I RA
 * | |
 * |_|_________B
 */

/**
 * ___RA____RB____A
 * |
 * U
 * |
 * |______________B
 *
 */

/**
 * ____RA+RB_____A
 * |
 * U
 * |
 * |_____________B
 */
