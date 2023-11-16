

var links = new Array(5)

links[1] = "eq_0.html" 
links[2] = "eq_1.html" 
links[3] = "eq_2.html" 
links[4] = "eq_3.html" 
links[5] = "eq_4.html" 

function easy() { 
    location = sorteio(); 
}
 
function lose(){
    location = "lose.html"
}
function voltar(){
    location = "lobby.html"
}


function won() {
    sorteio();
    //location = sorteio() 
} 


function sorteio(){
    /*
    var a = 1+Math.round(Math.random()*5) 
    var i = a 
    return location = links[i];
    */
   
    var maximo = 5;

    var i, arr = [];
        for (i = 0; i < maximo; i++) {
        arr[i] = i + 1;
    }
    
    var p, n, tmp;
    for (p = arr.length; p;) {
        n = Math.random() * p-- | 0;
        tmp = arr[n];
        arr[n] = arr[p];
        arr[p] = tmp;
    }

    return 
       
}


