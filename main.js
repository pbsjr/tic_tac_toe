// player1 winning code
// if 1,2,3 === ex - player1 wins or
// if 4,5,6 === ex - player1 wins or
// if 7,8,9 === ex - player1 wins or
// if 1,4,7 === ex - player1 wins or
// if 2,5,8 === ex - player1 wins or
// if 3,6,9 === ex - player1 wins or
// if 1,5,9 === ex - player1 wins or
// if 3,5,9 === ex - player1 wins 
// else = tie


// if
// player2 winning code
// if 1,2,3 === oh - player2 wins or
// if 4,5,6 === oh - player2 wins or
// if 7,8,9 === oh - player2 wins or
// if 1,4,7 === oh - player2 wins or
// if 2,5,8 === oh - player2 wins or
// if 3,6,9 === oh - player2 wins or
// if 1,5,9 === oh - player2 wins or
// if 3,5,9 === oh - player2 wins 
// else = tie


// click button to start game
const startGame = document.getElementById('button');
startGame.addEventListener('click', function(){
  alert('Let The Game Begin')
});
console.log('startGame is working');



// players
const playerOne = {
  name: 'ex', // X
};

const playerTwo = {
  name: 'oh', // O
};


// attaching variables to divs in the dom
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');



// function to turn divs to X

// box one
const boxOne = document.getElementById('one');

boxOne.addEventListener('click', function(){

const exOh = document.getElementById('one');

let exOhSwitch = exOh.innerHTML;

exOh.innerHTML = '<a><img src="http://i.imgur.com/jeaH6JJ.jpg" title="source: imgur.com"></a>';


// test
const boxOneOh = document.getElementById('one');
boxOneOh.addEventListener('click', function(){
const exOh = document.getElementById('one');
let exOhSwitch = exOh.innerHTML;
exOh.innerHTML = '<a><img src="http://i.imgur.com/HnDHKbp.jpg" title="source: imgur.com" /></a>';


});
});

//box two
const boxTwo = document.getElementById('two');
boxTwo.addEventListener('click', function(){
const exOh = document.getElementById('two');
let exOhSwitch = exOh.innerHTML;
exOh.innerHTML = '<a><img src="http://i.imgur.com/jeaH6JJ.jpg" title="source: imgur.com"></a>';

const boxTwoOh = document.getElementById('two');
boxTwoOh.addEventListener('click', function(){
const exOh = document.getElementById('two');
let exOhSwitch = exOh.innerHTML;
exOh.innerHTML = '<a><img src="http://i.imgur.com/HnDHKbp.jpg" title="source: imgur.com" /></a>';

});
});

// box three
const boxThree = document.getElementById('three');
boxThree.addEventListener('click', function(){
const exOh = document.getElementById('three');
let exOhSwitch = exOh.innerHTML;
exOh.innerHTML = '<a><img src="http://i.imgur.com/jeaH6JJ.jpg" title="source: imgur.com"></a>';

const boxThreeOh = document.getElementById('three');
boxThreeOh.addEventListener('click', function(){
const exOh = document.getElementById('three');
let exOhSwitch = exOh.innerHTML;
exOh.innerHTML = '<a><img src="http://i.imgur.com/HnDHKbp.jpg" title="source: imgur.com" /></a>';
});
});

// box Four
const boxFour = document.getElementById('four');
boxFour.addEventListener('click', function(){
const exOh = document.getElementById('four');
let exOhSwitch = exOh.innerHTML;
exOh.innerHTML = '<a><img src="http://i.imgur.com/jeaH6JJ.jpg" title="source: imgur.com"></a>';

const boxFourOh = document.getElementById('four');
boxFourOh.addEventListener('click', function(){
const exOh = document.getElementById('four');
let exOhSwitch = exOh.innerHTML;
exOh.innerHTML = '<a><img src="http://i.imgur.com/HnDHKbp.jpg" title="source: imgur.com" /></a>';
});
});



