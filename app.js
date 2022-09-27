const create = () => {
    /////////getting values from input

    const value = document.getElementById('input1').value;

    if(value.length!==5 || value<0) {
        alert("enter a valid 5 digit number");
        return;
    }

    let n = value
    let sum = 0;
    for(let i=1; i<=value.length; i++) {
        sum+=n%10;
        n = Math.floor(n/10);
    }
    let bR = Math.floor(sum/5);
    console.log(bR);
    console.log(sum);
    
    /// creating square

    const square = document.getElementById('sq');
    console.log(square);
    square.style.height = `${sum}px`;
    square.style.width = `${sum}px`;
    square.style.borderRadius = bR+'px';
    square.style.transition = 'all 2s';

}


document.getElementById('createBtn').addEventListener('click',create);