document.querySelector('.serch-button').addEventListener('click',function(){
const input= document.querySelector('.serch-input').value.trim();
const year= parseInt(input);
const resultElement= document.querySelector('.grean-p');
if (isNaN(year) || year <= 0){
    resultElement.textContent= "Будь ласка,введіть правильний рік!";
    resultElement.style.color= "red";
    return;
}
const isLeapYear= (year % 4=== 0 && year % 100 !== 0) || (year % 400=== 0);
if (isLeapYear){
    resultElement.textContent= year + " - це високосний рік! ";
    resultElement.style.color= "$green-color";
} 
else{
    resultElement.textContent= year + " - це не високосний рік.";
    resultElement.style.color= "$green-color";
}
});


document.addEventListener('DOMContentLoaded',function(){
const inputField= document.querySelector('.input-serch');
const searchButton= document.querySelector('.button-serch');
const resultText= document.querySelector('.guess-grean-p');
searchButton.addEventListener('click',function(){
const userGuess= parseInt(inputField.value);
if(isNaN(userGuess) || userGuess < 1 || userGuess > 10){
    resultText.textContent= 'Будь ласка,введіть число від 1 до 10!';
    return;
}
const computerNumber= Math.floor(Math.random() * 10) + 1;
if(userGuess=== computerNumber){
    resultText.textContent= 'Ви вгадали!';
} 
else{
    resultText.textContent= 'Неправильно! Правильне число було. Спробуйте ще раз!';
}
});
});


document.addEventListener('DOMContentLoaded',function(){
let playerWins= 0;
let computerWins= 0;
let roundsPlayed= 0;
let playerChoice= null;
const scoreDisplay= document.querySelector('.rps-p');
const resultDisplay= document.querySelector('.rps-grean-p');
const computerChoiceDisplay= document.querySelector('.basick-black-bttn');
const buttons={
    rock: document.querySelector('.rock'),
    scissors: document.querySelector('.sissers'),
    paper: document.querySelector('.paper')
};
Object.entries(buttons).forEach(([choice,button])=>{
button.addEventListener('click',function(){
    playerChoice= choice;
    resetHighlights();
    button.style.border= '3px solid #4CAF50';
    button.style.transform= 'scale(1.1)';
});
});
document.querySelector('.basick-black-bttn').addEventListener('click',function(){
if (!playerChoice){
    resultDisplay.textContent= 'Будь ласка,зробіть вибір!';
    return;
}
const computerChoice= getComputerChoice();
computerChoiceDisplay.textContent= getChoiceText(computerChoice);
const result= getRoundResult(playerChoice,computerChoice);
updateScore(result);
resetHighlights();
playerChoice= null;
})
function getComputerChoice(){
    const choices= ['rock','scissors','paper'];
    let choice= choices[Math.floor(Math.random() * 3)];
    if (choice=== playerChoice && Math.random() > 0.3){
        choice= choices.find(c=> c !== playerChoice);
}
    return choice || choices[Math.floor(Math.random() * 3)];
}
function getChoiceText(choice){
    const texts={'rock': 'Камінь','scissors': 'Ножиці','paper': 'Папір'};
    return `Комп'ютер обрав: ${texts[choice]}`;
}
function getRoundResult(player,computer){
    if (player=== computer) return 'draw';
    const wins={'rock': 'scissors','scissors': 'paper','paper': 'rock'};
    return wins[player]=== computer ? 'win' : 'lose';
}
function updateScore(result){
roundsPlayed++;
if (result=== 'win'){
    playerWins++;
    resultDisplay.textContent= 'Ви виграли раунд!';
    resultDisplay.style.color= '#4CAF50';
} else if (result=== 'lose'){
    computerWins++;
    resultDisplay.textContent= 'Комп\'ютер виграв раунд!';
    resultDisplay.style.color= '#F44336';
} else{
    resultDisplay.textContent= 'Нічия!';
    resultDisplay.style.color= '#FFC107';
}
scoreDisplay.textContent= `Раундів: ${roundsPlayed} | Ви: ${playerWins} | Комп'ютер: ${computerWins}`;
}
function resetHighlights(){
Object.values(buttons).forEach(btn=>{
    btn.style.border= '';
    btn.style.transform= ''
})
}
});
document.addEventListener('DOMContentLoaded',function(){
const firstInput= document.querySelector('.first-gray-input');
const secondInput= document.querySelector('.second-gray-input');
const output= document.querySelector('.gray-output');
const calculateBtn= document.querySelector('.calculate-operators');
let currentOperator= null;
output.style.display= 'none';
document.querySelector('.plus-operator').addEventListener('click',function(){
    currentOperator= '+'
})
document.querySelector('.minus-operator').addEventListener('click',function(){
    currentOperator= '-'
})
document.querySelector('.times-operato').addEventListener('click',function(){
    currentOperator= '*'
})
document.querySelector('.devide-operator').addEventListener('click',function(){
    currentOperator= '/'
})
calculateBtn.addEventListener('click',function(){
output.style.display= 'none';
if (!currentOperator){
    output.textContent= 'Виберіть операцію!';
    output.style.display= 'block';
    return;
}


const num1= parseFloat(firstInput.value);
const num2= parseFloat(secondInput.value);
if (isNaN(num1) || isNaN(num2)){
    output.textContent= 'Введіть коректні числа!';
    output.style.display= 'block';
    return;
}
let result;
let operationName;
switch(currentOperator){
    case '+':
        result= num1 + num2;
        operationName= 'Сума';
        break;
    case '-':
        result= num1 - num2;
        operationName= 'Різниця';
        break;
    case '*':
        result= num1 * num2;
        operationName= 'Добуток';
        break;
    case '/':
        if (num2=== 0){
            output.textContent= 'Ділення на нуль неможливе!';
            output.style.display= 'block';
            return;
        }
        result= num1 / num2;
        operationName= 'Частка';
        break;
}
    output.textContent= `${operationName} чисел ${num1} і ${num2}= ${result}`;
    output.style.display= 'block';
});
});


