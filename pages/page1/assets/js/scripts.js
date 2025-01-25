document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let userInput = document.getElementById('nameInput').value;
    let namesArray = userInput.split(',').map(name => name.trim());
    let output = '';
    let vowelNames = [];
    for (let name of namesArray) {
        if (name.length > 0 && 'AEIOUaeiou'.includes(name.charAt(0))) {
            vowelNames.push(name);
        }
    }
    output += `Names that start with a vowel: ${vowelNames.join(', ') || 'None'}<br>`;
    output += `Total names starting with a vowel: ${vowelNames.length}`;
    document.getElementById('nameOutput').innerHTML = output; 
});

document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let userInput = parseInt(document.getElementById('numberInput').value);
    let output = '';

    if (userInput % 2 === 0) {
        output += `${userInput} is an even number.<br>`;
    } else {
        output += `${userInput} is an odd number.<br>`;
    }

    let sum = 0;
    for (let i = 1; i <= userInput; i++) {
        sum += i;
    }
    output += `The sum of all numbers from 1 to ${userInput} is ${sum}.`;
    document.getElementById('numberOutput').innerHTML = output;
});