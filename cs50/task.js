const submitButton = document.querySelector("#submit");
const tasks = document.querySelector("#tasks");
const task = document.querySelector("#task");

submitButton.disabled = true;

task.onkeyup = () => {
  if (task.value.length > 0) {
    submitButton.disabled = false;
  }
  else {
    submitButton.disabled = true;
  }
}


document.querySelector("form").onsubmit = () => {
  
  const task = document.querySelector("#task").value;

  const li = document.createElement("li");
  li.innerHTML = task;

  tasks.append(li);

  document.querySelector("form").reset();

  submitButton.disabled = true

  // stop form from submitting - doing things in client side only
  return false;
}