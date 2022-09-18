let JQuery = (e)=> document.querySelector(e),
scrollElement = JQuery(".scrollTop"),
headerIndex = JQuery(".header-index");




addEventListener("scroll", function(e){
    (e.target.scrollingElement.scrollTop >= 85) ? (scrollElement.classList.add("show")) : scrollElement.classList.remove("show");
    (e.target.scrollingElement.scrollTop >= 85) ? headerIndex.classList.add("color") : headerIndex.classList.remove("color");
})

scrollElement.addEventListener("click", function(e){
    document.getElementById("base").scrollIntoView();
    headerIndex.classList.remove("color");
})


var ul = document.querySelectorAll(".header-ul li");
var ulLi = document.querySelector(".section-servicos-lista");


ul.forEach((btn) => {
    btn.addEventListener("click", (e)=>{
        document.getElementById(e.target.dataset.link).scrollIntoView();
    })
});


// oservacao
var observe = new IntersectionObserver((element)=>{
              
    element.forEach(index =>{
      (index.intersectionRatio > 0) ? ((index.target.classList.contains("observe") == false) ? index.target.classList.add("observe") : null) : null;
    })
}, {threshold: .5 });


Object.values(ulLi.children).forEach(element => {
        observe.observe(element);
});