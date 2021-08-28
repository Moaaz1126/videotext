// alert("اهلا اميمة😘😍😍😍🥰");
var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= 100) {
            document.getElementById('watch').style.display='block';
            document.getElementById('back').style.display='block';
//             document.getElementById('watch2').style.display='block';
//             document.getElementById('back2').style.display='block';
            document.getElementById('watch3').style.display='block';
            document.getElementById('back3').style.display='block';
            document.getElementById('watch4').style.display='block';
            document.getElementById('back4').style.display='block';
            document.getElementById('watch5').style.display='block';
            document.getElementById('back5').style.display='block';
            document.getElementById('watch6').style.display='block';
            document.getElementById('back6').style.display='block';
                    document.getElementById('watch7').style.display='block';
            document.getElementById('back7').style.display='block';
            document.getElementById('myProgress').style.display='none';
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
  // -------------------------------------------------------------to top------------------------------------------------
  //Get the button
var mybutton = document.getElementById("myBtn");
var sar = document.getElementById("sar");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 66) {
    mybutton.style.display = "block";
    sar.style.display = "block";
  } else {
    mybutton.style.display = "none";
        sar.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
