function hello() {
  const heading = document.querySelector("#hello");
  if (heading.innerHTML == "Hello") {
    heading.innerHTML = "Hello Again";
  } else {
    heading.innerHTML = "Hello";
  }
}
document.querySelector(".hello").onclick = hello;

let counter = 0;
function count() {
  counter++;
  document.querySelector("h2").innerHTML = counter;
  if (counter % 10 == 0) {
    alert(`${counter} times clicking. Keep going`);
  }
}
document.querySelector(".count").onclick = count;

document.querySelector("form").onsubmit = () => {
  const name = document.querySelector("#name").value;
  alert(name);

};

// change font color to red
document.querySelectorAll(".color-btn").forEach((button)=> {
  button.onclick = () => {
    document.querySelector("#colors").style.color = button.dataset.color;
  }
})

document.querySelector("#select-color").onchange = function() {
  document.querySelector("#text-dropdown").style.color = this.value;
}

function countdown() {
 
  const countDownNum = document.querySelector("#countdown-text");
  const counterCountDownInit =  parseInt(countDownNum.innerText);
  let counterCountDown = parseInt(countDownNum.innerText);

  let myInterval = setInterval(()=> {
    counterCountDown--;

    countDownNum.innerHTML = counterCountDown.toString();
    if(counterCountDown == -1) {
      clearInterval(myInterval);

      countDownNum.innerHTML = "Done!";

      setTimeout(()=> countDownNum.innerHTML = counterCountDownInit.toString(), 1000)
      
    }  
    
  }, 1000);

  
}


document.querySelector("#countdown-button").onclick = countdown;

