// Sets global variables
let time = 60;
let timing;
let correct = 0;
let answered_qs= 0;
let score = 0;
let initial = "";
let q_display ="";
let answer_a = "";
let answer_b = "";
let answer_c = "";
let answer_d = "";
// Object for scoreboard
let score_board = [
    {
      name: "GJS",
      score: 10
    },
    {
      name: "MJG",
      score: 20
    },
    {
      name: "GMS",
      score: 40
    }
  ];
// Objects holding questions
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
// Array hold question objects
let question_array=[question_set,question_set1,question_set2,question_set3,question_set4];
// Global variables for score board display
let first_place = document.getElementById("1st").textContent = `Name:${score_board[0].name}  Score:${score_board[0].score}`;
let second_place = document.getElementById("2nd").textContent = `Name:${score_board[1].name}  Score:${score_board[1].score}`;
let third_place = document.getElementById("3rd").textContent = `Name:${score_board[2].name}  Score:${score_board[2].score}`;
// function that displays and hides cards
function display_hide_card(show,hide_1,hide_2){
    document.querySelector(show).style.display = "block";
    document.querySelector(hide_1).style.display = "none";
    document.querySelector(hide_2).style.display = "none";
};

// Function to begin quiz
function start(){
    document.getElementById("start").textContent = "RESTART";
    display_hide_card('.test_card', '.score_card', '.name_card');
        // Variables for test_card
        question_array.sort(()=>0.5 - Math.random());
        answered_qs= 0;
        quiz();
    // Function for timer
    function count_down(){
        // time = 60;  
        counter = document.getElementById("counter");
        clearInterval(timing);
        timing = setInterval(() => {
            
            counter.textContent = time;
            time--;
            if(time < 0){
                clearInterval(timing);
                alert(`TIMES UP!\nYour Score: ${score}` );
                // show_scores()
                show_name_entry();
            }
        },1000);
    } 
    count_down();     
};
//  Function to make scoreboard visble and quiz_card and name_card hidden
function show_scores(){
    document.getElementById("start").textContent = "START";
    display_hide_card('.score_card', '.test_card', '.name_card');
    time = 60;  
    counter = document.getElementById("counter");
    counter.textContent = time;
    clearInterval(timing); 
};
// Functionn for displaying name_card and hiding others
function show_name_entry(){
    display_hide_card( '.name_card', '.score_card', '.test_card');
    counter = document.getElementById("counter");
    time = 60
    counter.textContent = time;
    clearInterval(timing);

};
//  Function diaplying score_board and for submitting name and score into score board
function submit_name_score(){
    display_hide_card('.score_card', '.test_card', '.name_card');
    let initial = document.getElementById("name_entry").value.toUpperCase();
    if(initial.length != 3){
        alert("Enter Only 3 Letters");
        show_name_entry();
    } else{
        sort_board(initial);
    };   
};
// Function for inserting name and score into scoreboard
function sort_board(name_input){
    score_board.sort((a, b) => b.score - a.score); 
    // IF statement that adds the name and score IF is greater than last of the score_board index
    if(score>score_board[score_board.length- 1].score){
        score_board.pop();
        score_board.push({name: name_input, score: score});
        score_board.sort((a, b) => b.score - a.score);
    }
    first_place = document.getElementById("1st").textContent = `Name:${score_board[0].name}  Score:${score_board[0].score}`;
    second_place = document.getElementById("2nd").textContent = `Name:${score_board[1].name}  Score:${score_board[1].score}`;
    third_place = document.getElementById("3rd").textContent = `Name:${score_board[2].name}  Score:${score_board[2].score}`;

        return score_board
}
// Function that handles question answering and displaying new questions
function quiz(answer){
    if(answer == question_array[answered_qs].answer){
        right_or_wrong.textContent= "Correct";
        correct++;
        answered_qs++;
    } else if (answer === undefined) {
        right_or_wrong.textContent= "";
    }else{
        right_or_wrong.textContent= "Wrong";
        answered_qs++;
        counter = document.getElementById("counter");
        let time_subtract = time -= 15;
        counter.textContent = time_subtract;
        
    };
    if(answered_qs == question_array.length){
        update_correct(correct);
        show_name_entry();
    } else{
        q_display = document.getElementById("questions").textContent = question_array[answered_qs].question;
        answer_a = document.getElementById("a").textContent = question_array[answered_qs].a;
        answer_b = document.getElementById("b").textContent = question_array[answered_qs].b;
        answer_c = document.getElementById("c").textContent = question_array[answered_qs].c;
        answer_d = document.getElementById("d").textContent = question_array[answered_qs].d;
        right_or_wrong = document.getElementById("right_or_wrong");
    };
};
// Function that will update variables correct & score for quiz function   
function update_correct(update){
    correct = update;
    score = (correct/5)*100;
};