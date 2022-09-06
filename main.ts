input.onButtonPressed(Button.A, function () {
    basic.showNumber(20)
})
input.onGesture(Gesture.LogoUp, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(12)
})
basic.showLeds(`
    # # . . #
    . # # . .
    . . # # .
    . # . # #
    # . . . #
    `)
basic.forever(function () {
	
})
