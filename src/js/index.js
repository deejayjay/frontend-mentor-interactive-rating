const ratingForm = document.forms["ratingForm"];
const radioBtns = ratingForm.querySelectorAll(".rating-radio-btn > input");
const warning = document.querySelector(".rating-warning");

ratingForm.addEventListener("submit", handleRatingSubmit);

// Handles the rating form submit event
function handleRatingSubmit(e) {
  e.preventDefault();

  const checkedRadio = e.target.querySelector(
    ".rating-radio-btn > input:checked"
  );
  const rating = checkedRadio?.value.trim();

  if (rating) {
    document.querySelector(
      ".rating-result"
    ).textContent = `You selected ${rating} out of 5`;

    document.querySelector(".rating-form-wrapper").classList.add("hidden");
    document.querySelector(".thank-you-wrapper").classList.remove("hidden");
  } else {
    warning.classList.remove("hidden");
    warning.addEventListener("click", handleWarningClose);

    // Trigger the click event of warning after 3 seconds
    setTimeout(() => {
      warning.click();
    }, 3000);
  }
}

// Handles the warning popup click event
function handleWarningClose(e) {
  const warning = e.target;

  document
    .querySelector(".rating-warning")
    .removeEventListener("click", handleWarningClose);
  warning.classList.add("hidden");
}
