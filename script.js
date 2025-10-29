// ===== FUNCTIONS WITH NO PARAMETERS ===== //

function sayhello(){

    let output1 = document.querySelector("#output1");
output1.innerHTML = "Hello Jaslene! 👋 Welcome to JAVAScript functions review. "
}

function Date(){
 let output1 = document.querySelector("#output1");
output1.innerHTML = "Current Date."
}

function motivation1(){
let output1 = document.querySelector("#output1");
output1.innerHTML = "You got this!"
}

function rep(){
let output1 = document.querySelector("#output1");
output1.innerHTML = "Represent your culture."
}



// ===== FUNCTIONS WITH PARAMETERS ===== //

function math4(){

    let output2 = document.querySelector("#output2");
output2.innerHTML = "The sum of 5 + 7 = 12"
}


function math4(){

    let output2 = document.querySelector("#output2");
output2.innerHTML = ""
}


function math4(){

    let output2 = document.querySelector("#output2");
output2.innerHTML = ""
}


function math4(){

    let output2 = document.querySelector("#output2");
output2.innerHTML = ""
}



// ===== EVENT LISTENERS THAT CALLS FUNCTIONS ===== //

document.querySelector(".sayHelloBTN").addEventListener("click", function(){
sayHello(); 
              });

    document.querySelector(".DCD").addEventListener("click", function(){
showDate(); 
              });

        document.querySelector(".motivation1").addEventListener("click", function(){
sayHello(); 
              });
              
            document.querySelector(".rep").addEventListener("click", function(){
sayHello(); 
              });    



                document.querySelector(".math4").addEventListener("click", function(){
add 5, 7;
              }); 