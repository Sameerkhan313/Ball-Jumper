const body = document.querySelector('body')

const divContainer = document.createElement('div')
divContainer.setAttribute('id', 'ballContainer')

const ball1 = document.createElement('div')
const ball2 = document.createElement('div')
const ball3 = document.createElement('div')
const ball4 = document.createElement('div')
const ball5 = document.createElement('div')

ball1.setAttribute('class', 'ball')
ball2.setAttribute('class', 'ball')
ball3.setAttribute('class', 'ball')
ball4.setAttribute('class', 'ball')
ball5.setAttribute('class', 'ball')

ball1.setAttribute('onclick', 'oneHandler()')
ball2.setAttribute('onclick', 'twoHandler()')
ball3.setAttribute('onclick', 'threeHandler()')
ball4.setAttribute('onclick', 'fourHandler()')
ball5.setAttribute('onclick', 'fiveHandler()')

divContainer.appendChild(ball1)
divContainer.appendChild(ball2)
divContainer.appendChild(ball3)
divContainer.appendChild(ball4)
divContainer.appendChild(ball5)

console.log(divContainer)

body.prepend(divContainer)


const balls = document.querySelectorAll(".ball");

console.log(balls, "==>>balls");

function oneHandler() {
  if (balls[0].classList.contains("ballJump")) {
    balls[0].classList.remove("ballJump");
  } else {
    balls[0].classList.add("ballJump");
  }
}
function twoHandler() {
  if (balls[1].classList.contains("ballJump")) {
    balls[1].classList.remove("ballJump");
  } else {
    balls[1].classList.add("ballJump");
  }
}
function threeHandler() {
  if (balls[2].classList.contains("ballJump")) {
    balls[2].classList.remove("ballJump");
  } else {
    balls[2].classList.add("ballJump");
  }
}
function fourHandler() {
  if (balls[3].classList.contains("ballJump")) {
    balls[3].classList.remove("ballJump");
  } else {
    balls[3].classList.add("ballJump");
  }
}
function fiveHandler() {
  if (balls[4].classList.contains("ballJump")) {
    balls[4].classList.remove("ballJump");
  } else {
    balls[4].classList.add("ballJump");
  }
}