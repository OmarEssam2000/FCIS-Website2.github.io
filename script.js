let aside = document.querySelector("aside");
let spans = document.getElementById("spans");
let inp =  document.querySelector("input");
let wi = screen.width;
spans.addEventListener("click", () =>  {
    aside.classList.toggle("active");
});

let myName1 = " الموقع الرسمي لكلية الحاسبات و المعلومات";

let index1 = 1;
function writeText(){
    document.querySelector("#auto-write1").style.fontSize = "25px";
    document.querySelector("#auto-write1").textContent = myName1.slice(0,index1);
    index1++;
    if(index1 > myName1.length){
        index1 = 1;
    }
}
setInterval(() => {
    writeText();
}, 250);


let myName2 = " جامعة المنصورة";

let index2 = 1;
function writeText2(){
    document.querySelector("#auto-write2").style.fontSize = "25px";
    document.querySelector("#auto-write2").textContent = myName2.slice(0,index2);
    index2++;
    if(index2 > myName1.length){
        index2 = 1;
    }
}
setInterval(() => {
    writeText2();
}, 250);




mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
};

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

