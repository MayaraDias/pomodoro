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

  const bgAudioRain = new Audio(
    'https://github.com/MayaraDias/pomodoro/blob/master/audio/rain.wav?raw=true'
  )

  const bgAudioStore = new Audio(
    'https://github.com/MayaraDias/pomodoro/blob/master/audio/store.wav?raw=true'
  )

  const bgAudioFire = new Audio(
    'https://github.com/MayaraDias/pomodoro/blob/master/audio/fire.wav?raw=true'
  )

  const setSoundFlorest = document.querySelector('#florest')
  const setSoundRain = document.querySelector('#rain')
  const setSoundStore = document.querySelector('#store')
  const setSoundFire = document.querySelector('#fire')

  bgAudioFlorest.loop = true
  bgAudioRain.loop = true
  bgAudioStore.loop = true
  bgAudioFire.loop = true

  function setVolume(som, volume) {
    som.volume = volume.value / 100
  }

  function pressButtonPlay() {
    buttonPressAudio.play()
  }

  function timerEnd() {
    kitchenTimer.play()
  }

  function audioFlorest() {
    setSoundFlorest.addEventListener(
      'input',
      setVolume(bgAudioFlorest, setSoundFlorest)
    )
    bgAudioFlorest.play()
    bgAudioRain.pause()
    bgAudioStore.pause()
  }

  function audioRain() {
    setSoundRain.addEventListener('input', setVolume(bgAudioRain, setSoundRain))
    bgAudioRain.play()
    bgAudioFlorest.pause()
    bgAudioStore.pause()
  }

  function audioStore() {
    setSoundStore.addEventListener(
      'input',
      setVolume(bgAudioStore, setSoundStore)
    )
    bgAudioStore.play()
    bgAudioFlorest.pause()
    bgAudioRain.pause()
  }

  function audioFire() {
    setSoundFire.addEventListener('input', setVolume(bgAudioFire, setSoundFire))
    bgAudioFire.play()
    bgAudioStore.pause()
    bgAudioFlorest.pause()
    bgAudioRain.pause()
  }

  return {
    pressButtonPlay,
    timerEnd,
    audioFlorest,
    audioRain,
    audioStore,
    audioFire
  }
}
