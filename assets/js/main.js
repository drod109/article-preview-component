// JavaScript snippet to debug hover events on .social--share element

document.addEventListener("DOMContentLoaded", function () {
  // Select the .social--share element
  var socialShareElement = document.querySelector(".social--share");

  // Check if the element exists to avoid errors
  if (socialShareElement) {
    // Listen for mouse enter (hover) event
    socialShareElement.addEventListener("mouseenter", function () {
      console.log("Mouse entered .social--share element");
    });

    // Listen for mouse leave event
    socialShareElement.addEventListener("mouseleave", function () {
      console.log("Mouse left .social--share element");
    });
  } else {
    console.log(".social--share element not found");
  }
});
