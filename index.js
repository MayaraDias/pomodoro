/* ========= variables =======================* */
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

const buttonForest = document.querySelector('.card1')

/** ========= buttons ======================== */

function pressButtonPlayShowButtonPause() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')
  countDown()
  pressButtonPlay()
}

function pressButtonPauseShowButtonPlay() {
  buttonPause.classList.toggle('hide')
  buttonPlay.classList.toggle('hide')
  pauseAndPlay()
  pressButtonPlay()
}

function pressCard1() {
  audioForest()
}

buttonForest.addEventListener('click', pressCard1)

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
  pauseAndPlay()
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

    if (minutes <= 0 && seconds <= 00) {
      reset()
      updateDisplay()
      timerEnd()
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
const buttonPressAudio = new Audio(
  'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
)
const kitchenTimer = new Audio(
  'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
)

const bgAudioForest = new Audio('https://github.com/')

function pressButtonPlay() {
  buttonPressAudio.play()
}

function timerEnd() {
  kitchenTimer.play()
}

function audioForest() {
  bgAudioForest.play()
}
