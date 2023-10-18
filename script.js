const input=document.getElementById("input");
const elements=document.getElementById("info");

function AddTask()
{
    if(input.value.trim()==='')
    {
        alert("Enter Task");
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=input.value;
        elements.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
         
    }
    input.value='';
    saveData();
} 
elements.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});
function saveData(){
    localStorage.setItem("data",elements.innerHTML);
}
function showTask(){
    elements.innerHTML=localStorage.getItem("data");
}
showTask();