var x=1;
const plus=document.querySelectorAll(".plus");
const minus=document.querySelectorAll(".minus");
const total=document.querySelector(".total");
const invis=document.querySelector(".invis")  

plus.forEach((pl,index) => {
    pl.addEventListener('click', () => {
        var quantity=pl.parentElement
        var h6=quantity.querySelector(".quants")
        var discPrice=parseFloat(quantity.parentElement.querySelector(".disc-price").innerHTML)
        var invisHtml=parseFloat(invis.innerHTML)

        x=h6.innerHTML
        x++
        h6.innerHTML=x

        invisHtml+=discPrice
        invis.innerHTML=""
        invis.innerHTML=invisHtml

        total.innerHTML="$"+invisHtml
       
    })
})
minus.forEach(mi => {
    mi.addEventListener('click', () => {
        if(x===1){
            return;
        }
        var quantity=mi.parentElement
        var h6=quantity.querySelector(".quants")
        var discPrice=parseFloat(quantity.parentElement.querySelector(".disc-price").innerHTML)
        var invisHtml=parseFloat(invis.innerHTML)

        x=h6.innerHTML
        x--
        h6.innerHTML=x

        invisHtml-=discPrice
        invis.innerHTML=""
        invis.innerHTML=invisHtml

        total.innerHTML="$"+invisHtml
    })
})

var y=0;
var mail=document.querySelector("#email")
var phone=document.querySelector("#phone")
var fname=document.querySelector("#fullnm")
var address=document.querySelector("#addr")
var city=document.querySelector("#city")
const country=document.querySelector("#countr")
var postal=document.querySelector("#postal")

country.addEventListener('click', () => {
    y=1;
})

function validate(){
if(mail.value == ""){
    window.alert("Please enter the mail.")
    mail.focus();
}
else if(phone.value == ""){
    window.alert("Please enter the phone number.")
    phone.focus();
}
else if(fname.value == ""){
    window.alert("Please enter the name.")
    fname.focus();
}
else if(address.value == ""){
    window.alert("Please enter the address.")
    address.focus();
}
else if(city.value == ""){
    window.alert("Please enter the city.")
    city.focus();
}
else if(y==0){
    window.alert("Please select country")
}
else if(postal.value == ""){
    window.alert("Please enter the postal.")
    postal.focus();
}
else{
    window.alert("Success!!Thanks for the information.")
}
}
