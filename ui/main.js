console.log('Loaded!');

//change the text of the main-text div
var element=document.getElementById('main-text'
);
element.innerHTML="NEW VALUE";

//move the image
var img=document.getElementById('madi');
img.onClick=function() {
  img.style.marginLeft='100px';  
};
