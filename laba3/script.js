document.addEventListener('DOMContentLoaded', function () {
    const pageSelector = document.getElementById('pageSelector');
    const contentDiv = document.getElementById('content');

    pageSelector.addEventListener('change', function () {
        const selectedPage = pageSelector.value;
        contentDiv.innerHTML = ''; // Очистимо вміст, якщо він вже відображений
        if (selectedPage) {
            // Завантажимо і відобразимо вміст обраної сторінки
            fetch(selectedPage)
                .then(response => response.text())
                .then(data => {
                    contentDiv.innerHTML = data;
                })
                .catch(error => {
                    console.error('Помилка завантаження сторінки:', error);
                });
        }
    });
});