let correct = 0;
let wrong = 0;
let questions = "";





function count_down(){
    let time = 60; 
    counter = document.getElementById("counter");
    const timing = setInterval(() => {
        counter.textContent = time;
        time--;
        if(time < 0){
            clearInterval(timing);
        }
    },1000);
     
}
count_down();


