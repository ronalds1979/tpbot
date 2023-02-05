radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
})
radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        X = value
    } else if (name == "y") {
        Y = value
    }
})
let Y = 0
let X = 0
basic.showIcon(IconNames.Heart)
radio.setGroup(7)
X = 520
Y = 520
basic.forever(function () {
    TPBot.setWheels(Y + X, Y - X)
})
