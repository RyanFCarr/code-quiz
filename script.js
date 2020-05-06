
var QuizTitle = "Code Quiz Challenge!";
var highscores = document.getElementById('Highscores');
highscores.onclick=()=>{window.location.href = "highscores.html"};

//Timer
var num = 30;
var button = document.getElementById("startBtn");
var intervalId = 0;
//Click Event 
button.onclick = ()=>{
    //Begin Questions
    getNextQuestion();
    var counter = document.getElementById("counter");
    counter.textContent = num;
    intervalId = setInterval(() => {
        num--;
        counter.textContent = num;
        if(num <= 0){
            countFinalScore(); 
        } 
    }, 1000);
}

//Questions Object
var questionsObj = {
    "questions": [
        { "title": "Commonly used data types DO NOT include: ", "options": ["strings", "booleans", "alerts","numbers"], "answer": 2},
        { "title": "The condition in an if/else statement is enclosed within: ", "options": ["quotes", "curly brackets", "parentheses", "square brackets"], "answer": 1},
        { "title": "Arrays in Javascript can be used to store: ", "options": ["numbers and strings", "other arrays", "booleans", "all of the above"], "answer": 3},
        { "title": "String values must be enclosed within _______ when being assigned to variables: ", "options": ["commas", "curly brackets", "quotes", "parentheses"], "answer": 2},
        { "title": "A very useful tool used during development and debugging for printing content to the debugger is: ", "options": ["Javascript", "terminal/bash", "for loops", "console log"], "answer": 3}
    ]
}

var questionNumber = 0;
function getNextQuestion() {
    var question = questionsObj.questions[questionNumber];
    var card_one = document.createElement("div"); 
    card_one.setAttribute("class", "card");
    card_one.innerHTML =    `<div class="card-body">
                            <h5>${question.title}</h5>
                            </div>
                            <!--Start Buttons here-->
                            <div class="col">
                                <button id="mybutton1" data-option="1" class="btn btn-success mb-2">
                                    1. ${question.options[0]}
                                </button><br>
                                <button id="mybutton2" data-option="2" class="btn btn-success mb-2">
                                    2. ${question.options[1]}
                                </button><br>
                                <button id="mybutton3" data-option="3" class="btn btn-success mb-2">
                                    3. ${question.options[2]}
                                </button><br>
                                <button id="mybutton4" data-option="4" class="btn btn-success mb-2">
                                    4. ${question.options[3]}
                                </button><br>
                            </div>`;
    document.querySelector('#card-wrapper .card').replaceWith(card_one);
    questionNumber++;
    document.getElementById("mybutton1").addEventListener("click", evaluateAnswer);
    document.getElementById("mybutton2").addEventListener("click", evaluateAnswer);
    document.getElementById("mybutton3").addEventListener("click", evaluateAnswer);
    document.getElementById("mybutton4").addEventListener("click", evaluateAnswer);
}

function evaluateAnswer(click){
    var answer =  questionsObj.questions[questionNumber -1].answer;
    if(answer !== click.target.dataset.option ){
        num = num -10;
    }
    if(questionsObj.questions.length > questionNumber){
        getNextQuestion();
    }else{
        countFinalScore();
    }      
}


//Final score
function countFinalScore() {
    clearInterval(intervalId);
    var card_allDone = document.createElement("div");
    card_allDone.setAttribute("class", "card");
    card_allDone.innerHTML =    `<div class="card-body">
                                    <h5>All Done!
                                    </h5>
                                    <div class="row py-2">
                                        <span class="col">Your final score is: ${num}
                                        </span>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            Enter initials:
                                            <input id="initials" type="text"></input>
                                            <!--Submit button here-->
                                            <button id="submit-initials" class="btn btn-success mb-2">Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>`;
    document.querySelector('#card-wrapper .card').replaceWith (card_allDone);
    var submitBtn = document.getElementById("submit-initials");
    submitBtn.addEventListener("click", ()=>{
    var usrName = document.getElementById("initials").value;
    var scores = JSON.parse(localStorage.getItem("scores"))
    if(scores){
        scores.scores.push({"initials" : usrName,"scores" : num})
    }else{
        scores = {
            "scores" : [{
                "initials" : usrName,
                "scores" : num
            }]
        }
    }
    localStorage.setItem("scores", JSON.stringify(scores));
    window.location.href = "highscores.html";
    })
}



