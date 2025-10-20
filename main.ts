let water_level = 0
let soil_moisture = 0
basic.forever(function () {
    water_level = 0
    soil_moisture = 0
    led.plotBarGraph(
    water_level,
    100
    )
    if (soil_moisture < 30) {
        pins.servoWritePin(AnalogPin.P9, 180)
        basic.pause(500)
    } else {
        pins.servoWritePin(AnalogPin.P9, 0)
        basic.pause(500)
    }
})
