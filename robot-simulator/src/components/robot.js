// src/components/Robot.js
import React, { useState } from 'react';
import Grid from './grid';
import './robot.css';

const directions = ['N', 'E', 'S', 'W'];

const Robot = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState('N');

  const directionOffsets = {
    'N': { x: 0, y: -1 },
    'E': { x: 1, y: 0 },
    'S': { x: 0, y: 1 },
    'W': { x: -1, y: 0 }
  };

  const moveForward = () => {
    setPosition(prev => {
      const offset = directionOffsets[direction];
      const newX = prev.x + offset.x;
      const newY = prev.y + offset.y;
      if (newX >= 0 && newX < 5 && newY >= 0 && newY < 5) {
        return { x: newX, y: newY };
      }
      return prev;
    });
  };

  const moveBackward = () => {
    setPosition(prev => {
      const offset = directionOffsets[direction];
      const newX = prev.x - offset.x;
      const newY = prev.y - offset.y;
      if (newX >= 0 && newX < 5 && newY >= 0 && newY < 5) {
        return { x: newX, y: newY };
      }
      return prev;
    });
  };

  const rotateLeft = () => {
    setDirection(prev => {
      const currentIndex = directions.indexOf(prev);
      return directions[(currentIndex + 3) % 4];
    });
  };

  const rotateRight = () => {
    setDirection(prev => {
      const currentIndex = directions.indexOf(prev);
      return directions[(currentIndex + 1) % 4];
    });
  };

  return (
    <div className="robot-container">
      <Grid robotPosition={position} />
      <div className="controls">
        <button onClick={moveForward}>Move Forward</button>
        <button onClick={moveBackward}>Move Backward</button>
        <button onClick={rotateLeft}>Rotate Left</button>
        <button onClick={rotateRight}>Rotate Right</button>
      </div>
    </div>
  );
};

export default Robot;
