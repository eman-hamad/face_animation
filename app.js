//---------- Set Our Variables
let  eye = document.querySelectorAll('.ball');
let  face = document.querySelector('.face');
let  massage = document.querySelector('.massage');
let  btn = document.querySelectorAll('.btn')
console.log(btn)


document.addEventListener('mousemove',move);
//------TO Add Eyes Move
function move(e){
    let x = event.pageX * 100 / window.innerWidth + '%';
    let y = event.pageY * 100 / window.innerHeight + '%';
    eye.forEach(s => s.style.top = y)
    eye.forEach(s => s.style.left = x)
    eye.forEach(s => s.style.transform ='translate('+x+','+y+')');
}

//--------To Add Massage
face.addEventListener('mouseenter',show);

function show(){
   massage.classList.add('show');
}
// Alret Massages 
btn[0].addEventListener('mousedown',mass1);
function mass1(){
    massage.classList.remove('show');
 
}