def LED_Display(X: number, Y: number):
    global i, j
    for index in range(4):
        led.toggle(i, j)
        basic.pause(200)
        led.toggle(i, j)
        i += X
        j += Y
j = 0
i = 0
X = 0
Y = 0
while True:
    LED_Display(1, 0)
    LED_Display(0, 1)
    LED_Display(-1, 0)
    LED_Display(0, -1)