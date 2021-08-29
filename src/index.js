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

let state = Object.assign({}, INITIAL_STATE)

const reset = () => {
  state = {
    ...INITIAL_STATE
  }
  plates.forEach(plate => plate.checked = false)
  barFortyFive.checked = true
  total.innerText = state.bar
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

const calculate = () => {
  let plateArray = []
  Object.entries(state).forEach(el => {
    if (el[0] !== "bar" && el[1]) {
      plateArray.push( Number(el[0]) * el[1] )
    }
  })
  plateArray.push(state.bar)
  result = plateArray.reduce((acc, total) => acc + total)
  total.innerText = result
}

const updateBar = e => {
  state.bar = Number(e.target.value)
  calculate()
}

const updateValue = e => {
  if (!state[e.target.value]) {
    state[e.target.value] = 2
  } else {
    state[e.target.value] = null
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