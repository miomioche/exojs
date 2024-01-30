
const randomButton = document.querySelector("#randomButton");
const copyButton = document.querySelector("#copyButton");
const picker1 = document.querySelector("#color1-input");
const picker2 = document.querySelector("#color2-input");
const angle = document.querySelector("#angle");



const hexNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

let hex1 = "";
let hex2 = "";
let deg = "";



let updateBackground = () => {
    document.body.style.background = `linear-gradient(${deg}deg, #${hex1}, #${hex2})`;
}

let updateInput = () => {
    picker1.value = "#" + hex1;
    picker2.value = "#" + hex2;
    angle.value = deg;
}

let updateText = () => {
    document.querySelector("#deg-value").innerHTML = deg + "°";
    document.querySelector("#hex1").innerHTML = "#" + hex1;
    document.querySelector("#hex2").innerHTML = "#" + hex2;
}



randomButton.addEventListener("click", () => {
    generateRandomHex()
})

let generateRandomHex = () => {
    hex1 = "";
    hex2 = "";
    deg = "";
    
    for (let i = 0; i < 6; i++) {    
        hex1 += hexNumbers[Math.floor(Math.random() * hexNumbers.length)];
        hex2 += hexNumbers[Math.floor(Math.random() * hexNumbers.length)]
    }
    
    deg = Math.floor(Math.random() * 360);
    
    updateBackground();
    updateText();
    updateInput();
}



let transferPick = () => {
    hex1 = picker1.value;
    hex2 = picker2.value;
    deg = angle.value;
    document.body.style.background = `linear-gradient(${deg}deg, ${hex1}, ${hex2})`;
    console.log(hex1)
    document.querySelector("#deg-value").innerHTML = deg + "°";
    document.querySelector("#hex1").innerHTML = hex1;
    document.querySelector("#hex2").innerHTML = hex2;
}

picker1.addEventListener("input", transferPick);
picker2.addEventListener("input", transferPick);
angle.addEventListener("input", transferPick);



copyButton.addEventListener("click", () => {
    copyGradient()
})

let confirmCopy = () => {
    copyButton.innerText = "Copié \\o/";
    copyButton.style.color = "green";
}

let copyGradient = () => {
    const gradient = `linear-gradient(${deg}deg, #${hex1}, #${hex2});`;
    navigator.clipboard.writeText(gradient);
    confirmCopy();
    setTimeout(function() {
        copyButton.innerText = "Copier";
        copyButton.style.color = "black";
    }, 2000)
}