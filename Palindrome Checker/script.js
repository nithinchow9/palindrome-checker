const inputContainer = document.getElementById('input-container');

const checkBtn = document.getElementById('check-btn');

function checkPalindrome() {
  let textInput = document.getElementById('text-input').value;
  if (textInput === '') {
    alert('Please input a value');
    return;
  }
  const cleanedText = textInput.replace(/[^a-zA-Z0-9]/g, '');

  const reverse = cleanedText.split('').reverse().join('');
  const resultDiv = document.getElementById('result');

  if (cleanedText.toLowerCase() === reverse.toLowerCase()) {
    resultDiv.textContent = `${textInput} is a palindrome`;
  } else {
    resultDiv.textContent = `${textInput} is not a palindrome`;
  }
}
checkBtn.addEventListener('click', checkPalindrome);

document.getElementById('text-input').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    checkPalindrome();
  }
});
