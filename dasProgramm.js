console.log("da bin ich!");

let accountObjectArray = [
    {
        kontoInhaberString: "Jakob",
        kontoStandNumber: -10
    },
    {
        kontoInhaberString: "Jürgen",
        kontoStandNumber: 20
    },
    {
        kontoInhaberString: "Patrick",
        kontoStandNumber: -12844
    }
];

const wechselKursNumber = 1.9558;
/*
function erzeuge_EuroBankkonten_ObjectArray_AusDMBankkonten_ObjectArray(einDMBankkontenObjectArray){
    console.log(einDMBankkontenObjectArray);
    const ergebnisArray = Array.from(einDMBankkontenObjectArray);
    for (kontonummer=0;kontonummer<einDMBankkontenObjectArray.length;kontonummer++){
        console.log ("kontonummer:"+ kontonummer+" bankkontenObject: "+JSON.stringify(einDMBankkontenObjectArray[kontonummer]));
        const aktuellesDMKonto = einDMBankkontenObjectArray[kontonummer];
        ergebnisArray[kontonummer].euroKontoStandNumber = aktuellesDMKonto.kontoStandNumber / wechselKursNumber;
        console.log ("kontonummer:"+ kontonummer+" bankkontenObject: "+JSON.stringify(ergebnisArray[kontonummer]));
     
    }
    return ergebnisArray; 
}
*/
/*
function erzeuge_EuroBankkonten_ObjectArray_AusDMBankkonten_ObjectArray(einDMBankkontenObjectArray){
    const ergebnisArray = Array.from(einDMBankkontenObjectArray);
    ergebnisArray.forEach(
        function(aktuellesDMKontoObject,kontonummer){
            console.log ("kontonummer:"+ kontonummer+" bankkontenObject: "+JSON.stringify(aktuellesDMKontoObject));
            einDMBankkontenObjectArray[kontonummer].euroKontoStandNumber = aktuellesDMKontoObject.kontoStandNumber / einEuroInDMNumber;
            console.log ("kontonummer:"+ kontonummer+" bankkontenObject: "+JSON.stringify(einDMBankkontenObjectArray[kontonummer]));         
        }
    )
    return ergebnisArray;
}
*/
/*
function erzeuge_EuroBankkonten_ObjectArray_AusDMBankkonten_ObjectArray(einDMBankkontenObjectArray){
    const ergebnisArray = Array.from(einDMBankkontenObjectArray);
    ergebnisArray.forEach(
        (aktuellesDMKontoObject,kontonummer) => {
            ergebnisArray[kontonummer].euroKontoStandNumber = aktuellesDMKontoObject.kontoStandNumber / wechselKursNumber;
        }
    )
    return ergebnisArray;
}
*/
function erzeuge_EuroBankkonten_ObjectArray_AusDMBankkonten_ObjectArray(einDMBankkontenObjectArray) {
    const ergebnisArray = einDMBankkontenObjectArray.map(
        (aktuellesDMKontoObject) => {
            const neuesEuroKonto = {
                kontoInhaberString: aktuellesDMKontoObject.kontoInhaberString,
                dmKontoStandNumber: aktuellesDMKontoObject.kontoStandNumber,
                euroKontoStandNumber: aktuellesDMKontoObject.kontoStandNumber / wechselKursNumber
            }
            console.log(neuesEuroKonto);
            return neuesEuroKonto;
        }
    )
    return ergebnisArray;
}


const euroBankkontenObjectArray = erzeuge_EuroBankkonten_ObjectArray_AusDMBankkonten_ObjectArray(accountObjectArray);

console.log(euroBankkontenObjectArray);