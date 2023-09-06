// Функція для реєстрації користувача
function registerUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Відправте POST-запит на сервер для реєстрації користувача
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    })
        .then(response => response.json())
        .then(data => {
            // Обробка відповіді від сервера (наприклад, виведення повідомлення про успішну реєстрацію)
        })
        .catch(error => {
            console.error('Помилка реєстрації:', error);
        });
}

// Функція для авторизації користувача
function loginUser() {
    const loginEmail = document.getElementById('login-email').value;
    const loginPassword = document.getElementById('login-password').value;

    // Відправте POST-запит на сервер для авторизації користувача
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
    })
        .then(response => response.json())
        .then(data => {
            // Обробка відповіді від сервера (наприклад, перенаправлення на іншу сторінку після авторизації)
        })
        .catch(error => {
            console.error('Помилка авторизації:', error);
        });
}

// Функція для відправки коментарів
function submitComment() {
    const comment = document.getElementById('comment').value;

    // Відправте POST-запит на сервер для збереження коментаря
    fetch('/comment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment }),
    })
        .then(response => response.json())
        .then(data => {
            // Обробка відповіді від сервера (наприклад, оновлення списку коментарів на сторінці)
        })
        .catch(error => {
            console.error('Помилка відправки коментаря:', error);
        });
}