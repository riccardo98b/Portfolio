// varaibili globali
const scrollToTopButton = document.querySelector("#scrollToTop");

// EFFETTO TYPING
function runTypingEffect() {
  const text = "Ciao, sono Riccardo Belloni";
  const typingElement = document.getElementById("typing-text");
  const typingDelay = 120; // millisecondi

  typeText(text, typingElement, typingDelay);
}

// funzione che si occupa del delay della scritta
function typeText(text, element, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      element.textContent += text.charAt(i);
    }, delay * i);
  }
}

runTypingEffect();

// +++++++++ Pulsante torna su +++++++++++++
window.onscroll = () => {
  if (
    document.body.scrollTop > 120 ||
    document.documentElement.scrollTop > 120
  ) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
};

scrollToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
