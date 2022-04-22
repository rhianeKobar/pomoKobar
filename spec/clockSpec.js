describe("Clock", function(){
	
	beforeEach(function(){
		clock = new Clock();
	})

	it("should start at 25 minutes", function(){
		expect(clock.getStartTime()).toEqual(25)
	});

	it("should start set the timer to 15 minutes", function(){
		clock.setStartTime(15)
		expect(clock.getStartTime()).toEqual(15)
	})

	it("should decrease the timer by 1", function(){
		clock.setStartTime(25)
		clock.timer()
		expect(clock.getRemainingTime()).toEqual(1499)
	})

	it("should have a remaining time of 0", function(){
		const timer = jasmine.clock().install()
		// let timerCallback;
		// timerCallback = jasmine.createSpy("timerCallback")
		clock.setStartTime(0.1)
		setInterval(()=>{
			console.log("I ran")
			if(clock.getRemainingTime() == null){
				let setTime = clock.startTime * 60
				clock.setRemainingTime(setTime)
			}
			var time = clock.getRemainingTime()
			time--;
			clock.minutes = Math.floor(time / 60)
			clock.seconds = time % 60
			clock.setRemainingTime(time)
		},1000)

		timer.tick(6000)
		// expect(clock.startTimer().calls.count()).toEqual(6)
		// time.tick(1000)
		expect(clock.getRemainingTime()).toEqual(0)
		timer.uninstall()
	})
})