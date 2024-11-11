/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Bain Liao
 * Created on: Nov 2024
 * This program determines if an object is too close using radios
*/

// setup
radio.setGroup(177)
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Triangle)
    
    //variables
    let objectDistance: number = 0

    // find object distance from sonar
    objectDistance = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    
    // if the object is <= 10
    if (objectDistance <= 10) {
        radio.sendString("Too Close")
    }
    basic.showIcon(IconNames.Happy)
})

radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
    basic.showIcon(IconNames.Happy)
})