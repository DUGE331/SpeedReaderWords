textArea=document.querySelector("textarea");
btn=document.getElementById("BTN");

function startWordDisplay() {

const words = textArea.value.trim().split(/\s+/); //splits strings into single words
let i = 0; //start of array

const interval = setInterval(() => {
    if (i <words.length) {
        display.textContent= words[i]; //when input turns on display which highlights text
        i++; //once exectued adds one 
    }else{
        clearInterval(interval);
    }
    },200);

        }




btn.addEventListener("click", startWordDisplay )
