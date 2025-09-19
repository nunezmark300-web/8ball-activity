input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    randomNumber = randint(0, 3)
    if (randomNumber == 2) {
        basic.showString("Ja")
    } else if (randomNumber == 1) {
        basic.showString("Nein")
    } else {
        basic.showString(" \"Ich weiß nicht\"")
    }
    basic.showNumber(8)
})
let randomNumber = 0
basic.showString("Bitten")
basic.showNumber(8)
