document.querySelector("form").addEventListener("submit", myfunction);
var signData = JSON.parse(localStorage.getItem("userDetail")) || [];
function myfunction() {
    event.preventDefault();
    // console.log("submit") working
    var Email = document.querySelector(".mail").value;
    var Pass = document.querySelector(".password").value;
    if (check(signData, Email)) {
        alert("Email is alrady register")
    }else if(Email ==""&&Pass == ""){
        alert("Invalid Credential")
    }
     else {
        var obj = {
            email: Email,
            pass: Pass
        }
        signData.push(obj);
        localStorage.setItem("userDetail", JSON.stringify(signData));
        document.querySelector(".mail").value = "";
        document.querySelector(".password").value = ""
        alert("Your Account has been created")
        window.location.href = "login.html"
    }


}
function check(data, target) {
    if(data.length==0){
        return false;
    }
    for (var i = 0; i < data.length; i++) {
        if (data[i].email == target) {
            return true;
        }
    }
    return false;
}