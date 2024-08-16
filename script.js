let inputs=document.getElementById("inp");
let text=document.querySelector(".text");
function Add(){
    if(inputs.value==""){
        alert("please Enter task");
    }
    else{
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${inputs.value} <i>\u00d7</i>`;
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("i").addEventListener("click", function remove(){

            newEle.remove();

          })
        
    }

}
