const GENERAL_QUIZ_URL = "http://localhost:8080/c3po/planet/";
let userScore = 0;
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

    const response = await fetch(GENERAL_QUIZ_URL + `${planetName}/quiz`);

    if(response.ok) {
        const data = await response.json();
        planetQuiz = data.results;
    }

    THE RESULT IS AN ARRAY OF QUESTIONS&ANSWERS AS IN THE EXAMPLE
    */

    renderQuiz(planetQuiz);

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
    quizFramework.setAttribute("style", "display: block");

    const questionBox = document.createElement('div');
    questionBox.className = "question-box";

        const questionHeader = document.createElement('div');
        questionHeader.className = "question-header";

            const closeButton = document.createElement('button');
            closeButton.className = "close-btn";
            closeButton.innerHTML = "X";
            questionHeader.appendChild(closeButton);

            const questionCount = document.createElement('div');
            questionCount.className = "counter";
            questionCount.innerHTML = questionAndAnswer.id;
            questionHeader.appendChild(questionCount);

        const questionContent = document.createElement('div')
        questionContent.className = "question-content";
        questionContent.innerHTML = questionAndAnswer.description;

        questionBox.appendChild(questionHeader);
        questionBox.appendChild(questionContent);

    const answersBox = document.createElement('div');
    answersBox.className = "answers-box";

        questionAndAnswer.answers.forEach(answer => {
            const option = document.createElement('div');
            option.className = "answer-option";
            option.innerHTML = answer.description;

            option.onclick = () => {

                onAnswerSelect();

                if(answer.correct) {
                    userScore += questionAndAnswer.score;
                }

                console.log(userScore);
            }

            answersBox.appendChild(option);
        });
        
    quizFramework.appendChild(questionBox);
    quizFramework.appendChild(answersBox);    
}