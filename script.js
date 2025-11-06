// ===== FUNCTIONS WITH NO PARAMETERS ===== //

function sayHello(){

    let output1 = document.querySelector("#output1");
output1.innerHTML = "Hello <name>! 👋 Welcome to JAVAScript functions review. "
}

function showDate(){
 let output1 = document.querySelector("#output1");
output1.innerHTML = "11/5/2025"
}

function motivation1(){
let output1 = document.querySelector("#output1");
output1.innerHTML = "You got this!"
}

function rep(){
let output1 = document.querySelector("#output1");
output1.innerHTML = "Represent your culture! 🇵🇷 "
}



// ===== FUNCTIONS WITH PARAMETERS ===== //

function math4(){

    let output2 = document.querySelector("#output2");
output2.innerHTML = "The sum of 5 + 7 = 12"
}


function greetings(){

    let output2 = document.querySelector("#output2");
output2.innerHTML = "Hello, Alex! 👋 Welcome to the world of JavaScript."
}


function MATH(){

    let output2 = document.querySelector("#output2");
output2.innerHTML = "The area of a 10x6 rectangle is 60 square units."
}


function favColor(){

    let output2 = document.querySelector("#output2");
output2.innerHTML = "Your favorite color is Blue! 🎨."
}

 function degrees(){
    let output2 = document.querySelector("#output2");
output2.innerHTML = "25°C is 77°F."
}

// ===== EVENT LISTENERS THAT CALLS FUNCTIONS ===== //

document.querySelector(".sayHello").addEventListener("click", sayHello);

    document.querySelector(".DCD").addEventListener("click", showDate);

        document.querySelector(".motivation1").addEventListener("click", motivation1);
              
            document.querySelector(".rep").addEventListener("click", rep);    



document.querySelector(".math4").addEventListener("click", math4); 


                 document.querySelector(".greetings").addEventListener("click",greetings); 


                 document.querySelector(".MATH").addEventListener("click", MATH); 


   document.querySelector(".favColor").addEventListener("click", favColor); 

   document.querySelector(".degrees").addEventListener("click", degrees); 
