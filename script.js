/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kilogramToPound = 2.204;

const btnConvert = document.getElementById('convert');
const input = document.getElementById('input');
const outputLengthEl = document.getElementById('outputLength');
const outputVolumeEl = document.getElementById('outputVolume');
const outputMassEl = document.getElementById('outputMass');

function lengthConverter(number) {
    let feet = number * meterToFeet;
    let meter = number / meterToFeet;

    return `<p>${number} meters = ${feet.toFixed(3)} feet | ${number} feet = ${meter.toFixed(3)} meters</p>
    `;
}

function volumeConverter(number) {
    let gallon = number * literToGallon;
    let liter = number / literToGallon;

    return `<p>${number} liters = ${gallon.toFixed(3)} gallons | ${number} gallons = ${liter.toFixed(3)} liters</p>
    `;
}


function massConverter(number) {
    let pound = number * kilogramToPound;
    let kilogram = number / kilogramToPound;
    return ` <p> ${number} kilograms = ${pound.toFixed(3)} pounds | ${number} pounds = ${kilogram.toFixed(3)} kilograms</p>
    `;
}

btnConvert.addEventListener("click", () => {

    let number = Math.abs( parseFloat(input.value) || 0);

    outputLengthEl.innerHTML = lengthConverter(number);
    outputVolumeEl.innerHTML = volumeConverter(number);
    outputMassEl.innerHTML = massConverter(number);
})