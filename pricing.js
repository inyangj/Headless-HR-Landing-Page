document
  .getElementById("openModalButton")
  .addEventListener("click", function () {
    document.getElementById("pricingModal").classList.remove("hidden");
  });
document.getElementById("openModal").addEventListener("click", function () {
  document.getElementById("pricingModal").classList.remove("hidden");
});

document.getElementById("modalButton").addEventListener("click", function () {
  document.getElementById("pricingModal").classList.remove("hidden");
});

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("pricingModal").classList.add("hidden");
});
