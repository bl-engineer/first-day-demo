console.log("I love coding javaScript..")
var grades=[2,5,,,9,8,8];
var sum = 0;
var count=0;

if (grades.length > 0){
  for (index = 0; index < grades.length; index++){
    if (grades[index] != undefined){
      sum += grades[index];
      count = count +1;
    }
  }
     document.write(sum/count);
}
else
  document.write("Empty Array");

function check(){
  var email1= document.getElementById("email_addr")
    var email2= document.getElementById("email_repeat")
    if (email1.value != email2.value){
      alert("The two emails must match!!");
      return false;
    }
}