var disData=JSON.parse(localStorage.getItem("discription"));
var buy=JSON.parse(localStorage.getItem("buyData")) || [];

var cartData=JSON.parse(localStorage.getItem("cartDetail")) || [];

disData.map( function(element){
   document.querySelector(".aname").innerText=element.name;
   var img=document.createElement("img");
   img.setAttribute("class","img")
      img.src=element.imgUrl;
      document.querySelector("#left").append(img);
   var nme=document.createElement("p");
   nme.innerText=element.name;

   var crcy=document.createElement("h2");
    crcy.innerText=element.curruncy;
    
    var prc=document.createElement("h2");
     prc.innerText=element.price;
    var box2=document.createElement("div");
    box2.setAttribute("id","prc");
    box2.append(crcy,prc);

    var box3=document.createElement("div");
    box3.setAttribute("id","box3")

    var sop=document.createElement("p");
    sop.setAttribute("class","sop")
    sop.textContent=element.strikedoffprice;

    var dct=document.createElement("p");
    dct.innerText=element.discount
    box3.append(sop,dct)

    var qty=document.createElement("div")
    qty.setAttribute("id","qty");

    var qtynme=document.createElement("span");
    qtynme.innerText="Qty";

    var decriment=document.createElement("div");
    decriment.style.cursor="pointer"
    decriment.innerText="-";
     
    var display=document.createElement("input");
    display.setAttribute("class","input");
    display.setAttribute("type","Number")

    var incriment=document.createElement("div");
    incriment.style.cursor="pointer"
    incriment.textContent="+";

   
    qty.append(decriment,display,incriment);
    var qtydiv=document.createElement("div");
    qtydiv.setAttribute("class","qname")
    qtydiv.append(qtynme,qty);

   var Buy=document.createElement("button");
   Buy.innerText="Buy Now";
   Buy.setAttribute("id","Buy");
   Buy.addEventListener("click",function(){
         addTobuy(element);
   })
   var adtc=document.createElement("button");
   adtc.innerText="Add to Cart"
   adtc.setAttribute("class","addcart")
   adtc.addEventListener("click",function(){
      addtocart(element);
   })

   var box4=document.createElement("div");
   box4.setAttribute("id","box4")     
    box4.append(Buy,adtc)
document.querySelector("#right").append(nme,box2,box3,qtydiv,box4)
});
function addTobuy(){
buy.push(element);
localStorage.setItem("buyData",JSON.stringify(buy))
window.location.href=" ";
}

function addtocart(element){
  // console.log(element);
   cartData.push(element)
   localStorage.setItem("cartDetail",JSON.stringify(cartData))
  
}
