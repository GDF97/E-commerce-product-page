// Variables
const btnMobile = document.querySelector(".btn-mobile");
const btnClose = document.querySelector(".btn-mobile-close");
const headerNav = document.querySelector(".header__nav");
const thumbnailImage = document.querySelectorAll(".thumbnail");
const mainImage = document.querySelector(".main-image");
const btnMinusPlus = document.querySelectorAll(
  ".quantity-button-wrapper button"
);
const quantityItemDisplay = document.getElementById("quantityItemDisplay");
const btnAddToCart = document.querySelector(".add-to-cart");
const cartStatsBody = document.querySelector(".cart-stats-body");
const btnCart = document.querySelector(".cart__button");
const cartStats = document.querySelector(".cart-stats");
const quantityChoseDisplay = document.getElementById("quantityChose");
const totalValueDisplay = document.getElementById("result");
const btnDelete = document.querySelector(".btn-delete");
const slider = document.querySelector(".slider");
const btnCloseSlider = document.querySelector(".btn-close-slide");
const controls = document.querySelectorAll(".control");
const allImagesSlide = document.querySelectorAll(".main-image-slide");
const thumbnailImageSlide = document.querySelectorAll(".thumbnail-slide");
let quantityLabel = document.getElementById("quantity");
let quantityItem = 0;
let finalQuantity = 0;
let imageIndex = 0;
// Functions

const IncreaseDecrease = (e) => {
  if (e.target.value == "plus") {
    quantityItem++;
  } else {
    if (quantityItem > 0) {
      quantityItem--;
    }
  }
  quantityItemDisplay.textContent = quantityItem;
};

const addToCart = () => {
  finalQuantity = quantityItem;
  if (finalQuantity != 0) {
    let result = finalQuantity * 125;
    cartStatsBody.classList.add("filled");
    quantityChoseDisplay.textContent = finalQuantity;
    totalValueDisplay.textContent = `$${result.toFixed(2)}`;
    quantityLabel.style.display = "flex";
    quantityLabel.textContent = finalQuantity;
  }
};

const removeFromCart = () => {
  cartStatsBody.classList.remove("filled");
  quantityLabel.style.display = "none";
  quantityLabel.textContent = 0;
  quantityChoseDisplay.textContent = 0;
  totalValueDisplay.textContent = 0;
};

const switchMainImage = (e) => {
  let imageClicked = e.target;
  let selectedImage = document.querySelector(".selected");
  if (selectedImage.src != imageClicked.src) {
    imageClicked.classList.add("selected");
    selectedImage.classList.remove("selected");
  }
  mainImage.src = imageClicked.src;
  console.log(imageClicked, selectedImage);
};

// Events
btnMobile.addEventListener("click", () => {
  headerNav.classList.add("active");
});

btnClose.addEventListener("click", () => {
  headerNav.classList.remove("active");
});

thumbnailImage.forEach((img) => {
  img.addEventListener("click", switchMainImage);
});

btnMinusPlus.forEach((btn) => {
  btn.addEventListener("click", IncreaseDecrease);
});

btnAddToCart.addEventListener("click", addToCart);

btnDelete.addEventListener("click", removeFromCart);

btnCart.addEventListener("click", () => {
  cartStats.classList.toggle("active");
});

mainImage.addEventListener("click", () => {
  slider.classList.add("active");
});

btnCloseSlider.addEventListener("click", () => {
  slider.classList.remove("active");
});

controls.forEach((control) =>
  control.addEventListener("click", (e) => {
    let isLeft = e.target.classList.contains("btn-next");
    console.log(isLeft);
    if (isLeft) {
      imageIndex++;
    } else {
      imageIndex--;
    }

    if (imageIndex > allImagesSlide.length - 1) {
      imageIndex = 0;
    }

    if (imageIndex < 0) {
      imageIndex = allImagesSlide.length - 1;
    }

    thumbnailImageSlide.forEach((img) => img.classList.remove("selected"));

    allImagesSlide[imageIndex].scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });

    thumbnailImageSlide[imageIndex].classList.add("selected");
  })
);
