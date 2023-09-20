// Лоудер
const loaderContainer = document.getElementById('loaderContainer');
const mainContent = document.getElementById('mainContent');
function showMainContent() {
  loaderContainer.style.display = 'none';
  mainContent.style.display = 'block';
}
loaderContainer.style.display = 'block';
setTimeout(showMainContent, 1000);
//Слайдер
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 2
          },
          1000: {
              items: 3
          }
      }
  });
});
//Форма
// Функція для отримання збережених даних з локального сховища
function loadFormDataFromLocalStorage() {
  const savedFormData = getFormDataFromLocalStorage();
  if (savedFormData) {
    document.getElementById("name").value = savedFormData.name;
    document.getElementById("phone").value = savedFormData.phone;
    document.getElementById("email").value = savedFormData.email;
  }
}

// Функція для збереження даних у локальне сховище
function saveFormDataToLocalStorage(formData) {
  try {
    const data = JSON.stringify(formData);
    localStorage.setItem("form_data", data);
  } catch (error) {
    console.error("Помилка при збереженні даних у локальне сховище:", error);
  }
}

// Функція для отримання даних з локального сховища
function getFormDataFromLocalStorage() {
  try {
    const data = localStorage.getItem("form_data");
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Помилка при отриманні даних з локального сховища:", error);
    return null;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var mainForm = document.getElementById("myForm");

  mainForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateForm()) {
      sendFormData();
    }
  });

  function validateForm() {
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");

    const nameValue = nameInput.value.trim();
    const phoneValue = phoneInput.value.trim();
    const emailValue = emailInput.value.trim();

    let isValid = true;
    function showError(inputElement, errorMessage) {
      const errorElement = inputElement.nextElementSibling;
      errorElement.textContent = errorMessage;
      inputElement.style.borderColor = "red";
    }
    function hideError(inputElement) {
      const errorElement = inputElement.nextElementSibling;
      errorElement.textContent = "";
      inputElement.style.borderColor = "";
    }
    if (nameValue === "") {
      isValid = false;
      showError(nameInput, "Заповніть поле");
    } else {
      hideError(nameInput);
    }
    if (phoneValue === "") {
      isValid = false;
      showError(phoneInput, "Заповніть поле");
    } else if (!/^\+?\d+$/.test(phoneValue) || phoneValue.length < 10) {
      isValid = false;
      showError(phoneInput, "Перевірте номер телефону");
    } else {
      hideError(phoneInput);
    }
    if (emailValue === "") {
      isValid = false;
      showError(emailInput, "Заповніть поле");
    } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
      isValid = false;
      showError(emailInput, "Перевірте пошту");
    } else {
      hideError(emailInput);
    }
    return isValid;
  }

  function sendFormData() {
    const formData = new FormData(mainForm);
    fetch(mainForm.action, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Response data:", data);
        if (data.trim() === "success") {
          window.location.href = "thank-you.html";
          form.reset();
        } else {
          alert("Помилка при відправці форми. Спробуйте ще раз або зв'яжіться з нами.");
        }
      })
      .catch((error) => {
        console.error("Помилка:", error);
        alert("Сталася помилка під час відправки форми. Спробуйте ще раз або зв'яжіться з нами.");
      });
  }

  // Завантажуємо дані з локального сховища при завантаженні сторінки
  loadFormDataFromLocalStorage();
});



// Елементи кнопок "Деталі"
const openModalBtns = document.querySelectorAll('.open-modal-btn');
const modals = document.querySelectorAll('.modal');
// Oбробники подій для кожної кнопки "Деталі"
openModalBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        modals[index].style.display = 'block';
    });
});
// Oбробник події для закриття модального вікна
modals.forEach((modal, index) => {
    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});
//Калькулятор
function calculatePrice() {
  const direction = document.getElementById("direction").value;
  const activityType = document.getElementById("activity-type").value;
  const numSessions = parseFloat(document.getElementById("num-sessions").value);
  
  let price = 0;
  
  if (direction === "functional") {
    if (activityType === "group") {
      price = numSessions * 12;
    } else if (activityType === "individual") {
      price = numSessions * 20;
    }
  } else if (direction === "pilates") {
    if (activityType === "group") {
      price = numSessions * 12; 
    } else if (activityType === "individual") {
      price = numSessions * 20; 
    }
  }else if (direction === "portDeBras") {
    if (activityType === "group") {
      price = numSessions * 12;
    } else if (activityType === "individual") {
      price = numSessions * 18;
    }
  }else if (direction === "stretching") {
    if (activityType === "group") {
      price = numSessions * 12; 
    } else if (activityType === "individual") {
      price = numSessions * 20; 
    }
  }else if (direction === "stepAerobica") {
    if (activityType === "group") {
      price = numSessions * 12; 
    } else if (activityType === "individual") {
      price = numSessions * 18; 
    }
  }else if (direction === "ballAnce") {
    if (activityType === "group") {
      price = numSessions * 12; 
    } else if (activityType === "individual") {
      price = numSessions * 20; 
    }
  }else if (direction === "blackroll") {
    if (activityType === "group") {
      price = numSessions * 12; 
    } else if (activityType === "individual") {
      price = numSessions * 18; 
    }
  }
  // Оновлюємо відображення ціни
  document.getElementById("price").textContent = price;
}
//Vidgyku
// document.addEventListener("DOMContentLoaded", function () {
//   new bootstrap.Carousel(document.getElementById("testimonialCarousel"), { interval: 4000,
//     wrap: true,
//   });
// });
// Функція для обробки події натискання на кнопку "Надіслати відгук"
function submitFeedback() {
  const name = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;
  const form = document.getElementById("feedbackForm");
  // Перевірка чи поля форми заповнені
  if (!name || !comment) {
    form.classList.add("was-validated");
    return;
  }
  //Створення нового блоку з відгуком
  const testimonialSlide = document.createElement("div");
  testimonialSlide.classList.add("carousel-item");
  testimonialSlide.innerHTML = `
    <div class="testimonial-slide">
      <p class="testimonial-text">"${comment}"</p>
      <p class="testimonial-author">- ${name}</p>
    </div>
  `;
  // Додавання нового блоку до каруселі
  const carouselInner = document.querySelector(".carousel-inner");
  carouselInner.appendChild(testimonialSlide);
  // Очищення полів форми
  document.getElementById("name").value = "";
  document.getElementById("comment").value = "";
  form.classList.remove("was-validated");
}










  





















































