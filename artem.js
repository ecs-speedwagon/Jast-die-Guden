const firstNum = document.querySelector('#numbers > form > input:nth-of-type(1)');
const secondNum = document.querySelector('#numbers > form > input:nth-of-type(2)');
const thirdNum = document.querySelector('#numbers > form > input:nth-of-type(3)');
const exit = document.querySelector('#urNum');
function maxNum() {
    const num1 = Number(firstNum.value);
    const num2 = Number(secondNum.value);
    const num3 = Number(thirdNum.value);
    if (firstNum.value || secondNum.value || thirdNum.value) {
        const max = Math.max(num1, num2, num3);
        exit.textContent = max;
    } else {
        exit.textContent = '';
    }
}

firstNum.addEventListener('input', maxNum);
secondNum.addEventListener('input', maxNum);
thirdNum.addEventListener('input', maxNum);


// const scientists = [ 
//     { 
//         name: "Albert", 
//         surname: "Einstein", 
//         born: 1879, 
//         dead: 1955, 
//         id: 1 
//     }, 
//     { 
//         name: "Isaac", 
//         surname: "Newton", 
//         born: 1643, 
//         dead: 1727, 
//         id: 2 
//     }, 
//     { 
//         name: "Galileo", 
//         surname: "Galilei", 
//         born: 1564, 
//         dead: 1642, 
//         id: 3 
//     }, 
//     { 
//         name: "Marie", 
//         surname: "Curie", 
//         born: 1867, 
//         dead: 1934, 
//         id: 4 
//     }, 
//     { 
//         name: "Johannes", 
//         surname: "Kepler", 
//         born: 1571, 
//         dead: 1630, 
//         id: 5 
//     }, 
//     { 
//         name: "Nicolaus", 
//         surname: "Copernicus", 
//         born: 1473, 
//         dead: 1543, 
//         id: 6 
//     }, 
//     { 
//         name: "Max", 
//         surname: "Planck", 
//         born: 1858, 
//         dead: 1947, 
//         id: 7 
//     }, 
//     { 
//         name: "Katherine", 
//         surname: "Blodgett", 
//         born: 1898, 
//         dead: 1979, 
//         id: 8 
//     }, 
//     { 
//         name: "Ada", 
//         surname: "Lovelace", 
//         born: 1815, 
//         dead: 1852, 
//         id: 9 
//     }, 
//     { 
//         name: "Sarah E.", 
//         surname: "Goode", 
//         born: 1855, 
//         dead: 1905, 
//         id: 10 
//     }, 
//     { 
//         name: "Lise", 
//         surname: "Meitner", 
//         born: 1878, 
//         dead: 1968, 
//         id: 11 
//     }, 
//     { 
//         name: "Hanna", 
//         surname: "Hammarström", 
//         born: 1829, 
//         dead: 1909, 
//         id: 12 
//     } 

const container = document.querySelector('.football-field');
const ball = document.querySelector('.ball');
container.addEventListener("mousemove", function(e) {
    let x = e.offsetX;
    let y = e.offsetY;
    ball.style.top = y + 'px';
    ball.style.left = x +'px';    
  });



const slider = document.querySelectorAll('.team-member');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
const rect = document.querySelectorAll('.rect-svg');


let elIndex = 0;
let svgIndex = 0;

function hendlerElshow(){
    slider.forEach((el,index)=>{
        if(index === elIndex){
            el.style.display = 'block';
        }
        else{
            el.style.display = 'none';
        }
    }) ;

    rect.forEach((rect,index)=>{
        if(index === svgIndex){
            rect.classList.add('svg-active');
        }
        else{
            rect.classList.remove('svg-active');
        }
    }) ;
    if( elIndex ===slider.length - 1){
        rightArrow.style.display = 'none'
    }
    else{
        rightArrow.style.display = 'block'
    };
    if(elIndex === 0 ){
        leftArrow.style.display ='none'
    }
    else{
        leftArrow.style.display ='block'
    }
};
leftArrow.addEventListener('click', function(){
    elIndex --;
    svgIndex --;
    hendlerElshow()
});
rightArrow.addEventListener('click', function(){
    elIndex ++;
    svgIndex ++;
    hendlerElshow()
})
hendlerElshow();