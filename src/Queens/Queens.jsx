import { useState } from 'react';
import Square from '../Square/Square'; // Import the Square component
import './Queens.css';

// function Queens() {

    

    

//     return (
//         <>
//         <input type="text" placeholder="Enter number of queens" />
//         <button>Generate grid</button>
//         </>
//     )
// }

function Queens() {
    const [numQueens, setNumQueens] = useState('5'); // State for the input value
    const [grid, setGrid] = useState([]); // State for the grid data from the API

    const handleInputChange = (e) => {
        setNumQueens(e.target.value); // Update the input value
    };

    const handleGenerateGrid = () => {
        // Make an API call with the input value as a query parameter
        fetch(`http://localhost:5174/create-grid?size=${numQueens}`)
            .then((response) => response.json())
            .then((data) => {
                setGrid(data.grid); // Update the grid state with the API response
            })
            .catch((error) => {
                console.error('Error fetching grid data:', error);
            });
    };

    const colors = [
        'red', 'green', 'blue', 'yellow', 'purple',
        'orange', 'pink', 'cyan', 'lime', 'brown'
    ];

    return (
        <>
            <input
                type="text"
                placeholder="Enter number of queens"
                value={numQueens}
                onChange={handleInputChange} // Update state on input change
            />
            <button onClick={handleGenerateGrid}>Generate grid</button>
            <div className="grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${numQueens}, 1fr)` }}>
                {grid.map((square) =>
                    (
                    <Square
                        key={`${square.x}-${square.y}`} // Use a unique key for each square
                        x={square.x}
                        y={square.y}
                        square_color={colors[square.square_color]}
                    />
                    ))
                }
            </div>
        </>
    );
}

export default Queens;