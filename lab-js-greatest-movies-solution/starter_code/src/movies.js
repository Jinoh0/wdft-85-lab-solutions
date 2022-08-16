

class Chronometer {

  constructor(name) {
    this.currentTime = 0;
    this.intervalId = null
    this.name = name
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback()
      }

    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return (value = '0' + value.toString());
    } else if (value >= 10) {
      return (value = value.toString());
    }
  }

}

const cronometro1 = new Chronometer('karen')

console.log(cronometro1.start())
