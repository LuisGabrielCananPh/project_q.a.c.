

var pontos = 0
var links = new Array(5)

links[1] = "eq_0.html" 
links[2] = "eq_1.html" 
links[3] = "eq_2.html" 
links[4] = "eq_3.html" 
links[5] = "eq_4.html" 

function easy(){ 
    
    location = sorteio(); 
}
 
function lose(){
    location = "lose.html"
    pontos = 0
    console.log(pontos)
    
}
function voltar(){
    location = "lobby.html"
}



function won(){
    location = sorteio()
    console.log(pontos)
    let pontos = (pontos + 1)
    if(5<pontos){ 
        location = "win.html"     
}
    
        
}
function end(){

}

 


function sorteio(){
    /*
    var a = 1+Math.round(Math.random()*5) 
    var i = a 
    return location = links[i];
    */
   
    /** 
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
    console.log("p="+p+" n="+n+" tmp="+tmp)

    return links[tmp]
    */ 
    var tmp;
    const quantidade = 1, minimo = 1, maximo = 5;
    const todos = [];
    for (let i = minimo; i <= maximo; i++) { 
        // gera um array com todos os números
        todos.push(i);
    }
// embaralha as 6 primeiras posições
    for (let i = 0; i < quantidade; i++) {
    // pega uma posição aleatória do array e troca com a posição atual
        const j = Math.floor(Math.random() * todos.length);
        const tmp = todos[j];
        todos[j] = todos[i];
        todos[i] = tmp;
    }
// pega os 6 primeiros elementos
        const result = todos.slice(0, quantidade);
        console.log("result="+result)
        return links[result]

}


