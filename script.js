function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value.replace('%', '/100'));
        display.value = result;
    } catch (error) {
        display.value = 'Помилка';
    }
}