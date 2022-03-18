function disp(val) {
    document.getElementById('input').value += val;
}

function calculate() {
    let input = document.getElementById('input').value;
    let result = eval(input);
    document.getElementById('input').value = result;
}

function clr() {
    document.getElementById('input').value = '';
}
