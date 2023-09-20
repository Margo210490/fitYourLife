// Функція для отримання випадкової цитати
async function getRandomQuote() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      // Отримуємо випадковий індекс цитати
      const randomIndex = Math.floor(Math.random() * data.length);
      const quote = data[randomIndex];
  
      const quoteElement = document.getElementById('quote');
      const quoteText = quote.text;
      const quoteAuthor = quote.author || 'Невідомий автор'; // Якщо автор не вказаний, використовуємо "Невідомий автор"
      quoteElement.querySelector('p').textContent = quoteText;
      quoteElement.querySelector('footer').textContent = '— ' + quoteAuthor;
    } catch (error) {
      console.error('Помилка при отриманні цитати:', error);
    }
  }
  getRandomQuote();
//Обробник події для кнопки "Завантажити нову цитату"
const newQuoteBtn = document.getElementById('newQuoteBtn');
newQuoteBtn.addEventListener('click', getRandomQuote);
$(document).ready(function() {
  // Функція для отримання випадкового зображення котика
  function getRandomKitten() {
    $.get("https://api.thecatapi.com/v1/images/search", function(data) {
      var imageUrl = data[0].url;
      $("#kittenImage").attr("src", imageUrl);
    }).fail(function() {
      console.log("Помилка при отриманні котика");
    });
  }
  // Натискання кнопки "Показати іншого котика"
  $("#getKittenButton").click(function() {
      getRandomKitten();
  });
  // Отримати перше зображення котика при завантаженні сторінки
  getRandomKitten();
});
// Обробка події натискання на кнопку "Надіслати відгук"
document.getElementById("submitFeedback").addEventListener("click", function (event) {
    event.preventDefault();
    submitFeedback();
  });