/**
 * u(t) = UEnde - (UEnde - UAnfang)*Math.pow(e, -t/T)
 * T = R*C
 * R = Widerstand
 * C = Kapazität
 *
 */

// UC(t) = UEnde - (UEnde - UAnfang) * e^(-t/T);
UC = (t) => UEnde - (UEnde - UAnfang) * Math.pow(Math.E, -t / T);
IC = (t) => IEnde - (IEnde - IAnfang) * Math.pow(Math.E, -t / T);

//Aufgabe 1
R = 3.3 * Math.pow(10, 3); //Ohm
C = 680 * Math.pow(10, -9); //nF (nano Farad)
U0 = 1.5; //V

T = R * C;
t = 0;

UEnde = 50;
UAnfang = 100;
console.log("T", T);
console.log("UCt", UC(0), UC(T));

//Aufgabe 2
R = 2 * Math.pow(10, 3); // Ohm
C = 1 * Math.pow(10, -6); // F
UE = (t) => (t < 0 ? 0 : 5); //V
UAnfang = 0; // V
UEnde = 5; // V
console.log("UC-1", UC(-1), "UC0", UC(0), "UC1", UC(1));
RP = R / 2;
T = RP * C;
console.log("T", T, "s");

// Formel: UC = (t) = (UAnfang - UEnde) * Math.pow(Math.E, -t/T) + UEnde
UR = (t) => (UAnfang - UEnde) * Math.pow(Math.E, -t / T) + UEnde;
UA = (t) => UR(t) / 2;
console.log("UA(0)", UA(0), "UA(1)", UA(1), UA(0.001));

//Aufgabe 3
h1 = 100;
h2 = 0;
h1e = 50;
h2e = 50;
A = 100; //cm^2 // Grundfläche
hAnfang = h1;
hEnde = h1e;
//VStrom = DeltaV/DeltaT
DeltaH = h1e;
DeltaV = A * DeltaH;
DeltaT = 10; // Füllgeschwindigkeit
VStrom = DeltaV / DeltaT; // in s
console.log(VStrom);
h = (t) => hEnde - (hEnde - hAnfang) * Math.pow(Math.E, -t / T);

//Aufgabe 4
// Dioden verschiedene Sichtweisen. Modelle beachten, weil der Graph merkwürdig aussieht
R = 100; // OHM
I = 0.050; //A
U = 1; //V
RD = U/I;
console.log(RD);
ID = U/RD;
console.log(ID);
//0 = -U0+UD+UR

