const dynamicText = document.querySelector('.dynamicText');
const words = ['Front End Jr', 'passionate', 'self-taught'];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChar;
  dynamicText.classList.add('stop-blinking');

    if (!isDeleting && charIndex < currentWord.length) {
        //* SI la condicion es true escribe el siguiente caracter 
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        //* SI la condicion es true remueve el anterior caracter 
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        //* SI la palabra es borrada entonces cambia a la siguiente palabra
        isDeleting = !isDeleting;
        dynamicText.classList.remove('stop-blinking');
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200)
    }
};

typeEffect();
