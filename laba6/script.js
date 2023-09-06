// Завдання 1
function task1() {
    var admin;
    var name = "Васьок";
    admin = name;
    document.getElementById("task1-result").textContent = admin;
}

// Завдання 2
function showUserNamePrompt() {
    var userName = prompt("Будь ласка, введіть ваше ім'я:");
    var userNameOutput = document.getElementById("user-name");
    userNameOutput.textContent = "Ваше ім'я: " + userName;
}

// Завдання 3
function task3() {
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);
    var minResult = Math.min(number1, number2);
    document.getElementById("task3-result").textContent = "Мінімум: " + minResult;
}

// Завдання 4
function convertToFahrenheit() {
    var celsius = parseFloat(document.getElementById("celsius-input").value);
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("fahrenheit-input").value = fahrenheit.toFixed(2);
}

function convertToCelsius() {
    var fahrenheit = parseFloat(document.getElementById("fahrenheit-input").value);
    var celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("celsius-input").value = celsius.toFixed(2);
}

// Завдання 5
function changeImage() {
    var imageUrlInput = document.getElementById("image-url");
    var imageElement = document.getElementById("image");

    var imageUrl = imageUrlInput.value;

    if (imageUrl) {
        imageElement.src = imageUrl;
        imageElement.alt = "Зображення";
    } else {
        alert("Введіть посилання на зображення!");
    }
}


// Завдання 6
var multiplicationTable = [];
var currentQuestionIndex = 0;
var maxQuestions = 5; // Максимальна кількість питань
var correctAnswers = [];
var incorrectAnswers = [];

function generateRandomMultiplication() {
    var num1 = Math.floor(Math.random() * 10) + 1;
    var num2 = Math.floor(Math.random() * 10) + 1;
    return { question: `Скільки буде ${num1} x ${num2}?`, answer: num1 * num2 };
}

function startMultiplicationTask() {
    multiplicationTable = [];
    currentQuestionIndex = 0;
    correctAnswers = [];
    incorrectAnswers = [];

    while (multiplicationTable.length < maxQuestions) {
        var question = generateRandomMultiplication();
        multiplicationTable.push(question);
    }
    showNextMultiplicationQuestion();
}

function showNextMultiplicationQuestion() {
    if (currentQuestionIndex < maxQuestions) {
        var questionContainer = document.getElementById("question-container");
        questionContainer.textContent = multiplicationTable[currentQuestionIndex].question;
        document.getElementById("answer-input").value = "";
        document.getElementById("result-output").textContent = "";
    } else {
        var questionContainer = document.getElementById("question-container");
        questionContainer.textContent = "Завдання закінчено!";
        document.getElementById("answer-input").disabled = true;

        displayResults();
    }
}

function checkAnswer() {
    var answerInput = document.getElementById("answer-input");
    var resultOutput = document.getElementById("result-output");
    var userAnswer = parseInt(answerInput.value);

    if (currentQuestionIndex < maxQuestions) {
        var correctAnswer = multiplicationTable[currentQuestionIndex].answer;
        var currentQuestion = multiplicationTable[currentQuestionIndex].question;

        if (userAnswer === correctAnswer) {
            resultOutput.textContent = `Вірно! Правильна відповідь: ${correctAnswer}`;
            correctAnswers.push({ question: currentQuestion, answer: correctAnswer });
        } else {
            resultOutput.textContent = `Невірно, правильна відповідь: ${correctAnswer}`;
            incorrectAnswers.push({ question: currentQuestion, answer: correctAnswer });
        }

        currentQuestionIndex++;
        showNextMultiplicationQuestion();
    }
}

function displayResults() {
    var results = document.getElementById("result-output");
    results.innerHTML = "<h3>Правильні відповіді:</h3><ul>";

    for (var i = 0; i < correctAnswers.length; i++) {
        results.innerHTML += `<li>${correctAnswers[i].question} Правильна відповідь: ${correctAnswers[i].answer}</li>`;
    }

    results.innerHTML += "</ul>";

    if (incorrectAnswers.length === 0) {
        results.innerHTML += "<h3>Хибні відповіді:</h3>";
        results.innerHTML += "<p>Оце ти розумник!</p>";
    } else {
        results.innerHTML += "<h3>Хибні відповіді:</h3><ul>";

        for (var j = 0; j < incorrectAnswers.length; j++) {
            results.innerHTML += `<li>${incorrectAnswers[j].question} Правильна відповідь: ${incorrectAnswers[j].answer}</li>`;
        }

        results.innerHTML += "</ul>";
    }
}