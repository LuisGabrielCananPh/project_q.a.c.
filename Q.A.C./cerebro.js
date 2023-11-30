var f = 1
var q = 0
var pontos = 0
var links = new Array(5)
var sugestao = 0

links[1] = "eq_0.html" 
links[2] = "eq_1.html" 
links[3] = "eq_2.html" 
links[4] = "eq_3.html" 
links[5] = "eq_4.html" 
links[6] = "eq_5.html" 
links[7] = "eq_6.html" 
links[8] = "eq_7.html"
links[9] = "eq_8.html"
links[undefined] = "win.html"

function easy(){ 
    
    location = start();
    
}
 
//-------------------------------------------

function lose(){
    location = "lose.html"
    pontos = 0
    q = 0
    console.log(pontos)
    
}

//-------------------------------------------

function voltar(){
    location = "lobby.html"
}


    //-------------------------------------------

function won(){
    
    
    
    next()
    //location = 
    start()
    //console.log("pontos="+pontos)
    //console.log("pergunta="+sugestao)
    

}

//-------------------------------------------

function next(){
q = q + 1
return q
}

//------------------------------------------- 

 function end(){
    if(questao[q]==undefined){ 
        location = won();
    }
 }       
//-------------------------------------------
 function start(){
     
let questoes = if()

const questao = questoes.slice(0, 9);
console.log("todos="+q)
console.log("todos="+questao)
console.log("todos="+questao[q])
f = f + 1  
    return links[questoes[q]]
}


if(f>1){

    var tmp;
    const quantidade = 9, minimo = 1, maximo = 9;
    const todos = [];
    for (let i = minimo; i <= maximo; i++) { 
        
        todos.push(i);
    }

    for (let i = 0; i < quantidade; i++) {
    
        const j = Math.floor(Math.random() * todos.length);
        const tmp = todos[j];
        todos[j] = todos[i];
        todos[i] = tmp;
    }
    return todos
}
    
        //
        
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
function sorteio()
    
    var p, n, tmp;
    for (p = arr.length; p;) {
        n = Math.random() * p-- | 0;
        tmp = arr[n];
        arr[n] = arr[p];
        arr[p] = tmp;
    }
    console.log("p="+p+" n="+n+" tmp="+tmp)

    return links[tmp]
    //-------------------------------------------
        var sorteados = [];
        var valorMaximo = 9;

    if (sorteados.length == valorMaximo) {
        if (confirm('Já não há mais! Quer recomeçar?')) sorteados = [];
        else return;
    }
     sugestao = Math.ceil(Math.random() * valorMaximo); // Escolher um numero ao acaso
    while (sorteados.indexOf(sugestao) >= 0) {  // Enquanto o numero já existir, escolher outro
        sugestao = Math.ceil(Math.random() * valorMaximo);
    }
    sorteados.push(sugestao); // adicionar este numero à array de numeros sorteados para futura referência
    
    
    return links[sugestao]; // devolver o numero único
    */



 
