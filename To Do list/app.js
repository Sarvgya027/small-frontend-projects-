let inputBox = document.getElementById("search-box");
let listItem = document.querySelector(".list-container")

function addTask() {
  if (inputBox.value === "") {
    alert("you must type something");
  } 
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listItem.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"
    li.appendChild(span);
  }
  inputBox.value = '';
}


listItem.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked1")
    }
    if(e.target.tagName === "SPAN"){
        e.target.parentNode.remove();

    }
    
})