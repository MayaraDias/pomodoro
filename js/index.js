import Sound from './sound.js'

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')
let minutes = Number(displayMinutes.textContent)
let timerTimerOut

const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')

const buttonForest = document.querySelector('.florest')
const buttonRain = document.querySelector('.rain')

const sound = Sound()

/** ========= buttons ======================== */

function pressButtonPlayShowButtonPause() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')
  countDown()
  sound.pressButtonPlay()
}

function pressButtonPauseShowButtonPlay() {
  buttonPause.classList.toggle('hide')
  buttonPlay.classList.toggle('hide')
  pauseAndPlay()
  sound.pressButtonPlay()
}

function pressFlorest() {
  sound.audioFlorest()
}

buttonForest.addEventListener('click', pressFlorest)

function updateMinutes(newMinutes) {
  minutes = newMinutes
}

function pressButtonSetShowPrompt() {
  let newMinutes = Number(prompt('Quantos minutos?:'))
  displayMinutes.textContent = newMinutes

  if (!newMinutes) {
    reset()
    return
  }

  updateDisplay(newMinutes, 0)
  updateMinutes(newMinutes)
}

function pressButtonStopResetControls() {
  buttonStop.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
}

buttonPlay.addEventListener('click', pressButtonPlayShowButtonPause)
buttonPause.addEventListener('click', pressButtonPauseShowButtonPlay)
buttonSet.addEventListener('click', pressButtonSetShowPrompt)
buttonStop.addEventListener('click', pressButtonStopResetControls)

/* ============= timer =================* */
function updateDisplay(newMinutes, seconds) {
  newMinutes = newMinutes === undefined ? minutes : newMinutes
  seconds = seconds === undefined ? 0 : seconds
  displayMinutes.textContent = String(newMinutes).padStart(2, '0')
  displaySeconds.textContent = String(seconds).padStart(2, '0')
}

function reset() {
  updateDisplay(minutes, 0)
  sound.pauseAndPlay()
  resetControls()
}

function resetControls() {
  buttonStop.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  buttonSet.classList.remove('hide')
}

function pauseAndPlay() {
  clearTimeout(timerTimerOut)
}

function addTime() {
  minutes = minutes + 5
  if (minutes > 90) {
    minutes = 0
  }
  displayMinutes.textContent = String(minutes).padStart(2, '0')
}

function minusTime() {
  minutes = minutes - 5
  if (minutes < 0) {
    minutes = 0
  }
  displayMinutes.textContent = String(minutes).padStart(2, '0')
}

buttonPlus.addEventListener('click', addTime)
buttonMinus.addEventListener('click', minusTime)

function countDown() {
  timerTimerOut = setTimeout(function () {
    let seconds = Number(displaySeconds.textContent)
    let minutes = Number(displayMinutes.textContent)

    updateDisplay(minutes, 0)

    if (minutes <= 0 && seconds <= 0) {
      reset()
      updateDisplay()
      sound.timerEnd()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateDisplay(minutes, String(seconds - 1))
    countDown()
  }, 1000)
}

buttonStop.addEventListener('click', reset)

/**================ SOUNDS ==================== */
