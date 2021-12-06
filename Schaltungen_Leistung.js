/** LEISTUNG
 * P = U*I
 * U = R*I
 *
 */

/**  Ri   I0
 * __[]->--
 * |       |
 * = U0    []R2
 * |_______|
 */

// Aufgabe 11

Ri = 2 //Ohm
RL = 22 //Ohm
U0 = 12 //V
I0 = U0 / (Ri + RL)
URi = Ri * I0
URL = RL * I0
console.log("U0", U0, "I0", I0, "URi", URi, "URL", URL)
Pi = URi * I0
PL = URL * I0
console.log("I0", I0, "Pi", Pi, "PL", PL)
P0 = Pi + PL
console.log("P0", P0)

// Aufgabe 12

RA = 2 //Ohm
RB = 20 //Ohm
U0 = 5 //V

PA = Math.pow(U0, 2) / RA
PB = Math.pow(U0, 2) / RB
console.log("PA", PA, "PB", PB)
//RErs = PA||PB
RErs = (RA * RB) / (RA + RB)
console.log("RErs", RErs)
P0 = Math.pow(U0, 2) / RErs
console.log("P0", P0)

// Aufgabe 13
console.log()
PN = 0.8 //Watt
UN = 1.2 //Volt
RL = Math.pow(UN, 2) / PN
console.log("RL", RL)
IN = PN / UN
console.log("IN", IN)
R = UN / IN
console.log("R", R)
//Die Spannung die durch den Widerstand weggenommen werden soll;
UV = 0.3 //V
RV = UV / IN
console.log("RV", RV)
PV = UV * IN
console.log("PV", PV)
