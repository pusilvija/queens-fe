import { useState } from 'react';
import './Square.css';

function Square({ x, y, colour }) {
    const [showImage, setShowImage] = useState(false);
    
    const sendCoordinates = (endpoint) => {
        fetch(`http://localhost:5174/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ x, y }), // Send x, y coordinates in the request body
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(`API Response (${endpoint}):`, data.message); // Log the response from the API
            })
            .catch((error) => {
                console.error(`Error sending coordinates to /${endpoint}:`, error);
            });
    };

    const handleClick = () => {
        setShowImage((prevShowImage) => {
            const newShowImage = !prevShowImage;
            const endpoint = newShowImage ? 'put-queen' : 'remove-queen';
            sendCoordinates(endpoint); // Call the appropriate API endpoint
            return newShowImage;
        });
    };

    return (
        <button
            x={x}
            y={y}
            style={{ backgroundColor: colour }}
            className="square"
            onClick={handleClick}
        >
            {showImage && (
                <img
                    src="/queen.png"
                    alt="Queen"
                    className="queen-image"
                />
            )}
        </button>
    );
}

export default Square;
