window.onload = function () {
  window.location.hash = "#home";
  let states = document.querySelectorAll("[countto]");

  states.forEach((state) => {
    let countTo = parseInt(state.getAttribute("countto"));
    let current = 0;
    let interval = setInterval(function () {
      state.innerHTML = current;
      if (current >= countTo) {
        clearInterval(interval);
        state.innerHTML = countTo;
      }
      current += 50;
    }, 10);
  });
};

let isActive = false;
function toggle() {
  if (isActive) {
    //disable active
    document.querySelector(".hamburger").className = "hamburger";
    document.querySelector(".shadow").className = "shadow";
    document.querySelector(".mobile-nav").className = "mobile-nav";
    isActive = false;
  } else {
    //activate
    document.querySelector(".hamburger").className = "hamburger active";
    document.querySelector(".shadow").className = "shadow active";
    document.querySelector(".mobile-nav").className = "mobile-nav active";
    isActive = true;
  }
}
