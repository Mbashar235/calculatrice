function appendToDisplay(value) {
    document.getElementById('display').value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function calculate() {
    const display = document.getElementById('display');
    try {
        let result = eval(display.value.replace(/\*\*/g, '^'));
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
