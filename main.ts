function LED_Display (X: number, Y: number) {
    for (let index = 0; index < 4; index++) {
        led.toggle(i, j)
        basic.pause(200)
        led.toggle(i, j)
        i += X
        j += Y
    }
}
let j = 0
let i = 0
let Y = 0
let X = 0
while (true) {
    LED_Display(1, 0)
    LED_Display(0, 1)
    LED_Display(-1, 0)
    LED_Display(0, -1)
}
