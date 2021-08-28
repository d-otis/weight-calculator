const INITIAL_STATE = {
  bar: 45,
  45: null,
  35: null,
  25: null,
  15: null,
  10: null,
  5: null,
  2.5: null
}

let weightObj = Object.assign({}, INITIAL_STATE)

const reset = () => {
  weightObj = {
    ...INITIAL_STATE
  }
  plates.forEach(plate => plate.checked = false)
  total.innerText = weightObj.bar
} 

let result

const form = document.getElementById("form")

const barFortyFive = document.getElementById("bar-45")
const barThirtyFive = document.getElementById("bar-35")

const fortyFive = document.getElementById("plate-45")
const thirtyFive = document.getElementById("plate-35")
const twentyFive = document.getElementById("plate-25")
const fifteen = document.getElementById("plate-15")
const ten = document.getElementById("plate-10")
const five = document.getElementById("plate-5")
const twoAndHalf = document.getElementById("plate-2.5")

const plates = [
  fortyFive,
  thirtyFive,
  twentyFive,
  fifteen,
  ten,
  five,
  twoAndHalf
]

const clear = document.getElementById("clear")

const total = document.getElementById("total")

const animate = document.getElementById("animate")

animate.addEventListener("webkitAnimationEnd", e => {
  e.target.removeAttribute('class')
})

animate.addEventListener("animationend", e => {
  e.target.removeAttribute('class')
})

const calculate = () => {
  let plateArray = []
  Object.entries(weightObj).forEach(el => {
    if (el[0] !== "bar" && el[1]) {
      plateArray.push( Number(el[0]) * el[1] )
    }
  })
  plateArray.push(weightObj.bar)
  result = plateArray.reduce((acc, total) => acc + total)
  total.innerText = result
  animate.classList.add("animate__animated", "animate__pulse")
}

const updateBar = e => {
  weightObj.bar = Number(e.target.value)
  calculate()
}

const updateValue = e => {
  if (!weightObj[e.target.value]) {
    weightObj[e.target.value] = 2
  } else {
    weightObj[e.target.value] = null
  }
  calculate()
}

barFortyFive.onchange = updateBar
barThirtyFive.onchange = updateBar

fortyFive.onchange = updateValue
thirtyFive.onchange = updateValue
twentyFive.onchange = updateValue
fifteen.onchange = updateValue
ten.onchange = updateValue
five.onchange = updateValue
twoAndHalf.onchange = updateValue

clear.onclick = () => {
  reset()
  console.log('reset')
}