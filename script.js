let inputField = document.querySelector('.input-field');
let output = document.querySelector('.answer');
let goButton = document.querySelector('.btn'); 

function ageCalculator(){
    let inputValue = inputField.value;
    let outputText = inputValue * 365;
    output.innerHTML = 'You have lived ' + outputText + ' days!';

    if(inputValue == ''){
        output.innerHTML = '';
    }

}

