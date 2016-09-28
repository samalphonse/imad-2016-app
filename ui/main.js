console.log('Loaded!');

// change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML='New Value';

// move the image
var face = document.getElementById('face');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 1;
    face.style.marginLeft = marginLeft + 'px';
}
face.onclick = function(){
   var interval = setInterval(moveRight,50);
};