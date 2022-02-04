function myClock() {         
  setTimeout(function() {   
    const d = new Date();
    const n = d.toLocaleTimeString();
    document.getElementById("clock").innerHTML = n; 
    myClock();             
  }, 1000)
}
myClock();    



document.querySelector('h1').innerHTML = 'What Ish Likes'

let element = document.querySelector("button");

function turnButtonGreen (){
  element.style.backgroundColor = 'green';
  element.style.color = 'white';
  element.innerHTML = 'Green Button';
}

element.onclick = turnButtonGreen;