var disp = 0;
var operand1 = 0;
var opt = '+';
var result;

function clearscreen(){
    disp = 0;
    operand1 = 0;
    result = 0;
    opt = '+';
    document.getElementById('display').value = result;
}

function show(operand){
    disp = disp + operand;
    document.getElementById('display').value = disp;
}

function airthmetic(operator){
    console.log(operand1);

    switch(opt){
        case '+':
         result = parseFloat(parseFloat(operand1) + parseFloat(disp));
		 document.getElementById("display").value = result;
		 break;
        case '-':
            result = parseFloat(parseFloat(operand1) - parseFloat(disp));
            document.getElementById("display").value = result;
            break;    
        case '*':
            result = parseFloat(parseFloat(operand1) * parseFloat(disp));
            document.getElementById("display").value = result;
            break;   
        case '/':
            result = parseFloat(parseFloat(operand1) / parseFloat(disp));
            document.getElementById("display").value = result;
            break;
        case '=':
		document.getElementById("display").value = result;
		break;
    }
    operand1=result;
	disp=0;
	opt=operator;
}
