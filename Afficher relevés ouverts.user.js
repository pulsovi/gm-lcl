// ==UserScript==
// @name     Afficher relevés ouverts
// @include  https://particuliers.secure.lcl.fr/outil/UWDM/*
// @version  1
// @grant    none
// ==/UserScript==

document.addEventListener('click', function(e){
  var target = e.target;
  var link, td, el;
  if (target.tagName != 'TD' || target.innerText.length != 10) {
  	console.log('click');
    return;
  }
  td = target;
  link = td.nextElementSibling.firstElementChild;
  td.style.background = 'rgba(111, 227, 194, .2)';
  open(link.href);
}, true);