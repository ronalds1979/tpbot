radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
    if (receivedNumber == 1) {
        TPBot.setTravelTime(TPBot.DriveDirection.Left, 50, 0.5)
    } else if (receivedNumber == 2) {
        TPBot.setTravelTime(TPBot.DriveDirection.Forward, 50, 2)
    } else if (receivedNumber == 3) {
        TPBot.setTravelTime(TPBot.DriveDirection.Backward, 50, 2)
    } else if (receivedNumber == 4) {
        TPBot.setTravelTime(TPBot.DriveDirection.Right, 50, 0.5)
    }
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
basic.forever(function () {
    if ((X > 470 || X < 530) && Y > 980) {
        TPBot.setTravelTime(TPBot.DriveDirection.Forward, 50, 2)
    } else if ((X > 470 || X < 530) && Y < 40) {
        TPBot.setTravelTime(TPBot.DriveDirection.Backward, 50, 2)
    } else if (X > 980 && (Y > 470 || Y < 530)) {
        TPBot.setTravelTime(TPBot.DriveDirection.Left, 50, 0.5)
    } else if (X < 40 && (Y > 470 || Y < 530)) {
        TPBot.setTravelTime(TPBot.DriveDirection.Right, 50, 0.5)
    }
})
