function display(value){
        document.getElementById('screendisplay').value += value;
}
function clearScreen(){
    document.getElementById('screendisplay').value = '';
}
function backspace(){
    var input = document.getElementById('screendisplay');
    input.value = input.value.substring(0, input.value.length - 1);

}
function displayAnswer(){
        var input = document.getElementById('screendisplay');
        if(input.value == ''){
            return;
        }
        var result = eval(input.value);
        input.value = result;
}
document.addEventListener('keydown', function(event){

 if(event.key == 'Enter'){
        displayAnswer();
    }
    else if(event.key == 'Backspace'){
        backspace();
    }
    else if(event.key == 'Delete'){
        clearScreen();
    }

    
}
);
