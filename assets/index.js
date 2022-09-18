let JQuery = (e)=> document.querySelector(e),
    pathIndex = JQuery(".button-on"),
    scrollElement = JQuery(".scrollTop"),
    headerUlista = JQuery(".header-ul"),
    headerIndex = JQuery(".header-index"),
    headerButton = JQuery(".header-button"),
    ulLi = JQuery(".section-servicos-lista"),
    ul = document.querySelectorAll(".header-ul li");



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
}, {threshold: .1 });

// observando
Object.values(ulLi.children).forEach(element => {
        observe.observe(element);
});



// responsividade
const resolucaoView =  window.matchMedia("(max-width:765px)");
resolucaoView.addEventListener("change", dispositivo)
function dispositivo(e) {
    if(e.matches == false && headerUlista.classList.contains("on"))
    {
        headerUlista.classList.remove("on");
        pathIndex.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
    }
}

// scroll
addEventListener("scroll", function(e){
    (e.target.scrollingElement.scrollTop >= 85) ? (scrollElement.classList.add("show")) : scrollElement.classList.remove("show");
    (e.target.scrollingElement.scrollTop >= 85) ? headerIndex.classList.add("color") : headerIndex.classList.remove("color");


    if(headerUlista.classList.contains("on") == true)
    {
        headerUlista.classList.remove("on");
        headerButton.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
    }
})



// clicks
scrollElement.addEventListener("click", function(e){
    //butao de subir
    document.getElementById("base").scrollIntoView();
})


headerButton.addEventListener("click", function(e){
    // menu
    headerUlista.classList.toggle("on");
    headerUlista.classList.contains("on") == false ? pathIndex.setAttribute("d", "M4 6h16M4 12h16M4 18h16") : pathIndex.setAttribute("d", "M6 18L18 6M6 6l12 12");
})
