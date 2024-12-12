
let button1 = document.querySelectorAll(".control");
let slide = document.querySelectorAll(".slide");
let prev=0;
let count=0;
let carosel=document.querySelector(".carousel");
button=Array.from(button1);
// console.log(button[0]);


carosel.addEventListener("mouseover",()=>{
  clearInterval(interval);
})

carosel.addEventListener("mouseleave",()=>{
  interval=setInterval(()=>{
    next(count==3?0:count+=1)
  },3500)
})

button.map((btn,index)=>{
  btn.addEventListener("click",()=>{
    next(index);
clearInterval(interval);
  })
})


let interval=setInterval(()=>{
  next(count==3?0:count+=1)
},3500)



function next(index) {
  clearInterval(interval);
  for (i = 0; i <= 3; i++) {
    slide[i].className = slide[i].className.replace("active-slide", "");
    slide[i].style.animationName = "";

  }
  slide[prev].style.animationName="Prev";

  prev=index;
  count=index;


  slide[index].classList.add("active-slide");
  slide[index].style.animationName="Next";
  // console.log(slide[index])
  interval=setInterval(()=>{
    next(count==3?0:count+=1)
  },3500)
  button[index].checked=true;
}




