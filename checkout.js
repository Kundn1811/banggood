document.querySelector(".formm").addEventListener("submit",checkfun);
function checkfun(){
  event.preventDefault();
  console.log("in function")
var card = document.querySelector(".cardno").value;
var date = document.querySelector(".doc").value;
var cvv = document.querySelector(".cvv").value;
if(card==""||cvv==""||date==""){
    alert("Invalid Input");
}else{
    if(card.length==19&&cvv.length==3){
        alert("Payment Successful")
        window.location.href = "index.html"
    }
    else{
        alert("Unable to Process")
    }
}

}