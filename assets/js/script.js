let correct = 1;
let wrong = 0;
let score = (correct/5)*100 + "%";
let intials = "";
let questionset_1 = {
    question : "Which is a variable prefix in Javascript",
    a: "A. var",
    b: "B. who",
    c: "C. cont",
    d: "D. text",
    answer: "a",
    right: "CORRECT",
    wrong: "INCORRECT",
};
 
q_display = document.getElementById("questions").textContent = questionset_1.question;
let answer_a = document.getElementById("a").textContent = questionset_1.a;
let answer_b = document.getElementById("b").textContent = questionset_1.b;
let answer_c = document.getElementById("c").textContent = questionset_1.c;
let answer_d = document.getElementById("d").textContent = questionset_1.d;
let right_or_wrong = document.getElementById("right_or_wrong").textContent= "";


function start(){
    let start_quiz = document.querySelector(".test_card");
        start_quiz.style.display = "block";

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
};




