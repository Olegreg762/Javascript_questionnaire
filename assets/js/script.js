let correct = 0;
let wrong = 0;
let score = (correct/5)*100 + "%";
let intials = "";
let question_set = {
    question: "Which is a variable prefix in Javascript",
    a: "A. var",
    b: "B. who",
    c: "C. cont",
    d: "D. text",
    answer: "a"
};
let question_set1 = {    
    question: "How deos a WHILE Loop begin",
    a: "while i = 1 to 10",
    b: "while (i <= 10; i++)",
    c: "while (i <= 10)",
    d: "whie {i<= 10; i++}",
    answer: "c"
};
let question_set2 = {
    question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    a: "if i =! 5 then",
    b: "if (i != 5)",
    c: "if (i <> 5)",
    d: "if i <> 5",
    answer: "b",
};
let question_set3 = {
    question: "How to write an IF statement in JavaScript?",
    a: "if i = 5 then",
    b: "if i = 5",
    c: "if i == 5 then",
    d: "if (i == 5)",
    answer: "d",
};
let question_set4 = {
    question: "How do you call a function named 'myFunction'?",
    a: "call function myFunction()",
    b: "call myFunction()",
    c: "myFunction()",
    d: "myFunction",
    answer: "c",
};
let question_set5 = {
    question: "How do you create a function in JavaScript?",
    a: "function = myFunction()",
    b: "function myFunction()",
    c: "function:myFunction()",
    d: "def myFunction()",
    answer: "b",
};

let time = 60;
let timing;

// Variables for test_card
let q_display = document.getElementById("questions").textContent = question_set.question;
let answer_a = document.getElementById("a").textContent = question_set.a;
let answer_b = document.getElementById("b").textContent = question_set.b;
let answer_c = document.getElementById("c").textContent = question_set.c;
let answer_d = document.getElementById("d").textContent = question_set.d;
let right_or_wrong = document.getElementById("right_or_wrong").textContent= "";

// Variable for score_card
let first_place = document.getElementById("1st").textContent = "gg"
let second_place = document.getElementById("2nd").textContent = "ff"
let third_place = document.getElementById("3rd").textContent = "dd"

function start(){
    let start_quiz = document.querySelector(".test_card");
        start_quiz.style.display = "block";
    let hide_score = document.querySelector('.score_card')
        hide_score.style.display = "none";

    function count_down(){
        time = 60;  
        counter = document.getElementById("counter");
        clearInterval(timing)
        timing = setInterval(() => {
            
            counter.textContent = time;
            time--;
            if(time < -1){
                clearInterval(timing);
                alert(`TIMES UP!\nYour Score: ${score}` )
                show_scores()
            }
        },1000);
    } 
    count_down();  
    
    
};

function show_scores(){
    let score_stats = document.querySelector(".score_card");
        score_stats.style.display = "block";
    time = 60;
    let hide_start = document.querySelector('.test_card')
        hide_start.style.display = "none";
    counter = document.getElementById("counter");
    counter.textContent = time;
    clearInterval(timing);

    
};




