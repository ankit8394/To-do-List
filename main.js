let a=[];
let i=0;
let del="ank";
function save(){
    if(document.getElementById("inbox").value=="")
    {
        alert("fill")
    }
    else
    {
        a[i]=document.getElementById("inbox").value;
        document.getElementById("show").innerHTML=
        document.getElementById("show").innerHTML+"<div><p>" + a[i] + "</p><button onclick='req(this)'><i class='fa-solid fa-trash'></i></button></div>";
        i=i+1;
        document.getElementById("inbox").value="";
        console.log(del+i);
        
    }
}

function req(qw){
    console.log(qw);
 let parentDiv = qw.closest('div');

    parentDiv.remove();

}
//