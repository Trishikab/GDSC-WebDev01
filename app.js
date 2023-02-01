console.log("Hello")
//element selector's
//get element by class
//get element by id
let addbtn = document.getElementById("addBtn");
let addtitle = document.getElementById("addTitle");
let addTime = document.getElementById("addTime");
let addTxt = document.getElementById("addTxt");
addbtn.addEventListener("click",function(e){
    //fetch notes from local storage
    let notes = localstorage.getItem("notes");
    if(notes==null){}
    else{}
})