const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((e)=>{
  e.forEach((entery)=>{
    if(entery.isIntersecting){
      entery.target.classList.add("show");
    }else{
      entery.target.classList.remove("show");
    }
  })
})

hiddenElements.forEach((el)=>{
  observer.observe(el);
})