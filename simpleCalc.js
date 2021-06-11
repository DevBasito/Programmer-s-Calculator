let screen = document.getElementById('screen');


function append(x) {
    screen.value += x;
}
function operator(o) {
    if (!screen.value[0]) {
        append('')
    }
    else if (screen.value.includes('+') || screen.value.includes('*') || screen.value.includes('/') || 
     screen.value.includes('||') || screen.value.includes('&&') || screen.value.includes('^')) {
        append('')
    }
    else {
        append(o);
    }
}

function minus(o) {
    if ( screen.value.includes('-', (screen.value.length)-1 ) || screen.value.includes('+', (screen.value.length)-1 ) ) {
       append('') 
    }
    else{
        append(o)
    }
    
}
function dot() {
   
    if (!screen.value[0]) {
        append('')
    }
    else if (screen.value.includes('+')) {
        operators('+')
    }
    else if (screen.value.includes('-')) {
        operators('-')
    }
    else if (screen.value.includes('*')) {
        operators('*')
    }
    else if (screen.value.includes('/')) {
        operators('/')
    }
    else if (screen.value.includes('.')) {
        append('')
    }
    else {
        append('.')
    }

 }

function operators(y) {
    if (screen.value.includes('.', screen.value.indexOf(y))) {
        append('')
    }
    else {
        append('.')
    }
}


function cancel() {
    screen.value = "";
}

function calculate() {
    let x = eval(screen.value);
    if (x == 'NaN' || !x ) {
        screen.value = ''
    }
    else {
        screen.value = x;
    }

}

function percent() {
    let y = eval(screen.value) / 100;
    if (!y) {
      screen.value=''  
    }
    else{
        screen.value = y;
    }
    
}

function del() {
    let y = screen.value;
    screen.value = y.slice(0, -1)
}

function bin() {
    let x= (Number(screen.value)).toString(2);
    if(x == 'NaN' || !x ) {
        screen.value= 'Bad expression'
    } 
    else {
        screen.value = x
    }
    
}

function oct() {
    let x= (Number(screen.value)).toString(8);
    if(x == 'NaN' || !x ) {
        screen.value= 'Bad expression'
    } 
    else {
        screen.value = x
    }
    
}

function hex() {
    let x= (Number(screen.value)).toString(16);
    if(x == 'NaN' || !x ) {
        screen.value= 'Bad expression'
    } 
    else {
        screen.value = x
    }
    
}

function dec() {
    let x= (Number(screen.value)).toString(10);
    if(x == 'NaN' || !x ) {
        screen.value= 'Bad expression'
    } 
    else {
        screen.value = x
    }
    
}