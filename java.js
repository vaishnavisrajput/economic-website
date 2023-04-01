const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classlist.toggle("sticky", this.window.scrollY > 0);
})
