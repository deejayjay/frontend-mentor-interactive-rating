const ratingForm = document.forms["ratingForm"];
const radioBtns = ratingForm.querySelectorAll(".rating-radio-btn > input");

ratingForm.addEventListener("submit", handleRatingSubmit);

function handleRatingSubmit(e) {
  e.preventDefault();

  const checkedRadio = e.target.querySelector(
    ".rating-radio-btn > input:checked"
  );
  const rating = checkedRadio.value.trim();

  document.querySelector(
    ".rating-result"
  ).textContent = `You selected ${rating} out of 5`;

  document.querySelector(".rating-form-wrapper").classList.add("hidden");
  document.querySelector(".thank-you-wrapper").classList.remove("hidden");
}
