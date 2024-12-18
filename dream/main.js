import './style.css';

const form = document.getElementById('dream-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the form from reloading the page

  const prompt = document.getElementById('prompt').value.trim();
  if (!prompt) {
    resultDiv.textContent = 'Please enter a prompt.';
    return;
  }

  resultDiv.textContent = 'Generating image...';

  try {
    const response = await fetch('http://localhost:8080/dream', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: prompt }),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.image) {
      resultDiv.innerHTML = `<img src="${data.image}" alt="Generated Image" />`;
    } else {
      resultDiv.textContent =
        'Error: No image URL returned from the server.';
    }
  } catch (error) {
    console.error('Error generating image:', error);
    resultDiv.textContent = 'An error occurred. Please try again.';
  }
});
