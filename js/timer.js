import Sound from './sound.js'
import Controls from './controls.js'
import { buttonPlay, buttonPause, buttonSet, buttonStop } from './elements.js'

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop
})

export default function Timer({ displayMinutes, displaySeconds, minutes }) {
  let timerTimerOut

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    displayMinutes.textContent = String(newMinutes).padStart(2, '0')
    displaySeconds.textContent = String(seconds).padStart(2, '0')
  }

  function reseted() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimerOut)
  }

  function hold() {
    clearTimeout(timerTimerOut)
  }

  function countDown() {
    timerTimerOut = setTimeout(function () {
      let seconds = Number(displaySeconds.textContent)
      let minutes = Number(displayMinutes.textContent)

      updateDisplay(minutes, 0)

      if (minutes <= 0 && seconds <= 0) {
        reseted()
        updateDisplay()
        Sound().timerEnd()
        controls.resetControls()

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

  return {
    updateDisplay,
    updateMinutes,
    countDown,
    reseted,
    hold
  }
}
