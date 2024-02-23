const dropdown = document.getElementById("btn");
const content = document.getElementById("myDropdown");
const dropdownn = document.getElementById("btnn");
const contentt = document.getElementById("myDropdownn");


content.style.display = "none";
contentt.style.display = "none";

dropdown.addEventListener("click", (event) =>{
    if ( content.style.display == "none") {
        content.style.display = "flex";
    }else{
        content.style.display = "none";
    };
});

dropdownn.addEventListener("click", (event) =>{
    if ( contentt.style.display == "none") {
        contentt.style.display = "flex";
    }else{
        contentt.style.display = "none";
    };
});








let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" orange", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " orange";
  setTimeout(showSlides, 2500); // Change image every 2 seconds
};

function swipeLeft(){
  document.getElementById("slide").style.transform = "translateX(-402px)";
};

function swipeRight(){
  document.getElementById("slide").style.transform = "translateX(0px)";
};

function main3Left(){
  document.getElementById("main3id").style.transform = "translateX(-1790px)";
};

function main3Right(){
  document.getElementById("main3id").style.transform = "translateX(0px)";
};