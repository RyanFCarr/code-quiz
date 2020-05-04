

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
    getNextQuestion();
}


//My HardCoded Questions
var myObj = "";
myObj = {
    "questions": [
        { "title": "Commonly used data types DO NOT include: ", "options": ["strings", "booleans", "alerts","numbers"] },
        { "title": "Question Two", "options": ["option One", "option Two", "option Three"] },
        { "title": "Question Three", "options": ["option One", "option Two", "option Three"] }
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