import Square from '../Square/Square';
import './Grid.css';


function Grid() {
    return (
    <>
        <div className="grid">
            <Square x={0} y={0} colour="red" />
            <Square x={1} y={0} colour="red" />
            <Square x={2} y={0} colour="red" />
            <Square x={3} y={0} colour="green" />

            <Square x={0} y={1} colour="red" />
            <Square x={1} y={1} colour="yellow" />
            <Square x={2} y={1} colour="yellow" />
            <Square x={3} y={1} colour="green" />

            <Square x={0} y={2} colour="blue" />
            <Square x={1} y={2} colour="yellow" />
            <Square x={2} y={2} colour="yellow" />
            <Square x={3} y={2} colour="blue" />

            <Square x={0} y={3} colour="blue" />
            <Square x={1} y={3} colour="blue" />
            <Square x={2} y={3} colour="blue" />
            <Square x={3} y={3} colour="blue" />
    </div>
    </>);
}

export default Grid;