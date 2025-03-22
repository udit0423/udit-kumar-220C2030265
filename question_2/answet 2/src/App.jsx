import { useState } from "react";
import axios from "axios";
import "./styles.css";

function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchNumbers = async (type) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`http://localhost:5000/numbers/${type}`);
            setData(response.data);
        } catch (error) {
            console.error("API Error:", error);
            setError("Failed to fetch data. Please try again.");
        }
        setLoading(false);
    };

    return (
        <div className="container">
            <h1>Average Calculator</h1>
            
            <div className="buttons">
                <button onClick={() => fetchNumbers("primes")}>Prime Numbers</button>
                <button onClick={() => fetchNumbers("fibo")}>Fibonacci Numbers</button>
                <button onClick={() => fetchNumbers("even")}>Even Numbers</button>
                <button onClick={() => fetchNumbers("rand")}>Random Numbers</button>
            </div>

            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}

            {data && (
                <div className="result">
                    <h3>Window State</h3>
                    <p><strong>Previous:</strong> {JSON.stringify(data.windowPrevState)}</p>
                    <p><strong>Current:</strong> {JSON.stringify(data.windowCurrState)}</p>
                    <p><strong>New Numbers:</strong> {JSON.stringify(data.numbers)}</p>
                    <h2>Average: {data.avg}</h2>
                </div>
            )}
        </div>
    );
}

export default App;
