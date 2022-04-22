class Clock {

	constructor(){
		this.startTime = 25;
		this.remainingTime;
		this.timerInterval;
		this.minutes;
		this.seconds;
	}

	getStartTime(){
		return this.startTime
	}
	
	setStartTime(startTime){
		this.startTime = startTime;
		return this.startTime;
	}

	getRemainingTime(){
		return this.remainingTime
	}

	setRemainingTime(remainingTime){
		this.remainingTime = remainingTime;
		return this.remainingTime;
	}

	startTimer(){
		this.timerInterval = setInterval(this.timer(),1000)
		this.timerInterval
	}

	timer(){
		console.log("I ran")
		if(this.getRemainingTime() == null){
			let setTime = this.startTime * 60
			this.setRemainingTime(setTime)
		}
		var time = this.getRemainingTime()
		time--;
		this.minutes = Math.floor(time / 60)
		this.seconds = time % 60
		this.setRemainingTime(time)
	}
} 