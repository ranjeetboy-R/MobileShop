document.getElementById("searchInput").addEventListener("keyup", function() {
  let input = this.value.toLowerCase();
  let products = document.querySelectorAll(".product-card");
  
  products.forEach(product => {
    let title = product.querySelector("h2").textContent.toLowerCase();
    if (title.includes(input)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});