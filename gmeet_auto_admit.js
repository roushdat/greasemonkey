// ==UserScript==
// @name        GMEET AutoAdmit
// @namespace   https://meet.google.com/
// @match      https://meet.google.com/*
// @version     1
// ==/UserScript==
 

function autoAdmit() {
  	//alert("checking");
    for (let element of document.getElementsByTagName('span')) {
        if (element.innerHTML === 'Admit') {
            console.log('There is someone waiting to join this meeting, automatically admitting them...');
            element.click();
        }
        if (element.innerHTML === 'View all') {
            console.log('Several guests are waiting to join this meeting, viewing list...');
            element.click();
        }
        if (element.innerHTML === 'Admit all') {
            console.log('Several guests are being admitted automatically...');
            element.click();
        }
    }
}
setInterval(autoAdmit, 1000);
