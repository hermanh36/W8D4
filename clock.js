class Clock {
  constructor() {
    const date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    this.printTime();
    setInterval(this._Tick.bind(this),1000);
  }
  
  format(num) {
    if (num.toString().length != 2) {
      return `0${num}`;
    } else {
      return num;
    }
  } 
  printTime() {
    console.log(`${this.format(this.hours)}:${this.format(this.minutes)}:${this.format(this.seconds)}`);

  }

  _Tick() {
    this.seconds++;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes = this.minutes+1;
      if(this.minutes === 60){
        this.minutes = 0;
        this.hours = this.hours+1;
        if(this.hours === 24){
          this.hours = 0;
        }
      }
    }
    this.printTime();
  }
}

const clock = new Clock();
