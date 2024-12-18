import * as dotenv from 'dotenv';
dotenv.config();

import axios from 'axios';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const EDEN_API_KEY = process.env.EDEN_API_KEY; // Ensure your Eden AI API key is correctly set in the .env file

app.post('/dream', async (req, res) => {
    try {
      const { text } = req.body;
  
      if (!text) {
        return res.status(400).send({ error: "The 'text' field is required." });
      }
  
      console.log("Request Body Sent to Eden AI:", { text });
  
      const edenResponse = await axios.post(
        'https://api.edenai.run/v2/image/generation',
        {
          providers: 'stabilityai',
          text: text,
          resolution: '1024x1024',
        },
        {
          headers: {
            Authorization: `Bearer ${EDEN_API_KEY}`,
          },
        }
      );
  
      // Log the full response to check the structure
      console.log("Eden AI Response:", JSON.stringify(edenResponse.data, null, 2));
  
      // Access the image URL from the response
      const imageUrl = edenResponse.data?.stabilityai?.items?.[0]?.image_resource_url;
  
      if (!imageUrl) {
        console.error("Image URL not found in response.");
        return res.status(500).send({ error: "No image URL found in Eden AI's response." });
      }
  
      res.send({ image: imageUrl });
    } catch (error) {
      console.error("Error Response from Eden AI:", error.response?.data || error.message);
      res.status(500).send({
        error: error.response?.data?.error || "Something went wrong with Eden AI",
      });
    }
  });
  
// Start the server
app.listen(8080, () =>
  console.log('Server running at http://localhost:8080/dream')
);