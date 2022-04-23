function startTimer(){
	timeInterval = setInterval(()=>{clock.timer()},1000)
}

function stopTimer(){
	clearInterval(timeInterval)
}
function timer(){
	if(clock.getRemainingTime() == null){
		let setTime = clock.startTime * 60
		clock.setRemainingTime(setTime)
	}
	var time = clock.getRemainingTime()
	time--;
	clock.minutes = Math.floor(time / 60)
	clock.seconds = time % 60
	clock.setRemainingTime(time)
}