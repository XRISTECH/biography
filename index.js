function myfunction() {
    var dots =
    document.getElementById("dots");
    var moreText =
    document.getElementById("more");
    var btnText =
    document.getElementById("myBtn");
    
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read More";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "inline";
    }
}


function myfunctiontwo() {
   var dotone =
 document.getElementById("dotone");
  var moreText =
   document.getElementById("moreone");
 var btnText =
 document.getElementById("myButton");
    
 if (dotone.style.display === "none") {
        dotone.style.display = "inline";
        btnText.innerHTML = "Read More";
        moreText.style.display = "none";
     } else {
        dotone.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "inline";
   }
}

function myfunctionthree() {
   var dotone =
 document.getElementById("dotthree");
  var moreText =
   document.getElementById("morethree");
 var btnText =
 document.getElementById("myBut");
    
 if (dotone.style.display === "none") {
        dotone.style.display = "inline";
        btnText.innerHTML = "Read More";
        moreText.style.display = "none";
     } else {
        dotone.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "inline";
   }
}










let mybutton = document.getElementById("tt");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

    function scrolltotop(){
        window.scrollTo(0,0);
    }