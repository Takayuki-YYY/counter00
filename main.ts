input.onButtonPressed(Button.A, function () {
    counter = 0
})
input.onGesture(Gesture.Shake, function () {
    counter += 1
})
let counter = 0
counter = 0
basic.forever(function () {
    basic.showNumber(counter)
})
