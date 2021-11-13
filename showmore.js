function showmore(text, arrow) {
    var moreText = document.getElementById(text);
    var arrowChange = document.getElementById(arrow);
 
    if (moreText.style.display != "none") 
    {
        arrowChange.style.transform = "rotate(-45deg)";
        moreText.style.display = "none";
    } 
    else {
        arrowChange.style.transform = "rotate(45deg)";
        moreText.style.display = "inline";
    }
}