

// elements
let startStopBtn = document.getElementById('startStopBtn')
let focusBtn = document.getElementById('btnFocus')
let shortBreakBtn = document.getElementById('btnShortBreak')
let longBreakBtn = document.getElementById('btnLongBreak')
let clock = document.getElementById('clock')
clock.innerHTML = "25:00"
let startFocusAlarm = new Audio('./Resources/Sounds/startAlarm.mp4')
let startingTime = 25; 
let remainingTime;
let time;
let minutes;
let seconds;
let timerInterval; 


function clearTimer(){
	if(timerInterval){
		clearInterval(timerInterval)
	}
}

//event functions

function handleFocusBtn(){
	clearTimer();
	focusBtn.style.boxShadow = "inset 0px -6px 6px rgba(163, 117, 189, 0.25)";
	shortBreakBtn.style.boxShadow = "3px 3px 6px 2px #A375BD";
	longBreakBtn.style.boxShadow = "3px 3px 6px 2px #A375BD";
	clock.innerHTML = "25:00"
	startingTime = 25
}


function handleShortBreakBtn(){
	clearTimer();
	focusBtn.style.boxShadow = "3px 3px 6px 2px #A375BD";
	shortBreakBtn.style.boxShadow = "inset 0px -6px 6px rgba(163, 117, 189, 0.25)";
	longBreakBtn.style.boxShadow = "3px 3px 6px 2px #A375BD";
	clock.innerHTML = "1:00"
	startingTime = 1
}


function handleLongBreakBtn(){
	clearTimer();
	focusBtn.style.boxShadow = "3px 3px 6px 2px #A375BD";
	shortBreakBtn.style.boxShadow = "3px 3px 6px 2px #A375BD";
	longBreakBtn.style.boxShadow = "inset 0px -6px 6px rgba(163, 117, 189, 0.25)";
	clock.innerHTML = "15:00"
	startingTime = 15
}

function handleClock(){
	if (timerInterval){
		clearInterval(timerInterval)
		timerInterval = null
		startStopBtn.style.background = "#B9DBB4";
		startStopBtn.style.boxShadow = "2px 2px 6px 2px #69B15D";
		startStopBtn.innerText = "Start";
	}else{
		time = startingTime * 60;
		timerInterval = setInterval(timer,1000)
		startStopBtn.style.background = "#FAB3B3";
		startStopBtn.style.boxShadow = "inset 5px 5px 10px #F99595";
		startStopBtn.innerText = "Stop";
		
	}
}

function timer(){
	if (time == 0){
		clearInterval(timerInterval)
		startFocusAlarm.play()
	}else{
		time--;
		minutes = Math.floor(time / 60)
		seconds = time % 60
		clock.innerHTML = `${minutes}:${seconds < 10? "0" + seconds: seconds}`
	}
	
}

//eventlisteners

startStopBtn.addEventListener('click', handleClock)
focusBtn.addEventListener('click', handleFocusBtn)
shortBreakBtn.addEventListener('click', handleShortBreakBtn)
longBreakBtn.addEventListener('click', handleLongBreakBtn)