

var links = new Array(5)

links[1] = "eq_0.html" 
links[2] = "eq_1.html" 
links[3] = "eq_2.html" 
links[4] = "eq_3.html" 
links[5] = "eq_4.html" 

function easy() { 
var a = 1+Math.round(Math.random()*5) 
var i = a 
location = links[i] 
}
function won0() {
    var a = 1+Math.round(Math.random()*4) 
    var i = a 
    location = links[i] 
    }  
function lose(){
    location = "lose.html"

}
function voltar(){
    location = "lobby.html"

}


function won0() {
var a = 1+Math.round(Math.random()*4) 
var i = a 
location = links[i] 
} 


