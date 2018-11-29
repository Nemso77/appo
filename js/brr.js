document.querySelectorAll(".image-parent").onmouseover = function() {mouseOver()};
document.querySelectorAll(".image-parent").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.querySelectorAll(".hover-images").style.display = "flex";
}

function mouseOut() {
    document.querySelectorAll(".hover-images").style.display = "none";
}