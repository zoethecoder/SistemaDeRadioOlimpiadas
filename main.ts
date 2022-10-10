radio.onReceivedNumber(function (receivedNumber) {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
radio.setGroup(70)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) < 700) {
        radio.sendString("poca humedad, hay que regar")
    }
})
