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


// Завдання 7
const captchaContainer = document.getElementById("captcha-container");
const userInput = document.getElementById("user-input");
const captchaResult = document.getElementById("captcha-result");

// Створення об'єкта для кожної цифри
const digits = [
    [
        [0, 0, 1, 1, 1, 0, 0],
        [0, 1, 0, 0, 0, 1, 0],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [0, 1, 0, 0, 0, 1, 0],
        [0, 0, 1, 1, 1, 0, 0]
    ],
    [
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 1, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0]
    ],
    [
        [0, 1, 1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 1],
        [0, 1, 1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1]
    ],
    [
        [0, 1, 1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 1],
        [0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [0, 1, 1, 1, 1, 1, 0]
    ],
    [
        [1, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 1, 0],
        [1, 0, 0, 0, 0, 1, 0],
        [1, 0, 0, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 1, 0]
    ],
    [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [0, 1, 1, 1, 1, 1, 0]
    ],
    [
        [0, 1, 1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [0, 1, 1, 1, 1, 1, 0]
    ],
    [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0]
    ],
    [
        [0, 1, 1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [0, 1, 1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [0, 1, 1, 1, 1, 1, 0]
    ],
    [
        [0, 1, 1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [0, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [0, 1, 1, 1, 1, 1, 0]
    ]
];


generateCaptcha();

// Функція для відображення капчі з випадковими цифрами
function generateCaptcha() {
    captchaContainer.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const digit = Math.floor(Math.random() * 10);
        const captchaDigit = document.createElement("canvas");
        const ctx = captchaDigit.getContext('2d');
        
        captchaDigit.height = 100
        captchaDigit.width  = 100
        
        const pixelSize = Math.round(captchaDigit.height / ( digits[0][0].length) + 0.5) // Adjust this value to change pixel size



        captchaDigit.className = "captcha-digit";
        pixelizeDigit(digits[digit], ctx, captchaDigit, pixelSize);
        captchaDigit.dataset.value = digit;
        captchaContainer.appendChild(captchaDigit);
    }
}

// Функція для перевірки введених користувачем цифр
function checkCaptcha() {
    const captchaDigits = document.querySelectorAll(".captcha-digit");
    const userDigits = userInput.value.split('');

    if (userDigits.length !== captchaDigits.length) {
        captchaResult.textContent = "Невірно! Спробуйте ще раз.";
        return;
    }

    let isValid = true;

    for (let i = 0; i < captchaDigits.length; i++) {
        if (parseInt(userDigits[i], 10) !== parseInt(captchaDigits[i].dataset.value, 10)) {
            isValid = false;
            break;
        }
    }

    if (isValid) {
        captchaResult.textContent = "Вірно! Ви не робот!";
    } else {
        captchaResult.textContent = "Невірно! Спробуйте ще раз.";
    }

    generateCaptcha();
}

// Function to pixelize a digit
function pixelizeDigit(digit, ctx, canvas, pixelSize) {
    const imageData = ctx.createImageData(canvas.width, canvas.height);
    for (let y = 0; y < canvas.height; y += pixelSize) {
        for (let x = 0; x < canvas.width; x += pixelSize) {
            const pixelValue = digit[Math.floor(y / pixelSize)][Math.floor(x / pixelSize)];
            for (let i = 0; i < pixelSize; i++) {
                for (let j = 0; j < pixelSize; j++) {
                    const index = ((y + i) * canvas.width + (x + j)) * 4;
                    let color;
                    if(Math.round(Math.random() * 1) == 1)
                    {
                        color = pixelValue ? 0 : 255;
                    } else {
                        color = 0;
                    }
                    imageData.data[index] = color; // Red channel
                    imageData.data[index + 1] = color; // Green channel
                    imageData.data[index + 2] = color; // Blue channel
                    imageData.data[index + 3] = 255; // Alpha channel
                }
            }
        }
    }
    ctx.putImageData(imageData, 0, 0);
}