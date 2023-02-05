radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
    if (receivedNumber == 1) {
        Speed = 60
        basic.showString("60")
    } else if (receivedNumber == 2) {
        Speed = 70
        basic.showString("70")
    } else if (receivedNumber == 3) {
        Speed = 80
        basic.showString("80")
    } else if (receivedNumber == 4) {
        Speed = 100
        basic.showString("100")
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        X = value
    } else if (name == "y") {
        Y = value
    }
})
function Avoid () {
    if (TPBot.sonarJudge(TPBot.Sonarjudge.Less, 30)) {
        music.playSoundEffect(music.createSoundEffect(
        WaveShape.Square,
        400,
        600,
        255,
        0,
        100,
        SoundExpressionEffect.Warble,
        InterpolationCurve.Linear
        ), SoundExpressionPlayMode.UntilDone)
        TPBot.stopCar()
        TPBot.headlightRGB(randint(0, 255), randint(0, 255), randint(0, 255))
        basic.showIcon(IconNames.Surprised)
        TPBot.setTravelTime(TPBot.DriveDirection.Backward, Speed, 1)
        TPBot.setTravelTime(TPBot.DriveDirection.Left, Speed, 1)
    }
}
let Y = 0
let X = 0
let Speed = 0
basic.showIcon(IconNames.Heart)
radio.setGroup(7)
Speed = 50
X = 460
Y = 460
basic.forever(function () {
    if ((X > 470 || X < 530) && Y > 980) {
        TPBot.setTravelTime(TPBot.DriveDirection.Forward, Speed, 2)
        music.playSoundEffect(music.createSoundEffect(
        WaveShape.Sine,
        500,
        500,
        255,
        0,
        50,
        SoundExpressionEffect.Vibrato,
        InterpolationCurve.Linear
        ), SoundExpressionPlayMode.UntilDone)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
        Avoid()
    } else if ((X > 470 || X < 530) && Y < 40) {
        TPBot.setTravelTime(TPBot.DriveDirection.Backward, Speed, 2)
        music.playSoundEffect(music.createSoundEffect(
        WaveShape.Sine,
        500,
        500,
        255,
        0,
        50,
        SoundExpressionEffect.Vibrato,
        InterpolationCurve.Linear
        ), SoundExpressionPlayMode.UntilDone)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
        Avoid()
    } else if (X > 980 && (Y > 470 || Y < 530)) {
        TPBot.setTravelTime(TPBot.DriveDirection.Left, Speed, 0.5)
        music.playSoundEffect(music.createSoundEffect(
        WaveShape.Sine,
        500,
        500,
        255,
        0,
        50,
        SoundExpressionEffect.Vibrato,
        InterpolationCurve.Linear
        ), SoundExpressionPlayMode.UntilDone)
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
        Avoid()
    } else if (X < 40 && (Y > 470 || Y < 530)) {
        TPBot.setTravelTime(TPBot.DriveDirection.Right, Speed, 0.5)
        music.playSoundEffect(music.createSoundEffect(
        WaveShape.Sine,
        500,
        500,
        255,
        0,
        50,
        SoundExpressionEffect.Vibrato,
        InterpolationCurve.Linear
        ), SoundExpressionPlayMode.UntilDone)
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
        Avoid()
    } else {
        TPBot.stopCar()
    }
})
