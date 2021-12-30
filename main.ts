function timedelay () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        `)
    for (let index = 0; index < numRows; index++) {
        for (let index = 0; index < numCols; index++) {
            for (let index = 0; index < waitIntervalMinutes; index++) {
                basic.pause(2000)
                basic.pause(2000)
            }
            led.unplot(xCol, yRow)
            xCol = xCol + 1
        }
        xCol = 0
        yRow = yRow + 1
    }
    yRow = 0
}
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    samplingOn = 1
})
let tempertureInt = 0
let yRow = 0
let numRows = 0
let numCols = 0
let xCol = 0
let waitIntervalMinutes = 0
let samplingOn = 0
samplingOn = 0
waitIntervalMinutes = 0.5
xCol = 0
numCols = 5
numRows = 3
yRow = 0
basic.showNumber(waitIntervalMinutes)
weatherbit.startWeatherMonitoring()
serial.redirectToUSB()
basic.forever(function () {
    while (samplingOn == 1) {
        timedelay()
        tempertureInt = input.temperature()
        dataStreamer.writeNumberArray([tempertureInt])
        dataStreamer.writeLine()
    }
})
