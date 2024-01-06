
const sidebar = document.getElementById("sidebar");


sidebar.addEventListener("click", (event) => {
  // When the element is clicked, the provided arrow function is executed.arrow function used as the callback for the click event
  const target = event.target.getAttribute("data-target");


  console.log("Navigating to:", target);
});
