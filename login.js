var data = JSON.parse(localStorage.getItem("userDetail"));


document.querySelector(".logo").addEventListener("click",function(){
    window.location.href="index.html"
})
document.querySelector("form").addEventListener("submit", logfun);
  //console.log(data)
function logfun() {
    event.preventDefault();
    var usermail = document.querySelector(".mail").value;
    var userpswd = document.querySelector(".password").value;
   // console.log(usermail, userpswd)
   if(usermail==""&&userpswd==""){
       alert("Invalid Credential")
   }else{

       var check = false;
       for (var i = 0; i < data.length; i++) {
           // console.log(data[i])
           if (data[i].email == usermail && data[i].pass == userpswd) {
               check = true;
            }
        }
        if (check) {
            alert("Login successfull")
            
            window.location.href = "index.html";
        }else{
            alert("login failed  ");
            document.querySelector(".mail").value="";
            document.querySelector(".password").value="";
        }
        
    }
}