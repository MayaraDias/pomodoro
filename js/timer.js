import Sound from './sound.js'

export default function Timer({
  displayMinutes,
  displaySeconds,
  minutes,
  timerTimerOut,
  reset
}) {
  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    displayMinutes.textContent = String(newMinutes).padStart(2, '0')
    displaySeconds.textContent = String(seconds).padStart(2, '0')
  }

  function countDown() {
    timerTimerOut = setTimeout(function () {
      let seconds = Number(displaySeconds.textContent)
      let minutes = Number(displayMinutes.textContent)

      updateDisplay(minutes, 0)

      if (minutes <= 0 && seconds <= 0) {
        reset()
        updateDisplay()
        Sound().timerEnd()
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
    countDown
  }
}
