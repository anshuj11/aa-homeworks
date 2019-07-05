

// window.setTimeout(function () {
//     alert('HAMMERTIME');
// }, 500);

class Clock {
    constructor() {
        // 1. Create a Date object.
        const d = new Date();
        // 2. Store the hours, minutes, and seconds.
        this.hours = d.getHours();
        this.mins = d.getMinutes();
        this.seconds = d.getSeconds();
        // 3. Call printTime.
        this.printTime();
       setInterval(this._tick.bind(this), 1000);

    }

    printTime() {
        // Format the time in HH:MM:SS
        // Use console.log to print it.
        console.log(`Hour:Mins:Seconds: ${this.hours}:${this.mins}:${this.seconds}`);
    }

    _tick() {
        // 1. Increment the time by one second.
        this.seconds++; 
        if (this.seconds===60){
            this.mins++
            this.seconds = 0;
        }
        if (this.mins === 60) {
            this.hours++
            this.mins = 0;
        }
        (this.hours == 13 ) ? this.hours = 1:this.hours;
        // 2. Call printTime.
        this.printTime();
    }
}

const clock = new Clock();
clock.printTime();

