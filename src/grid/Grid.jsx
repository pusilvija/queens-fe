import { useEffect } from 'react';
import Square from '../Square/Square';
import './Grid.css';


function Grid() {

    const resetGrid = () => {
        fetch(`http://localhost:5174/reset-grid`, {
            method: 'POST'
        }).then((response) => response.json())
        .then((data) => {
            console.log(data.message);
        }).catch((error) => {
            console.error('Error resetting grid:', error);
        });
    }

    useEffect(() => {resetGrid()}, []);

    return (
    <>
        <div className="grid">
            <Square x={0} y={0} colour="red" />
            <Square x={0} y={1} colour="red" />
            <Square x={0} y={2} colour="red" />
            <Square x={0} y={3} colour="green" />

            <Square x={1} y={0} colour="red" />
            <Square x={1} y={1} colour="yellow" />
            <Square x={1} y={2} colour="yellow" />
            <Square x={1} y={3} colour="green" />

            <Square x={2} y={0} colour="yellow" />
            <Square x={2} y={1} colour="yellow" />
            <Square x={2} y={2} colour="yellow" />
            <Square x={2} y={3} colour="blue" />

            <Square x={3} y={0} colour="blue" />
            <Square x={3} y={1} colour="blue" />
            <Square x={3} y={2} colour="blue" />
            <Square x={3} y={3} colour="blue" />
        </div>
        <button className="reset-button" onClick={() => {
            window.location.reload()}}>Reset</button>
    </>);
}

export default Grid;