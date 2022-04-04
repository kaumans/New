def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    basic.show_number(12)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_forever():
    pass
basic.forever(on_forever)
