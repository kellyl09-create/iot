ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
basic.forever(function () {
    music.play(music.stringPlayable("E C A D G - D - ", 120), music.PlaybackMode.UntilDone)
})
