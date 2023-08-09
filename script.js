$(document).ready(function () {
    let currentValue = '';
    let currentOperator = '';
    let storedValue = '';

    $('.number').click(function () {
        currentValue += $(this).text();
        $('#display').val(currentValue);
    });

    $('#add, #subtract, #multiply, #divide, #power, #sqrt, #percent').click(function () {
        currentOperator = $(this).text();
        storedValue = currentValue;
        currentValue = '';
    });

    $('#clear').click(function () {
        currentValue = '';
        currentOperator = '';
        storedValue = '';
        $('#display').val('');
    });

    $('#calculate').click(function () {
        let result;
        switch (currentOperator) {
            case '+':
                result = parseFloat(storedValue) + parseFloat(currentValue);
                break;
            case '-':
                result = parseFloat(storedValue) - parseFloat(currentValue);
                break;
            case '*':
                result = parseFloat(storedValue) * parseFloat(currentValue);
                break;
            case '/':
                result = parseFloat(storedValue) / parseFloat(currentValue);
                break;
            case '^':
                result = Math.pow(parseFloat(storedValue), parseFloat(currentValue));
                break;
            case '√':
                result = Math.sqrt(parseFloat(currentValue));
                break;
            case '%':
                result = (parseFloat(storedValue) * parseFloat(currentValue)) / 100;
                break;
        }
        $('#display').val(result);
        currentValue = '';
        currentOperator = '';
        storedValue = '';
    });
});
