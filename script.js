// let todo =[];

// document.querySelector
var inputs = document.querySelector("#inputs");
var list = document.querySelector("#list");


var array=[];
function addTask(){
    list.innerHTML="";
    array.push(inputs.value);
    console.log(array);
    listData();
    inputs.value="";
}

function listData(){
    for(var i=0; i<array.length; i++){
        list.innerHTML+=`<li>${array[i]} <button class="edit1" onclick="deleteTask(${i})">Delete</button> <button class="edit2" onclick="editTask(${i})">Edit</button></li>`
    }
}


//Function for deleting
function deleteTask(i){
    list.innerHTML="";
    console.log("Task "+array[i]+" deleted");
    array.splice(i,1);
    console.log(array);
    listData();  
}



//Function for editing
function editTask(i){
    list.innerHTML="";
    console.log("Task "+array[i]+" edited");
    var edit=prompt("Enter value you want to edit");
    array.splice(i,1,edit);
    listData(); 
}