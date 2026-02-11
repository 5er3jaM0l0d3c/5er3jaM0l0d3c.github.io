
document.getElementById("calculate").onclick = calc;

function calc()
{
    var firstOper = document.getElementById("firstOper").value;
    var secondOper = document.getElementById("secondOper").value;

    var operation = document.getElementById("operation").value;

    var result = document.getElementById("result");
    switch (operation) {
        case "+":
            result.textContent = (Number(firstOper) + Number(secondOper));
            break;
        case "-":
                result.textContent = (firstOper - secondOper);
                break;
        case "*":
                result.textContent = (firstOper * secondOper).toPrecision(4);
                break;
        case "/":
                if(secondOper == "0")
                {
                    alert("Деление на 0!!!")
                    break;
                }
                result.textContent = (firstOper / secondOper).toPrecision(4);
                break;
    
        default:
            break;
    }
}