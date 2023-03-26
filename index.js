// Get references to the input and output text areas, the output container, and the translate button
const inputTextArea = document.getElementById('input');
const outputDiv = document.getElementById('output');
const outputContainer = document.getElementById('output-container');
const translateButton = document.getElementById('translate');

// Event listener for translate button click
translateButton.addEventListener('click', () => {
  // Get the input text
  const inputText = inputTextArea.value;

  // Translate the input text to Morse code
  const morseCode = toMorseCode(inputText);

  // Update the output div with the Morse code
  outputDiv.textContent = morseCode;
  outputContainer.style.display = 'block'; // Show the output container
});

// Function to convert text to Morse code
function toMorseCode(text) {
  return text.split('')
             .map(char => morseCode[char.toLowerCase()] || '')
             .join(' ');
}

// Function to convert Morse code to text
function fromMorseCode(morse) {
  return morse.split(' ')
              .map(code => Object.keys(morseCode).find(key => morseCode[key] === code))
              .join('');
}

// Morse code dictionary
const morseCode = {
  'a': '.-',    'b': '-...',  'c': '-.-.', 'd': '-..',   'e': '.',     'f': '..-.',
  'g': '--.',   'h': '....',  'i': '..',   'j': '.---',  'k': '-.-',   'l': '.-..',
  'm': '--',    'n': '-.',    'o': '---',  'p': '.--.',  'q': '--.-',  'r': '.-.',
  's': '...',   't': '-',     'u': '..-',  'v': '...-',  'w': '.--',   'x': '-..-',
  'y': '-.--',  'z': '--..',  '0': '-----','1': '.----', '2': '..---', '3': '...--',
  '4': '....-', '5': '.....','6': '-....','7': '--...', '8': '---..','9': '----.',
  '.': '.-.-.-',',': '--..--','?': '..--..','/': '-..-.','@': '.--.-.',' ': '/'
};
