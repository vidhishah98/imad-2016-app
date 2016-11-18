console.log('Loaded!');

//change the text of the main-text div
var element=document.getElementById('main-text'
);
element.innerHTML="NEW VALUE";

//move the image
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
}
img.onClick=function() {
    var interval=setInterval(moveRight,50);
};



//Counter code
var button=document.getElementById('counter');
button.onClick = function() {
    
    //create a request object
    var request= new XMLHttpRequest();
    
    
    //Capture the response and store it in a variable
    request.onreadystatechange=function() {
      if(request.readystate === XMLHttpRequest.DONE)  {
          //Take some action
          if(request.status === 200){
              var counter=request.responseText;
              var span=document.getElementById("count");
                span.innerHTML=counter.toString();
          };
      };
      //Not done yet
    };
    
    //Make the request
    request.open('GET','http://vidhishah98.imad.hasura-app.io/counter',true);
   request.send(null);
};

//submit name

var submit=document.getElementById('submit_btn');
submit.onClick=function() {
    
     //create a request object
    var request= new XMLHttpRequest();
    
    
    //Capture the response and store it in a variable
    request.onreadystatechange=function() {
      if(request.readystate === XMLHttpRequest.DONE)  {
          //Take some action
          if(request.status === 200){
               //capture a list of names and render it as a list
             var name=request.responseText;
             names=JSON.parse(names);
               var list='';
           for(var i=0;i<=names.length;i++){
               list+="<li>"+names[i]+"</li>";
   }
   var ul=document.getElementById('namelist');
ul.innerHTML=list;
             
        }
      }
      //Not done yet
    };
    
    //Make the request
    var nameInput=document.getElementById('name');
    var name=nameInput.value;
    request.open('GET','http://vidhishah98.imad.hasura-app.io/submit-name?name='+name,true);
   request.send(null);
};

 