import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(null);
  const [board, setBoard] = useState([
    { id: 0, value },
    { id: 1, value },
    { id: 2, value },
    { id: 3, value },
    { id: 4, value },
    { id: 5, value },
    { id: 6, value },
    { id: 7, value },
    { id: 8, value },
  ]);

  const checkWin = () => {};

  const handleClick = (id) => {
    const currentIndex = board.findIndex((boards) => boards.id === id);
    if (!board[currentIndex].value) {
      setValue((prev) => (prev === "X" ? "O" : "X"));
      const updatedBoard = { ...board[currentIndex], value };
      const newBoard = [...board];

      newBoard[currentIndex] = updatedBoard;
      setBoard(newBoard);
    }
    checkWin();
  };
  return (
    <div className="App">
      <Board board={board} setBoard={setBoard} onClick={handleClick} />
    </div>
  );
}

function Board({ board, onClick }) {
  return (
    <table className="tble">
      {board.map((boards, i) => (
        <td
          className="small-div"
          key={boards.id}
          onClick={() => onClick(boards.id)}
        >
          <span className="value-of-board">{boards.value}</span>
        </td>
      ))}
    </table>
  );
}

export default App;
