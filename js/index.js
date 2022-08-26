import Sound from './sound.js'
import Timer from './timer.js'
import Controls from './controls.js'
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
  timerTimerOut,
  buttonCardFlorest,
  buttonCardRain,
  buttonCardStore,
  buttonCardFire,
  buttonTurnOn,
  buttonTurnOff
} from './elements.js'

let minutes = Number(displayMinutes.textContent)

const sound = Sound()

const timer = Timer({
  displayMinutes,
  displaySeconds,
  minutes
})

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  displayMinutes,
  timerTimerOut
})

function clickButtonPlayShowButtonPause() {
  controls.play()
  timer.countDown()
  sound.pressButtonPlay()
}

function clickButtonPauseShowButtonPlay() {
  controls.pause()
  timer.hold()
  sound.pressButtonPlay()
}

function clickButtonStopResetControls() {
  controls.resetControls()
  timer.reseted()
  sound.pressButtonPlay()
}

function pressButtonSetShowPrompt() {
  let newMinutes = Number(prompt('Quantos minutos?:'))
  displayMinutes.textContent = newMinutes

  if (!newMinutes) {
    timer.reseted()
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

function selectCardFlorest() {
  controls.pressCardFlorest()
}

function selectCardRain() {
  controls.pressCardRain()
}

function selectCardStore() {
  controls.pressCardStore()
}

function selectCardFire() {
  controls.pressCardFire()
}

function addTime() {
  sound.pressButtonPlay()
  minutes = Number(displayMinutes.textContent) + 5
  if (minutes > 90) {
    minutes = 0
  }
  displayMinutes.textContent = String(minutes).padStart(2, '0')
}

function minusTime() {
  sound.pressButtonPlay()
  minutes = Number(displayMinutes.textContent) - 5
  if (minutes < 0) {
    minutes = 0
  }
  displayMinutes.textContent = String(minutes).padStart(2, '0')
}

function showTurnOn() {
  controls.turnOnButton()
}

function showTurnOff() {
  controls.turnOffButton()
}

buttonTurnOn.addEventListener('click', showTurnOn)
buttonTurnOff.addEventListener('click', showTurnOff)

buttonPlay.addEventListener('click', clickButtonPlayShowButtonPause)
buttonPause.addEventListener('click', clickButtonPauseShowButtonPlay)
buttonStop.addEventListener('click', clickButtonStopResetControls)

buttonSet.addEventListener('click', pressButtonSetShowPrompt)

buttonForest.addEventListener('click', pressFlorest)
buttonRain.addEventListener('click', pressRain)
buttonStore.addEventListener('click', pressStore)
buttonFire.addEventListener('click', pressFire)

buttonCardFlorest.addEventListener('click', selectCardFlorest)
buttonCardRain.addEventListener('click', selectCardRain)
buttonCardStore.addEventListener('click', selectCardStore)
buttonCardFire.addEventListener('click', selectCardFire)

buttonPlus.addEventListener('click', addTime)
buttonMinus.addEventListener('click', minusTime)
