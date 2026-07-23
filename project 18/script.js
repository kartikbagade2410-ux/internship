let hour0 = document.querySelector("#A-1");
let hour1 = document.querySelector("#A-2");
let min0 = document.querySelector("#B-1");
let min1 = document.querySelector("#B-2");
let sec0 = document.querySelector("#C-1");
let sec1 = document.querySelector("#C-2");

function clock(){
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    
    
    if(String(hours).length === 1){
        hour0.innerText = 0;
        hour1.innerText = String(hours)[0];

    }else{
         hour0.innerText = String(hours)[0];
         hour1.innerText = String(hours)[1];
    }


 if(String(min).length === 1){
        min0.innerText = 0;
        min1.innerText= String(min)[0];

    }else{
         min0.innerText= String(min)[0];
         min1.innerText= String(min)[1];
    }
    
    
    if(String(sec).length === 1){
        sec0.innerText = 0;
        sec1.innerText= String(sec)[0];

    }else{
         sec0.innerText= String(sec)[0];
         sec1.innerText= String(sec)[1];
    }
}
setInterval(() => {
    clock();
}, 1000);
