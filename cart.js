var data = JSON.parse(localStorage.getItem("cartDetail"))
console.log(data);
document.querySelector(".logo").addEventListener("click",function(){
    window.location.href="index.html";
})
var total_price = data.reduce(function(sum,el,index,arr){
     sum +=Number( el.price);
     return sum
},0)

// console.log(total_price)
var length = data.length;
document.querySelector(".total").innerText = `(${length})`
document.querySelector(".totl").innerText = `(${length})`
document.querySelector(".price").innerText = total_price;
 document.querySelector(".pric").innerText = total_price;

data.map(function (el,index) {


    var box = document.createElement("div");

    var boxc1 = document.createElement("div")
    var image = document.createElement("img");
    image.src = el.imgUrl;
    boxc1.append(image);

    var boxc2 = document.createElement("div");
    boxc2.setAttribute("class", "nap");
    var pname = document.createElement("p")
    pname.innerText = el.name;
    var pprice = document.createElement("h3");
    //pprice.setAttribute("class", "price")
    pprice.innerText = el.price;
    boxc2.append(pname, pprice)

    var boxc3 = document.createElement("div");
    boxc3.setAttribute("class", "omodi")
    var boxc3c = document.createElement("div");
    var btn1 = document.createElement("button");
    btn1.innerText = "-"
    btn1.style.border = "none"
    btn1.style.backgroundColor = "white"
    
    var quantity = document.createElement("span");
    quantity.setAttribute("class", "count")
    quantity.innerText = 1;
    
    btn1.addEventListener("click",function(){
        decrement(quantity,el.price);
    });
    var btn2 = document.createElement("button");
    btn2.innerText = "+";
    btn2.style.border = "none";
    btn2.style.backgroundColor = "white"
   btn2.addEventListener("click",function(){
       increment(quantity,el.price);
   });

    boxc3c.append(btn1, quantity, btn2);
    var remove = document.createElement("button");
    remove.innerText = "remove"
    boxc3.append(boxc3c, remove);
  
    remove.addEventListener("click",function(){
        removeItem(el,index);
    })

    box.append(boxc1, boxc2, boxc3);

    document.querySelector(".mypro").append(box)

})
function removeItem(el,i){
    // console.log(el,i);
    data.splice(i,1);
    localStorage.setItem("cartDetail",JSON.stringify(data))
    window.location.reload();
}
function increment(quantity,price){
    var a = quantity.innerText
    a++
    total_price += Number(price)
   console.log(total_price)
  
   document.querySelector(".price").innerText = total_price;
   document.querySelector(".pric").innerText = total_price;
    quantity.innerText= a ;
}
function decrement(quantity,price){
    var b = quantity.innerText;
    if(b>0){
         b--;
         total_price -= Number(price)
         document.querySelector(".price").innerText = total_price;
         document.querySelector(".pric").innerText = total_price;
    quantity.innerText= b ;  
    }
    quantity.innerText= b ; 
}
document.querySelector("#container>div:nth-child(3)>button").addEventListener("click",Paymentfun);

function Paymentfun(){
    if(total_price==0){
        alert("No item in Cart")
    }else{
    window.location.href = "checkout.html";
}
}

