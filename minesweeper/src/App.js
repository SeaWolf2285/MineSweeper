import React from "react";
import {useState} from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Board from "./Board.js";
export const Context = React.createContext();



function App() {
const [height, setHeight] = useState(10);
const [width, setWidth] = useState(10);
const [mines, setMines] = useState(5);
const [grid, setGrid] = useState([]);
  

  return (
    <div className="App">
      <Context.Provider
        value={{grid, setGrid, height, setHeight, width, setWidth, mines, setMines}}>
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Board />} />
          </Routes>
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;