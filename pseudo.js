// const toggle = document.getElementById('sun');
// const body = document.querySelector('body');

// toggle.addEventListener('click', function(){
//     this.clssList.toggle('moon.svg');
//     if(this.classList.toggle('sun.svg')){
//         body.style.background='black';
//         body.style.color='black';
//         body.style.transition='2s';
//     }else{
//         body.style.background='black';
//         body.style.color = 'white';
//         body.style.transition='2s';
//     }
// })

let btn = document.querySelector('#sun');
let bodyall = document.querySelector('.bdycnt');
let fullbody = document.querySelector('.cntainer');
let borderbox = document.querySelector('.boxcntr');
let columnscntr = document.querySelector('.columnscntr');
let navigation = document.querySelector('.navigation');

        function Animatedtoggle(){
            btn.classList.toggle('active');
            bodyall.classList.toggle('active');
            fullbody.classList.toggle('active');
            borderbox =classList.toggle('active');
            columnscntr =classList.toggle('active');
            navigation =classList.toggle('active');
        }