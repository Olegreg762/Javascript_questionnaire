let time = 60;
let timing;
let correct = "";
let answered_qs= 0;
let score = (correct/5)*100;
let initial = "";
let answer_a = "";
let answer_b = "";
let answer_c = "";
let answer_d = "";
let score_board = [
    {
      name: "GJS",
      score: 20
    },
    {
      name: "MJG",
      score: 40
    },
    {
      name: "GMS",
      score: 60
    }
  ];
  
let question_set = {    
    question: "How does a WHILE Loop begin",
    a: "while i = 1 to 10",
    b: "while (i <= 10; i++)",
    c: "while (i <= 10)",
    d: "whie {i<= 10; i++}",
    answer: "c"
};
let question_set1 = {
    question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    a: "if i =! 5 then",
    b: "if (i != 5)",
    c: "if (i <> 5)",
    d: "if i <> 5",
    answer: "b",
};
let question_set2 = {
    question: "How to write an IF statement in JavaScript?",
    a: "if i = 5 then",
    b: "if i = 5",
    c: "if i == 5 then",
    d: "if (i == 5)",
    answer: "d",
};
let question_set3 = {
    question: "How do you call a function named 'myFunction'?",
    a: "call function myFunction()",
    b: "call myFunction()",
    c: "myFunction()",
    d: "myFunction",
    answer: "c",
};
let question_set4 = {
    question: "How do you create a function in JavaScript?",
    a: "function = myFunction()",
    b: "function myFunction()",
    c: "function:myFunction()",
    d: "def myFunction()",
    answer: "b",
};
let question_array=[question_set,question_set1,question_set2,question_set3,question_set4];

// Variable for score_card
let first_place = document.getElementById("1st").textContent = `Name:${score_board[0].name}  Score:${score_board[0].score}`
let second_place = document.getElementById("2nd").textContent = `Name:${score_board[1].name}  Score:${score_board[1].score}`
let third_place = document.getElementById("3rd").textContent = `Name:${score_board[2].name}  Score:${score_board[2].score}`

function start(){
    document.getElementById("start").textContent = "RESTART";
    let start_quiz = document.querySelector(".test_card");
        start_quiz.style.display = "block";
    let hide_score = document.querySelector('.score_card')
        hide_score.style.display = "none";
    let name_entry_show = document.querySelector('.name_card')
        name_entry_show.style.display = "none";


        // Variables for test_card
        question_array.sort(()=>0.5 - Math.random());
        answered_qs= 0;
        quiz()

    function count_down(){
        time = 60;  
        counter = document.getElementById("counter");
        clearInterval(timing)
        timing = setInterval(() => {
            
            counter.textContent = time;
            time--;
            if(time < 0){
                clearInterval(timing);
                alert(`TIMES UP!\nYour Score: ${score}` )
                // show_scores()
                show_name_entry()
            }
        },1000);
    } 
    count_down();  
    
    
};

function show_scores(){
    document.getElementById("start").textContent = "START";
    let score_stats = document.querySelector(".score_card");
        score_stats.style.display = "block";
    time = 60;
    let hide_start = document.querySelector('.test_card')
        hide_start.style.display = "none";
    let name_entry_show = document.querySelector('.name_card')
        name_entry_show.style.display = "none";
    counter = document.getElementById("counter");
    counter.textContent = time;
    clearInterval(timing);

    
};

function show_name_entry(){
    let hide_start = document.querySelector(".test_card");
        hide_start.style.display = "none";
    let hide_score = document.querySelector('.score_card')
        hide_score.style.display = "none";
    let name_entry_show = document.querySelector('.name_card')
        name_entry_show.style.display = "block";
        first_place = document.getElementById("1st").textContent = `Name:${score_board[0].name}  Score:${score_board[0].score}`
        second_place = document.getElementById("2nd").textContent = `Name:${score_board[1].name}  Score:${score_board[1].score}`
        third_place = document.getElementById("3rd").textContent = `Name:${score_board[2].name}  Score:${score_board[2].score}`
    

};

function submit_name_score(score){
    let hide_score = document.querySelector('.score_card')
        hide_score.style.display = "block";
    let name_entry_show = document.querySelector('.name_card')
        name_entry_show.style.display = "none";
    let initial = document.getElementById("name_entry").value;
    console.log(initial, score);
        sort_board(initial)
        
};

function sort_board(name_input){
    // let initial = document.getElementById("name_entry").value;
    score_board.sort((a, b) => b.score - a.score); 
    // IF statement that adds the name and score IF is greater than last of the score_board index
    if(score>score_board[score_board.length- 1].score){
        score_board.pop();
        score_board.push({name: name_input, score: score})
        score_board.sort((a, b) => b.score - a.score);
    }
    first_place = document.getElementById("1st").textContent = `Name:${score_board[0].name}  Score:${score_board[0].score}`
    second_place = document.getElementById("2nd").textContent = `Name:${score_board[1].name}  Score:${score_board[1].score}`
    third_place = document.getElementById("3rd").textContent = `Name:${score_board[2].name}  Score:${score_board[2].score}`

        return score_board
}
    


function quiz(answer){
        
    q_display = document.getElementById("questions").textContent = question_array[0].question;
    answer_a = document.getElementById("a").textContent = question_array[0].a;
    answer_b = document.getElementById("b").textContent = question_array[0].b;
    answer_c = document.getElementById("c").textContent = question_array[0].c;
    answer_d = document.getElementById("d").textContent = question_array[0].d;
    right_or_wrong = document.getElementById("right_or_wrong");
    
    if(answer == question_array[0].answer){
        right_or_wrong.textContent= "Correct";
        correct++;
        answered_qs++;
        console.log(correct, answered_qs);
    } else if (answer === undefined) {
        right_or_wrong.textContent= "";
    }else{
        right_or_wrong.textContent= "Wrong";
        answered_qs++;
        console.log(answered_qs);
    };
    console.log(question_array.length)
    if(answered_qs == question_array.length){
        update_correct(correct);
        show_name_entry();
    }

    

};
    
function update_correct(new_correct){
    correct = new_correct;
};
console.log(correct);