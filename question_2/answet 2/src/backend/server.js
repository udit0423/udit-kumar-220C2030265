const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5000;
app.use(cors());

let windowSize = 10;
let storedNumbers = [];

// Function to fetch numbers from the correct API
const getNumbers = async (type) => {
    const apiUrl = `http://20.244.56.144/test/${type}`;
    try {
        const response = await axios.get(apiUrl, { timeout: 500 });
        return response.data.numbers;
    } catch (error) {
        console.error(`Error fetching numbers from ${apiUrl}:`, error.message);
        return [];
    }
};

// Route to fetch numbers based on type
app.get("/numbers/:type", async (req, res) => {
    const { type } = req.params;
    
    // Validate the requested type
    if (!["primes", "fibo", "even", "rand"].includes(type)) {
        return res.status(400).json({ error: "Invalid number type. Use primes, fibo, even, or rand." });
    }

    // Fetch new numbers
    const newNumbers = await getNumbers(type);
    
    // Merge and remove duplicates
    const uniqueNumbers = [...new Set([...storedNumbers, ...newNumbers])];

    // Maintain the window size
    if (uniqueNumbers.length > windowSize) {
        storedNumbers = uniqueNumbers.slice(-windowSize);
    } else {
        storedNumbers = uniqueNumbers;
    }

    // Calculate average
    const average = storedNumbers.length
        ? (storedNumbers.reduce((sum, num) => sum + num, 0) / storedNumbers.length).toFixed(2)
        : 0;

    // Send response
    res.json({
        windowPrevState: storedNumbers.slice(0, -newNumbers.length),
        windowCurrState: storedNumbers,
        numbers: newNumbers,
        avg: parseFloat(average),
    });
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
