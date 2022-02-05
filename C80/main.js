var nameofthestudentarray = [];
function submit(){
    var displaystudentarray = [];
    for (var j = 1; j <= 4; j++)
    {
        var nameofthestudent = document.getElementById("nameofthestudent"+j).value; 
        console.log(nameofthestudent);
        nameofthestudentarray.push(nameofthestudent);
    }
console.log(nameofthestudentarray);
var lengthofstudentarray = nameofthestudentarray.length
console.log(lengthofstudentarray);
for (var k = 0; k < lengthofstudentarray; k++){
    displaystudentarray.push("<h4>Name - "+nameofthestudentarray[k] + "</h4>");
    console.log(displaystudentarray);
}
console.log(displaystudentarray);
document.getElementById("displaynamewithcommas").innerHTML = displaystudentarray;
var removecommas = displaystudentarray.join(" ");
console.log(removecommas);
document.getElementById("displaynamewithoutcommas").innerHTML = removecommas;
document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button").style.display = "inline-block";
}
function sorting(){
    nameofthestudentarray.sort();
    console.log(nameofthestudentarray);
    var displaystudentarraysorting = [];
    var lengthofnameofstudentarray = nameofthestudentarray.length;
console.log(lengthofnameofstudentarray);
for (var k = 0; k < lengthofnameofstudentarray; k++){
    displaystudentarraysorting.push("<h4>Name - "+nameofthestudentarray[k] + "</h4>");
    console.log(displaystudentarraysorting);}
var removecommas = displaystudentarraysorting.join(" ");
console.log(removecommas);
document.getElementById("displaynamewithoutcommas").innerHTML = removecommas;
}