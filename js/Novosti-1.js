
var modal1 = document.getElementById("Modal-img1");
var modal2 = document.getElementById("Modal-img2");
var img1 = document.getElementById("galerija1");
var img2 = document.getElementById("galerija2");

img1.onclick = function() {
    modal1.style.display = "block";
}

img2.onclick = function() {
    modal2.style.display = "block";
}

  // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1 || event.target == modal2) {
        modal1.style.display = "none";
        modal2.style.display = "none";
    }
}