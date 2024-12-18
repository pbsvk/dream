
# AI Photo Generator

Welcome to the **AI Photo Generator**! This web application allows users to generate images from text prompts using artificial intelligence. Whether you're looking for creative artwork or AI-driven visuals, this tool uses a simple text-to-image model to turn your imagination into a picture.


<img width="1920" alt="AI Photo Generator" src="https://github.com/user-attachments/assets/e9309a0a-9f34-492f-8acb-f917847ca32d" />


## Features

- **User-friendly Interface**: Simple and clean UI for easy interaction.
- **Fast Image Generation**: Instantly generate images based on the prompts you provide.
- **Customizable Prompts**: Enter text to describe the image you want to generate.
- **Responsive Design**: Works well on both desktop and mobile devices.

## Technologies Used

- **HTML**: For building the structure of the application.
- **CSS**: Custom styles for the user interface, including flexbox and grid for layout.
- **JavaScript**: Handles API requests, form submissions, and dynamic content updates.
- **AI Image Generation API**: Fetches generated images from a backend AI service (this will need to be configured for your server).

## How It Works

1. **Enter a prompt**: Type your image description in the input field.
2. **Generate an image**: Click the "Dream" button to send your prompt to the backend.
3. **View the result**: Once the image is generated, it will appear below the form.

## Installation & Setup

To run this project locally, follow the steps below:

### 1. Clone the Repository

bash
git clone https://github.com/pbsvk/dream
cd dream


### 2. Install Dependencies

If you're using a local server to handle requests, you'll need to set up the backend. However, for the frontend, no additional dependencies are required. If you're using Node.js to serve static files, follow these steps:

bash
# Install necessary dependencies
npm install


### 3. Running the Project Locally

To start the project locally:

bash
# Run your server or open index.html in a browser
npm start


Alternatively, if you don't have a backend set up yet, you can simply open `index.html` in a browser, but note that the image generation won't work without the API connection.

## API Setup

This app sends a `POST` request to a server at `http://localhost:8080/dream` for image generation. You’ll need to set up your own AI backend or use a third-party image generation API (like OpenAI’s DALL·E or similar services).

### Example API Response

```json
{
  "image": "https://example.com/generated-image.jpg"
}
```

Make sure your backend is capable of handling this request and returning an image URL in response.

## Contributing

We welcome contributions! Here’s how you can help:

1. **Fork** the repository.
2. **Create a new branch** for your feature or bug fix.
3. **Make your changes**.
4. **Test thoroughly** to ensure everything works.
5. **Submit a pull request** with a clear description of the changes you’ve made.

Feel free to open issues for any bugs or feature requests.


## Acknowledgements

- Special thanks to the creators of Eden AI for the awesome image generation technology.
- This project was inspired by the growing interest in text-to-image models and generative AI.

## Contact

For any questions or feedback, feel free to reach out via GitHub Issues or contact me directly:

- [GitHub Profile](https://github.com/pbsvk)

---

Happy Dreaming! 🌟
