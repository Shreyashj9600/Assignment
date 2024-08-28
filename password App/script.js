const lowercaseLetters = document.querySelector("#lowercaseLetters");
const includedigits = document.querySelector("#digits");
const upperCase = document.querySelector("#upperCase");
const symbols = document.querySelector("#symbols");
const inputReage = document.querySelector(".length");
const generateBtn = document.querySelector('.generate')
const copy = document.querySelector('.copy');

let inpuLength = 4

inputReage.addEventListener('input', (event) => {
    inpuLength = event.target.value
    Generate()
})

const Generate = () => {
    let GeneratedPassword = "";

    if (lowercaseLetters.checked) {
        GeneratedPassword += 'abcdefghijklmnopqrstuvwxyz';
    }

    if (includedigits.checked) {
        GeneratedPassword += '0123456789';
    }

    if (upperCase.checked) {
        GeneratedPassword += 'ABCDEJGHIJKLMNOPQRSTUVWXYZ';
    }

    if (symbols.checked) {
        GeneratedPassword += '!@#$%^&*()_+{}[]~`/\?|';
    }

    if (GeneratedPassword === "") {
        alert("Please select at least one character type.");
        return;
    }
    let password = "";
    for (let i = 0; i < inpuLength; i++) {
        let RandomChar = Math.floor(Math.random() * GeneratedPassword.length)
        password = password + GeneratedPassword[RandomChar]
    }
    document.querySelector("#passwordField").value = password;
}

generateBtn.addEventListener('click', () => {
    Generate()
})

copy.addEventListener('click', () => {
    console.log("btn working");
    
})