const GENERAL_QUIZ_URL = "http://localhost:8080/c3po/planet/";
import{ score } from "/js/controllers/score.js";
let userScore = 0;
let visitedPlanets = [];
/*
Example planetQuiz as they are received from the BD
*/
const planetQuiz = [
    {
        "id": 1,
        "description": "C3PO appears for the first time in this world?",
        "score": 1,
        "answers": [
            {
                "id": 1,
                "description": "True",
                "correct": true
            },
            {
                "id": 2,
                "description": "False",
                "correct": false
            }
        ]
    },
    {
        "id": 2,
        "description": "Who buys C3PO and R2D2 in Tattoine?",
        "score": 2,
        "answers": [
            {
                "id": 6,
                "description": "Obi-Wan Kenobi",
                "correct": false
            },
            {
                "id": 5,
                "description": "R2D2",
                "correct": false
            },
            {
                "id": 4,
                "description": "Shmi",
                "correct": false
            },
            {
                "id": 3,
                "description": "Owen Lars and Luke Skywalker",
                "correct": true
            }
        ]
    },
    {
        "id": 3,
        "description": "Who assembled C3PO?",
        "score": 3,
        "answers": [
            {
                "id": 9,
                "description": "Cliegg Lars",
                "correct": false
            },
            {
                "id": 8,
                "description": "Shmi",
                "correct": false
            },
            {
                "id": 7,
                "description": "Anakin Skywalker",
                "correct": true
            },
            {
                "id": 10,
                "description": "The Sand people",
                "correct": false
            }
        ]
    }
];


export const loadQuiz = (planetName) => {
    /*
    * To consume the BD REST API

    const response = await fetch(GENERAL_QUIZ_URL + ${planetName}/quiz);

    if(response.ok) {
        const data = await response.json();
        planetQuiz = data.results;
    }

    THE RESULT IS AN ARRAY OF QUESTIONS&ANSWERS AS IN THE EXAMPLE
    */
    if(!visitedPlanets.includes(planetName)) {
        renderQuiz(planetQuiz);
        visitedPlanets.push(planetName);
    } else {
        console.log("This planet's quiz has already been taken.");
    }

    console.log(planetQuiz);
}

const renderQuiz = planetQuiz => {
    
    /*Tracks which question in the planetQuiz array is currently being displayed.*/    
    let currentQuestionIndex = 0;

    const showNextQuestion = () => {
        if(currentQuestionIndex < planetQuiz.length) {
            /*
            Calls generateQuizCard with the current question and a reference to itself (showNextQuestion). This ensures the next question is displayed only when showNextQuestion is explicitly invoked 
            */
            generateQuizCard(planetQuiz[currentQuestionIndex], showNextQuestion);
            currentQuestionIndex ++;
        } else {
            score(userScore);
        }
    }

    showNextQuestion(); //Invoked for the first time here!
}



/*
This function takes in an object from the array and has a call back function - onAnswerSelect. This is going to trigger the showNextQuestion in the renderQuiz function.
*/

const generateQuizCard = (questionAndAnswer, onAnswerSelect) => {
    const mainElement = document.getElementById("main");
    mainElement.className = "pop-up";

    const quizFramework = document.getElementById("quiz-framework");
    quizFramework.innerHTML = "";
    quizFramework.style.visibility = "visible"; 
    quizFramework.setAttribute("style", "display: flex");
    quizFramework.style.display = "flex";

    const c3poContainer = document.createElement('div');
    c3poContainer.className = "robot-container";

        const robotImage = document.createElement('img');
        robotImage.className = "robot-img";
        robotImage.src = "./assets/C-3PO.jpg";

        const dialogBaloon = document.createElement('div');
        dialogBaloon.className = "dialog";
        dialogBaloon.innerHTML= "Good luck to you!"

            const dialogTail = document.createElement('div');
            dialogTail.className = "tail";

            dialogBaloon.appendChild(dialogTail);

        c3poContainer.appendChild(robotImage);    
        c3poContainer.appendChild(dialogBaloon);

    quizFramework.appendChild(c3poContainer);

    const quizContainer = document.createElement('div');
    quizContainer.className = "quiz-container";

        const questionBox = document.createElement('div');
        questionBox.className = "question-box";
    

            const questionHeader = document.createElement('div');
            questionHeader.className = "question-header";
               
            const backButton = document.createElement('button');
                backButton.className = "back-btn";
                backButton.innerHTML = "Back";
                backButton.onclick = () => {
                quizFramework.style.visibility = "hidden";
                mainElement.className = ""; 
};
questionHeader.appendChild(backButton);

                const questionCount = document.createElement('div');
                questionCount.className = "counter";
                questionCount.innerHTML = questionAndAnswer.id;
                questionHeader.appendChild(questionCount);

            const questionContent = document.createElement('div')
            questionContent.className = "question-content";
            questionContent.innerHTML = questionAndAnswer.description.toLowerCase();

        questionBox.appendChild(questionHeader);
        questionBox.appendChild(questionContent);

        const answersBox = document.createElement('div');
        answersBox.className = "answers-box";

            questionAndAnswer.answers.forEach(answer => {
                const option = document.createElement('div');
                option.className = "answer-option";
                option.innerHTML = answer.description.toLowerCase();

                answersBox.appendChild(option);

                option.onclick = () => {
                    if (answer.correct) {
                        option.style.backgroundColor = "green";
                        dialogBaloon.innerHTML = "";
                        dialogBaloon.innerHTML = "Very well, master!";
                    } else {
                        option.style.backgroundColor = "red"; 
                        dialogBaloon.innerHTML = "";
                        dialogBaloon.innerHTML = "We're doomed!";
                    }
            
                    // Add a delay of 1 seconds before calling the callback
                    setTimeout(() => {
                        onAnswerSelect();
            
                        if (answer.correct) {
                            userScore += questionAndAnswer.score;
                        }
            
                        console.log(userScore);
                    }, 1000);
            }
        });
        
        quizContainer.appendChild(questionBox);
        quizContainer.appendChild(answersBox);

    quizFramework.appendChild(quizContainer);    
} 