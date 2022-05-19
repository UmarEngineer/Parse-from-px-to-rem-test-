
function f() {
   let px = document.form.px.value;
   let rem = document.form.rem;


   let remResult = px / 16;
   rem.value = remResult;
}

function f2() {
   let px = document.form.px;
   let rem = document.form.rem.value;


   let pxResult = rem * 16;
   px.value = pxResult;

}

let first = document.querySelector('.first');
let second = document.querySelector('.second');
const btn = document.querySelector('.button');

btn.addEventListener('click', function (){
   first.classList.toggle('order');
})





