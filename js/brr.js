document.getElementById("image-parent").onmouseover = function() {mouseOver()};
document.getElementById("image-parent").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementById("hover-images").style.display = "flex";
}

function mouseOut() {
    document.getElementById("hover-images").style.display = "none";
}