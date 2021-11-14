function showmore(text, arrow) {
    var moreText = document.getElementById(text);
    var arrowChange = document.getElementById(arrow);


    if(!moreText)return true;
    if (getStyle(moreText, "display") == "none") 
    {   
        arrowChange.style.transform = "rotate(45deg)";
        moreText.style.display = "inline";
    } 
    else {
        arrowChange.style.transform = "rotate(-45deg)";
        moreText.style.display = "none";
    }
}

function getStyle(el, name)
{
  // the way of the DOM
  if ( document.defaultView && document.defaultView.getComputedStyle )
  {
    var style = document.defaultView.getComputedStyle(el, null);
    if ( style )
      return style[name];
  }
  // IE-specific
  else if ( el.currentStyle )
    return el.currentStyle[name];
  
  return null;
}