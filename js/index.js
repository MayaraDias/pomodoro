import Sound from './sound.js'
import Timer from './timer.js'
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonPlus,
  buttonMinus,
  buttonForest,
  buttonRain,
  buttonStore,
  buttonFire,
  displayMinutes,
  displaySeconds,
  timerTimerOut
} from './elements.js'

let minutes = Number(displayMinutes.textContent)

const sound = Sound()

const timer = Timer({
  displayMinutes,
  displaySeconds,
  timerTimerOut,
  reset,
  minutes
})

/** ========= buttons - controls ======================== */

function pressButtonPlayShowButtonPause() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')
  timer.countDown()
  sound.pressButtonPlay()
}

function pressButtonPauseShowButtonPlay() {
  buttonPause.classList.toggle('hide')
  buttonPlay.classList.toggle('hide')
  pauseAndPlay()
  sound.pressButtonPlay()
}

buttonPlay.addEventListener('click', pressButtonPlayShowButtonPause)
buttonPause.addEventListener('click', pressButtonPauseShowButtonPlay)
buttonSet.addEventListener('click', pressButtonSetShowPrompt)

function pressButtonSetShowPrompt() {
  let newMinutes = Number(prompt('Quantos minutos?:'))
  displayMinutes.textContent = newMinutes

  if (!newMinutes) {
    reset()
    return
  }

  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
}

function pressFlorest() {
  sound.audioFlorest()
}

function pressRain() {
  sound.audioRain()
}

function pressStore() {
  sound.audioStore()
}

function pressFire() {
  sound.audioFire()
}

buttonForest.addEventListener('click', pressFlorest)
buttonRain.addEventListener('click', pressRain)
buttonStore.addEventListener('click', pressStore)
buttonFire.addEventListener('click', pressFire)

function reset() {
  timer.updateDisplay(minutes, 0)
  pauseAndPlay()
  resetControls()
}

buttonStop.addEventListener('click', reset)

function pauseAndPlay() {
  clearTimeout(timerTimerOut)
}

function resetControls() {
  buttonStop.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  buttonSet.classList.remove('hide')
}

buttonStop.addEventListener('click', resetControls)

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
