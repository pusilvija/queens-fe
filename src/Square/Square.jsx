import './Square.css';

function Square(x,y,color) {
    return <button x={x} y={y} className={color}></button>;
  }

export default Square;