// box five
const boxFive = document.getElementById('five');
boxFive.addEventListener('click', function(){
const exOh = document.getElementById('five');
let exOhSwitch = exOh.innerHTML;
exOh.innerHTML = '<a><img src="http://i.imgur.com/jeaH6JJ.jpg" title="source: imgur.com"></a>';


const boxFiveOh = document.getElementById('five');
boxFiveOh.addEventListener('click', function(){
const exOh = document.getElementById('five');
let exOhSwitch = exOh.innerHTML;
exOh.innerHTML = '<a><img src="http://i.imgur.com/HnDHKbp.jpg" title="source: imgur.com" /></a>';
});
});


// box six
const boxSix = document.getElementById('six');
boxSix.addEventListener('click', function(){
const exOh = document.getElementById('six');
let exOhSwitch = exOh.innerHTML;
exOh.innerHTML = '<a><img src="http://i.imgur.com/jeaH6JJ.jpg" title="source: imgur.com"></a>';

const boxSixOh = document.getElementById('six');
boxSixOh.addEventListener('click', function(){
const exOh = document.getElementById('six');
let exOhSwitch = exOh.innerHTML;
exOh.innerHTML = '<a><img src="http://i.imgur.com/HnDHKbp.jpg" title="source: imgur.com" /></a>';
});
});



// box seven
const boxSeven = document.getElementById('seven');
boxSeven.addEventListener('click', function(){
const exOh = document.getElementById('seven');
let exOhSwitch = exOh.innerHTML;
exOh.innerHTML = '<a><img src="http://i.imgur.com/jeaH6JJ.jpg" title="source: imgur.com"></a>';

const boxSevenOh = document.getElementById('seven');
boxSevenOh.addEventListener('click', function(){
const exOh = document.getElementById('seven');
let exOhSwitch = exOh.innerHTML;
exOh.innerHTML = '<a><img src="http://i.imgur.com/HnDHKbp.jpg" title="source: imgur.com" /></a>';
});
});





// box 8
const boxEight = document.getElementById('eight');
boxEight.addEventListener('click', function(){
const exOh = document.getElementById('eight');
let exOhSwitch = exOh.innerHTML;
exOh.innerHTML = '<a><img src="http://i.imgur.com/jeaH6JJ.jpg" title="source: imgur.com"></a>';


const boxEightOh = document.getElementById('eight');
boxEightOh.addEventListener('click', function(){
const exOh = document.getElementById('eight');
let exOhSwitch = exOh.innerHTML;
exOh.innerHTML = '<a><img src="http://i.imgur.com/HnDHKbp.jpg" title="source: imgur.com" /></a>';
});
});


// box 9
const boxNine = document.getElementById('nine');
boxNine.addEventListener('click', function(){
const exOh = document.getElementById('nine');
let exOhSwitch = exOh.innerHTML;
exOh.innerHTML = '<a><img src="http://i.imgur.com/jeaH6JJ.jpg" title="source: imgur.com"></a>';

const boxNineOh = document.getElementById('nine');
boxNineOh.addEventListener('click', function(){
const exOh = document.getElementById('nine');
let exOhSwitch = exOh.innerHTML;
exOh.innerHTML = '<a><img src="http://i.imgur.com/HnDHKbp.jpg" title="source: imgur.com" /></a>';
});
});






// to figure out winner. not working yet. 
 function ticTacToe(playerOne, playerTwo) {
  let playerOne = 'ex';
  let playerTwo = 'oh';
// Tie
 if (one, two, three !== 'ex' || 'oh' && four, five, six !== 'ex' || 'oh' && seven, eight, nine  !== 'ex' || 'oh' && one, four, seven !== 'ex' || 'oh' && two, five, eight !== 'ex' || 'oh' &&  three, six, nine !== 'ex' || 'oh'){ 
 return 'Its a tie, try again';
 } 
// X Wins
 else if (one, two, three === 'ex' || four, five, six === 'ex' || seven, eight, nine === 'ex' || one, four, seven === 'ex' || two, five, eight === 'ex' || three, six, nine === 'ex'){
  return `${playerOne.name} is the winner!`;
 } 
// O Wins
 else if (one, two, three === 'oh' || four, five, six === 'oh' || seven, eight, nine === 'oh' || one, four, seven === 'oh' || two, five, eight === 'oh' || three, six, nine === 'oh'){
  return `${playerTwo.name} is the winner!`;
 }
 }



