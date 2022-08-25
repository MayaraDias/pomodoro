import {
  buttonCardFlorest,
  buttonCardRain,
  buttonCardStore,
  buttonCardFire,
  buttonTurnOff,
  buttonTurnOn
} from './elements.js'

export default function Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
}) {
  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
  }

  function pause() {
    buttonPause.classList.toggle('hide')
    buttonPlay.classList.toggle('hide')
  }

  function pressCardFlorest() {
    buttonCardFlorest.classList.add('cardClick')
    buttonCardRain.classList.remove('cardClick')
    buttonCardStore.classList.remove('cardClick')
    buttonCardFire.classList.remove('cardClick')
  }

  function pressCardRain() {
    buttonCardFlorest.classList.remove('cardClick')
    buttonCardRain.classList.add('cardClick')
    buttonCardStore.classList.remove('cardClick')
    buttonCardFire.classList.remove('cardClick')
  }

  function pressCardStore() {
    buttonCardFlorest.classList.remove('cardClick')
    buttonCardRain.classList.remove('cardClick')
    buttonCardStore.classList.add('cardClick')
    buttonCardFire.classList.remove('cardClick')
  }

  function pressCardFire() {
    buttonCardFlorest.classList.remove('cardClick')
    buttonCardRain.classList.remove('cardClick')
    buttonCardStore.classList.remove('cardClick')
    buttonCardFire.classList.add('cardClick')
  }

  function resetControls() {
    buttonStop.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  buttonStop.addEventListener('click', resetControls)

  function turnOnButton() {
    buttonTurnOn.classList.add('hide')
    buttonTurnOff.classList.remove('hide')
    document.body.classList.add('dark')
  }

  function turnOffButton() {
    buttonTurnOn.classList.remove('hide')
    buttonTurnOff.classList.add('hide')
    document.body.classList.remove('dark')
  }

  return {
    play,
    pause,
    pressCardFlorest,
    pressCardRain,
    pressCardStore,
    pressCardFire,
    resetControls,
    turnOffButton,
    turnOnButton
  }
}
