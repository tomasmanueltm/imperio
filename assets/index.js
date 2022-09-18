const scrollElement = document.querySelector(".scrollTop");

addEventListener("scroll", function(e){
    (e.target.scrollingElement.scrollTop >= 85) ? (scrollElement.classList.add("show")) : scrollElement.classList.remove("show");
})

scrollElement.addEventListener("click", function(e){
    document.getElementById("header").scrollIntoView();
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