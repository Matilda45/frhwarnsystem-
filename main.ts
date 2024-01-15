radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onGesture(Gesture.ThreeG, function () {
    if (input.isGesture(Gesture.Shake)) {
        led.setBrightness(255)
        basic.setLedColor(0xff0000)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        music.ringTone(587)
        radio.sendString("Erdbeben")
    }
})
basic.forever(function () {
    radio.setGroup(1)
})
