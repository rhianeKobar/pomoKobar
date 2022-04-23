describe("Clock", function(){
	
	beforeEach(function(){
		clock = new Clock();
		let timeInterval;
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
		clock.setStartTime(0.1)
		startTimer()
		timer.tick(6000)
		expect(clock.getRemainingTime()).toEqual(0)
		timer.uninstall()
	})

	it("should stop the timer with 2 remaining", function(){
		const clocky = jasmine.clock().install()
		clock.setStartTime(0.1)
		startTimer()
		clocky.tick(4000)
		stopTimer()
		clocky.tick(2000)
		expect(clock.getRemainingTime()).toEqual(2)
		clocky.uninstall()
	})
	
	it("should change the start time to 15", function(){
		clock.longBreakTime()
		expect(clock.getStartTime()).toEqual(15)
	})

	it("should change the start time to 5", function(){
		clock.shortBreakTime()
		expect(clock.getStartTime()).toEqual(5)
	})

	it("should change the start time to 25", function(){
		clock.focusTime()
		expect(clock.getStartTime()).toEqual(25)
	})
})