let display = document.getElementById('display');

let calculated = false

function appendValue(val) {
    if (calculated) {
        clearDisplay()
        calculated = false
    }
    display.value += val;
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1)
}

function calculate() {
    try {
    display.value = eval(display.value);
    calculated = true
    } catch (e) {
    alert('Invalid Expression');
    display.value = '';
    }
}