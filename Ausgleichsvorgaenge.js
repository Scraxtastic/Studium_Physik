/**
 * u(t) = UEnde - (UEnde - UAnfang)*Math.pow(e, -t/T)
 * T = R*C
 * R = Widerstand
 * C = Kapazität
 *
 */


// UC(t) = UEnde - (UEnde - UAnfang) * e^(-t/T);
UC = (t) => UEnde - (UEnde - UAnfang) * Math.pow(Math.E, -t / T);
IC = (t) => IEnde - (IEnde - IAnfang) * Math.pow(Math.E, -t/T );

R = 3.3 * Math.pow(10, 3); //Ohm
C = 680 * Math.pow(10, -9); //nF (nano Farad)
U0 = 1.5; //V

T = R * C;
t = 0;

UEnde = 50;
UAnfang = 100;
console.log("T", T);
console.log("UCt", UC(0), UC(T));
