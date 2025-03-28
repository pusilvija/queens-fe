import { useState } from 'react';
import './Square.css';

function Square({ x, y, colour }) {
    const [showImage, setShowImage] = useState(false);

    const handleClick = () => {
        setShowImage(!showImage);
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
