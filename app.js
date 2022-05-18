
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
let k = 0;

function f3(){

   if(k == 0 ){
      first.style.order = "2";
      second.style.order = "1";
      k = 1;
   }

   else if( k == 1){
      first.style.order = "1";
      second.style.order = "2";
      k = 0;
   }

}





