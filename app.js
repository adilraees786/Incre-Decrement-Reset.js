var data=0;

 let incre=document.getElementById("heading")

 function increment(){

data++;

incre.innerText=data

 }

 function decrement() {

   
    if(data > 0){

        data--;
    incre.innerText=data;
}
 }

 function reset() {

    data=0;
    incre.innerText=data
 }