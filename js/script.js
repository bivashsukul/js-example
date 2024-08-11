// ex 1----
 function showText(){
     document.getElementById('s_text').innerHTML="Hello Bangla";

 }


// ex2---

function changeContent(){
    document.getElementById('c_content').innerHTML="bangladesh";
    document.getElementById('c_content').style.fontSize="30px";
    document.getElementById('c_content').style.color="red";
}
function hidContent(){
    document.getElementById('c_content').style.display="none";
}
function openContent(){
    document.getElementById('c_content').style.display='block';
    document.getElementById('c_content').style.color="yellow";
    document.getElementById('c_content').style.backgroundColor="blue";
}


// ex3-----
function bulbOnO(){
    document.getElementById('img').src='images/_bulbon.gif';
} 
function bulbOff(){
    document.getElementById('img').src='images/_bulboff.gif';
}

// ex3-----
function bulbOnO1(){
    document.getElementById('imge').src='images/_bulbon.gif';
} 
function bulbOff2(){
    document.getElementById('imge').src='images/_bulboff.gif';
}

// ex-4-----
function changContent(){
    document.getElementById('chang_par').innerHTML="dhaka Bangladesh dhaka Bangladesh";
}


// ex-5----
function dateTime(){
    document.getElementById('date').innerHTML=Date();
}
// ex6----
function nature1(){
    document.getElementById('nature').src="images/img2.jpg";
}
function nature2(){
    document.getElementById('nature').src="images/img1.jpg";
}

// ex7----
function nature3(){
    document.getElementById('natur').src="images/img2.jpg";
}
function nature4(){
    document.getElementById('natur').src="images/img1.jpg";
}

// ex8----
function nature5(){
    document.getElementById('natu').src="images/img2.jpg";
}
function nature6(){
    document.getElementById('natu').src="images/img1.jpg";
}

// ex-9---
function colorChange(){
    document.getElementById('colo').style.color="blue";
}
function bcgChange(){
    document.getElementById('colo').style.backgroundColor="yellow";
}
function fontChange(){
    document.getElementById('colo').style.fontSize="35px";
}

// ex10--------
let x,y,z;
x=5;
y=6;
z=x+y;
function getResult(){

    document.getElementById('stat').innerHTML ="Result =" + z ;
}


// ex11------
function numberShaw(){
    document.getElementById('num').innerHTML="8801775284.......";
}

// ex12-----------

let answer = 'Yes I am!';
let person = "John Doe";
const pi = 3.14;
function allName(){
    document.getElementById('alln').innerHTML= answer + "<br>" + person + "<br>" + pi;
}








