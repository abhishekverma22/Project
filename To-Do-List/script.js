const searchBox = document.getElementById("search-box");
const listContainer = document.getElementById("list-container");

function addTask(){
   if(searchBox.value === ''){
    alert("You must write something!");
   }
   else{
      let li = document.createElement("li")
      li.innerHTML =searchBox.value;
      listContainer.appendChild(li);
      let span = document.createElement("span"); // span in css show "x" u00d7 is code 
      span.innerHTML = "\u00d7"
      li.appendChild(span)
   }
   searchBox.value ='';
   saveData();  // calling function for save the task
}

listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");   // checked in html (<li class="checked">Task 1</li>)
    saveData();  // calling function for save the task after li was checked
  }
  else if(e.target.tagName ==="SPAN"){      
    e.target.parentElement.remove(); 
    saveData();  // calling function for save the task after removing some task
  }
},false) 

// work of function is save all data in loack storage after add a task, checked (complete task) task remove a task
function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
} 
showTask()