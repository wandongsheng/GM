"use strict";window.onload=function(){var s=document.getElementById("zoomBox"),i=document.getElementById("midArea"),n=document.getElementById("zoom"),e=document.getElementById("bigArea"),d=e.children[0];i.onmouseover=function(){n.style.display="block",e.style.display="block"},i.onmouseout=function(){n.style.display="none",e.style.display="none"},i.onmousemove=function(e){var t=e||event,o=t.pageX-s.offsetLeft-n.offsetWidth/2,f=t.pageY-s.offsetTop-n.offsetHeight/2;o<=0&&(o=0),o>=i.offsetWidth-n.offsetWidth&&(o=i.offsetWidth-n.offsetWidth),f<=0&&(f=0),f>=i.offsetHeight-n.offsetHeight&&(f=i.offsetHeight-n.offsetHeight),n.style.left=o+"px",n.style.top=f+"px",d.style.left=-n.offsetLeft/i.offsetWidth*d.offsetWidth+"px",d.style.top=-n.offsetTop/i.offsetHeight*d.offsetHeight+"px"}};