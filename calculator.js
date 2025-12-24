let inp = document.querySelector("input");
let btn = document.querySelectorAll("button");

let str = "";
btn.forEach(nmbr => {
    nmbr.addEventListener("click",function(e){
     if(e.target.innerHTML == "="){
        str = eval(str);
        inp.value = "Ans." + str;
     }else if(e.target.innerHTML === "AC"){
        str = "";
        inp.value = str;
     }else if(e.target.innerHTML === "DEL"){
        str = str.substring(0 , str.length - 1);
        inp.value = str;
        console.log(str.length);
        console.log(str.length-1);
        

     }else{
        str += e.target.innerHTML;
        inp.value = str;
     }
    })
})

btn.forEach(function(a) {
   a.addEventListener("mouseover",function(){
   a.style.backgroundColor = "rgba(32, 70, 32, 1)"
})
a.addEventListener("mouseout",function(){
   a.style.backgroundColor = "transparent";
})
})