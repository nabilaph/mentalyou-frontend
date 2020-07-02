const scroll = document.querySelector(".chev");

scroll.addEventListener("click", function(){
    window.scrollTo({
        top: 560,
        left : 0,
        behavior: "smooth",
    });
});