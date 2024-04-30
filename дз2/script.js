const initialData = [
    {
      product: "Apple iPhone 13",
      reviews: [
        {
          id: "1",
          text: "Отличный телефон! Батарея держится долго.",
        },
        {
          id: "2",
          text: "Камера супер, фото выглядят просто потрясающе.",
        },
      ],
    },
    {
      product: "Samsung Galaxy Z Fold 3",
      reviews: [
        {
          id: "3",
          text: "Интересный дизайн, но дорогой.",
        },
      ],
    },
    {
      product: "Sony PlayStation 5",
      reviews: [
        {
          id: "4",
          text: "Люблю играть на PS5, графика на высоте.",
        },
      ],
    },
  ];
  
  // Функция для добавления отзыва
  function addReview() {
    const reviewInput = document.getElementById("reviewInput").value;
    
    // Проверка длины отзыва
    if (reviewInput.length < 50 || reviewInput.length > 500) {
      throw new Error("Длина отзыва должна быть от 50 до 500 символов.");
    }
    
    const reviewsContainer = document.getElementById("reviewsContainer");
    const newReview = document.createElement("div");
    newReview.textContent = reviewInput;
    reviewsContainer.appendChild(newReview);
  }
  
  // Начальная загрузка отзывов
  window.onload = function() {
    const reviewsContainer = document.getElementById("reviewsContainer");
    initialData.forEach(product => {
      product.reviews.forEach(review => {
        const reviewElement = document.createElement("div");
        reviewElement.textContent = review.text;
        reviewsContainer.appendChild(reviewElement);
      });
    });
  };
  