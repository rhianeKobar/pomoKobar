

// elements
const focusBtn = document.getElementById('btnFocus')
let shortBreakBtn = document.getElementById('btnShortBreak')
let longBreakBtn = document.getElementById('btnLongBreak')

//event functions
function start25(){
	
}

//eventlisteners
focusBtn.addEventListener('click', () => {
	focusBtn.style.boxShadow = "inset 0px -6px 6px rgba(163, 117, 189, 0.25)";
	focusBtn.innerText = "Stop";
	focusBtn.style.fontWeight = 600;

})
