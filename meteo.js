// ==UserScript==
// @name       meteo moris
// @namespace  http://radar.metservice.intnet.mu/radar-image-viewer/*
// @match      http://radar.metservice.intnet.mu/radar-image-viewer/*
// @version     1
// ==/UserScript==
 

var bigbox = document.getElementsByClassName("main-contents");


var box = document.createElement('div');//create a div
    box.className = 'boxer';//assign class

	box.style.width = "300px"; 
box.style.height = "300px";
box.style.zIndex = "100"; 
box.style.position = "absolute"; 
box.style.opacity = "0.5"; 
box.style.left = "400px"; 
box.style.top = "35px"; 
box.style.display="none"; 
	bigbox[0].insertBefore(box, bigbox[0].firstChild);

var img = document.createElement("img");
 
img.src = "https://static.wixstatic.com/media/637481_6716f799a9234c06ba6db6693b797384~mv2.png/v1/fill/w_1200,h_1384,al_c,q_90,usm_0.66_1.00_0.01/map1.webp";
img.style.width="530px"
 
box.appendChild(img);


var triggers = document.getElementsByClassName('radarSite-selector');



triggers[0].addEventListener('click', addit, false);


function addit(){
//alert(triggers[0].value);
  if(triggers[0].value=="trouauxcerfs40km"){
		//alert(1);
    box.style.display="initial"; 
      var pcontrols = document.getElementsByClassName('radar-site-label');


var pcontrol=pcontrols[0];

  
var innerdiv = document.createElement("div");
 innerdiv.setAttribute("id", "pmapbox");
var pinput = document.createElement("input");


pinput.setAttribute("class", "overlay-checkbox");
pinput.setAttribute("id", "pmap");
pinput.setAttribute("type", "checkbox");   
pinput.setAttribute("value", "pmap");  
  //alert(2);
  pinput.setAttribute("checked", "true");
pinput.addEventListener('click', showmap, false);
innerdiv.appendChild(pinput);
//alert(3);
var plabel = document.createTextNode("PMAP");
innerdiv.appendChild(plabel);
pcontrol.appendChild(innerdiv);
    //alert(pcontrol.innerHTML);
  }
  else{
    box.style.display="none"; 
    var pcontrols = document.getElementsByClassName('radar-site-label');
		var pcontrol=pcontrols[0];
    elem=document.getElementById('pmapbox')
    pcontrol.removeChild(elem);
  }


}

function showmap(){

  var pbox=document.getElementById('pmap')
  if(pbox.checked){
   box.style.display="initial"; 
  }
  else{
    box.style.display="none"; 
  }
  
}

dragElement(box);



function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (1==1) {
    /* if present, the header is where you move the DIV from:*/
    elmnt.onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}