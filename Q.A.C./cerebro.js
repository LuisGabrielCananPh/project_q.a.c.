
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

function easy(){ 
    
    location = sorteio();
     
}
 
function lose(){
    location = "lose.html"
    pontos = 0
    q = 0
    console.log(pontos)
    
}
function voltar(){
    location = "lobby.html"
}
console.log("pontos="+pontos)
    console.log("pergunta="+sugestao)


function won(){
    pontos = (pontos + 1)
    q = (q + 1)
    location = next()
    console.log("pontos="+pontos)
    console.log("pergunta="+sugestao)


}   
 function end(){
    if(9<pontos){ 
        location = "win.html"
    }
 }       
function next(){
    let q = sorteio()
    q = numero.slice(0, quantidade);

    return links[numero[q]]
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

        const result = todos.slice(0, quantidade);
        
        console.log("result="+result);

        

        return result[todos[q]];
         
        /*
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
}



