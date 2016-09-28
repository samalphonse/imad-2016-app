console.log('Loaded!');
// change the text of the main-text div
var element = document.getElementById('main-text');
element.innerHTML='New Value';
var face = document.getElementById('face');
face.onclick = function(){
    face.style.marginLeft = '100px';
};