"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const categoriesList = document.querySelectorAll("#categories .item");

  console.log("Liczba kategorii:", categoriesList.length);

  categoriesList.forEach(function (category) {
    const categoryName = category.querySelector("h2").textContent;
    const itemCount = category.querySelectorAll("ul li").length;
    console.log(`Kategoria: ${categoryName}, Liczba elementów: ${itemCount}`);
  });
});
