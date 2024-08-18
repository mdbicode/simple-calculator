button = document.querySelectorAll('button');
output = document.getElementById('output-text');

function operation(input){
    if(input === "C")
    {
        output.innerHTML = "";
    }
    else if(input === "=")
    {
        output.innerHTML = calculate(output.innerHTML)
    }
    else if(input === "D")
    {
        output.innerHTML = output.innerHTML.slice(0,-1)
    }
    else
    {
        output.innerHTML += input;
    }
}

function calculate(expression){
    try {
        return new Function('return ' + expression)();
    } catch (error) {
        return 'Error';
    }
}

button.forEach( e => {
    e.addEventListener('click',function(){
       operation(e.innerHTML);
    });
});


