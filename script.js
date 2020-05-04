

var button = document.getElementById("mybutton");
button.onclick = MyButtonClick;

//Button Start
function MyButtonClick() {

    //Timer
    function countdown(minutes) {
        var seconds = 60;
        var mins = minutes
        function tick() {
            //This script expects an element with an ID = "counter". You can change that to what ever you want. 
            var counter = document.getElementById("counter");
            var current_minutes = mins - 1
            seconds--;
            counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
            if (seconds > 0) {
                setTimeout(tick, 1000);
            } else {
                if (mins > 1) {
                    countdown(mins - 1);
                }
            }
        }
        tick();
    }
    countdown(1);
    //getNextQuestion();
    countFinalScore();

}


//My HardCoded Questions
var myObj = "";
myObj = {
    "questions": [
        { "title": "Commonly used data types DO NOT include: ", "options": ["strings", "booleans", "alerts","numbers"] },
        { "title": "The condition in an if/else statement is enclosed within: ", "options": ["quotes", "curly brackets", "parentheses", "square brackets"] },
        { "title": "Arrays in Javascript can be used to store: ", "options": ["numbers and strings", "other arrays", "booleans", "all of the above"] },
        { "title": "String values must be enclosed within _______ when being assigned to variables: ", "options": ["commas", "curly brackets", "quotes", "parentheses"] },
        { "title": "A very useful tool used during development and debugging for printing content to the debugger is: ", "options": ["Javascript", "terminal/bash", "for loops", "console log"] }
    ]
}

var QuizTitle = "Code Quiz Challenge!";

//Set Question index.
var questionNumber = 0;

function getNextQuestion() {
    var question = myObj.questions[questionNumber];
    var card_one = document.createElement("div"); 
    card_one.setAttribute("class", "card");
    card_one.innerHTML =  `
                        <div class="card-body">
                            <h5>${question.title}</h5>
                        </div>
                        <!--Start Buttons here-->
                        <div class="col">
                            <button id="mybutton1" class="btn btn-success mb-2">
                                1. ${question.options[0]}
                            </button><br>
                            <button id="mybutton2" class="btn btn-success mb-2">
                                2. ${question.options[1]}
                            </button><br>
                            <button id="mybutton3" class="btn btn-success mb-2">
                                3. ${question.options[2]}
                            </button><br>
                            <button id="mybutton3" class="btn btn-success mb-2">
                                4. ${question.options[3]}
                            </button><br>
                        </div>`;

    document.querySelector('#card-wrapper .card').replaceWith(card_one);
    questionNumber++;

}

var default_card = `<div id="default" class="card">
                        <div class="card-body">
                            <h5 class="card-title text-center">
                                Code Quiz Challenge!
                            </h5>
                            <hr />
                            <!--Row for Instructions-->
                            <div class="d-flex">
                                <div class="row mx-1 justify-content-center">
                                    <div class="col-12 col-md-10 col-lg-8 text-center">
                                        <p>
                                            Try to answer the following
                                            code-related questions within the
                                            time limit. Keep in mind that an
                                            incorrect answer will penalize your
                                            score by 10 seconds!
                                        </p>
                                        <br />
                                        <!--Start Button here-->
                                        <div class="col text-center">
                                            <button id="mybutton" class="btn btn-success">
                                                Start Quiz!
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`




function countFinalScore() {

    var finalScore = "Your final score is "; 
    var card_allDone = document.createElement("div");
    
    card_allDone.setAttribute("class", "card");
    card_allDone.innerHTML =    `<div class="card-body">
                                    <h5>All Done!
                                    </h5>
                                    <div class="row py-2">
                                        <span class="col">Your final score is:
                                        </span>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            Enter initials:
                                            <input type="text"></input>
                                            <!--Submit button here-->
                                            <button id="submit-initials" class="btn btn-success mb-2">Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>`;

        document.querySelector('#card-wrapper .card').replaceWith (card_allDone);
}