document.querySelector('.calculate-button').addEventListener('click',function(){
const minutesInput= document.querySelector('.time-input').value.trim();
const resultElement= document.querySelector('.calculated-p');
if (minutesInput=== '' || isNaN(minutesInput)){
    resultElement.textContent= 'Будь ласка,введіть число!';
    return;
}
const minutes= parseInt(minutesInput,10);
if (minutes < 0){
    resultElement.textContent= 'Число має бути додатнє!';
    return;
}
const hours= Math.floor(minutes / 60);
const remainingMinutes= minutes % 60;
resultElement.textContent= `${hours} год,${remainingMinutes} хв`;
})


document.addEventListener('DOMContentLoaded',function(){
const overlay= document.querySelector('.welcome-overlay');
const closeButton= document.querySelector('.close-buton');
const saveButton= document.querySelector('.enter-black-buttton');
const nameInput= document.querySelector('.overlay-input');
const headerP= document.querySelector('.header-p');
overlay.style.display= 'flex';
headerP.style.display= 'none';
closeButton.addEventListener('click',function(){
        overlay.style.display= 'none';
        headerP.style.display= 'block';
});
saveButton.addEventListener('click',function(){
const name= nameInput.value.trim();
const greetingText= name ? `Вітаємо,${name}!` : 'Вітаємо,User!'; 
headerP.textContent= greetingText;
overlay.style.display= 'none';
headerP.style.display= 'block';
localStorage.setItem('userName',name || 'User');
})
const savedName= localStorage.getItem('userName');
    if (savedName && savedName !== 'User') {
    headerP.textContent= `Вітаємо,${savedName}!`;
}
nameInput.addEventListener('keypress',function(e){
    if (e.key=== 'Enter') {
        saveButton.click();
    }
});
});