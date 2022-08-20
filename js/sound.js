export default function () {
  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )
  const kitchenTimer = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )

  const bgAudioFlorest = new Audio(
    'https://github.com/MayaraDias/pomodoro/blob/master/audio/Floresta.wav?raw=true'
  )

  function pressButtonPlay() {
    buttonPressAudio.play()
  }

  function timerEnd() {
    kitchenTimer.play()
  }

  function audioFlorest() {
    bgAudioFlorest.play()
  }

  return {
    pressButtonPlay,
    timerEnd,
    audioFlorest
  }
}
