const inputVal = document.querySelector(".inputBox input");
const addBtn = document.querySelector(".inputBox button");
const item = document.querySelector(".container");


addBtn.addEventListener("click", () => {
  if (inputVal.value !== "") {
    const node = document.createElement("li");
    const span = document.createElement("span");
    node.innerHTML = inputVal.value;
    span.innerHTML = "\u00d7";
    node.appendChild(span);
    item.appendChild(node);
  }
  inputVal.value = "";
  saveData()

});


item.addEventListener("click",(e)=>{
  console.log(e.target)
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData()
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData()
  }
})

function saveData(){
  localStorage.setItem("data" , item.innerHTML);
}

function showData() {
  item.innerHTML = localStorage.getItem("data");
}

showData();