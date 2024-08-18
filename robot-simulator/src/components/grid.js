// src/components/Grid.js
import React from 'react';
import './grid.css';


const Grid = ({ robotPosition }) => {
    const { x, y } = robotPosition;
  
    return (
      <div className="grid">
        {Array.from({ length: 25 }).map((_, index) => {
          const row = Math.floor(index / 5);
          const col = index % 5;
          const isRobot = x === col && y === row;
          return (
            <div
              key={index}
              className={`grid-cell ${isRobot ? 'robot' : ''}`}
            />
          );
        })}
      </div>
    );
  };
export default Grid;
