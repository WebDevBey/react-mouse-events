import React, { useState } from "react";

function App() {
  // Example 1: onClick - Button Click
  const [text, setText] = useState("Click me!");
  const handleClick = () => {
    setText((prevText) =>
      prevText === "Click me!" ? "You clicked me!" : "Click me!"
    );
  };

  // Example 2: onDoubleClick - Change Background Color
  const [color, setColor] = useState("skyblue");
  const handleDoubleClick = () => {
    setColor(color === "skyblue" ? "lightcoral" : "skyblue");
  };

  // Example 3: onMouseEnter / onMouseLeave - Hover Effects
  const [hoverColor, setHoverColor] = useState("orange");
  const handleMouseEnter = () => setHoverColor("lightgreen");
  const handleMouseLeave = () => setHoverColor("yellow");

  // Example 4: onMouseMove - Display Mouse Coordinates and Trail Effect
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setCoords({ x: e.clientX, y: e.clientY });
    const trail = document.createElement("div");
    trail.classList.add("trail");
    trail.style.left = `${e.clientX}px`;
    trail.style.top = `${e.clientY}px`;
    document.body.appendChild(trail);
    setTimeout(() => {
      trail.remove();
    }, 300);
  };

  // Example 5: onWheel - Scroll effect
  const handleWheel = (e) => {
    const isScrollingUp = e.deltaY < 0;

    if (isScrollingUp) {
      document.body.style.backgroundColor = "#333";
    } else {
      document.body.style.backgroundColor = "darkred";
    }
  };

  return (
    <div className="container" onWheel={handleWheel}>
      <div className="boxes">
        <div className="box">
          <h2 className="title">Click event</h2>
          <button className="button" onClick={handleClick}>
            {text}
          </button>
        </div>
        <div
          className="box"
          style={{ backgroundColor: color }}
          onDoubleClick={handleDoubleClick}
        >
          <h2 className="title">Double-click to change color</h2>
        </div>
        <div
          className="box"
          style={{ backgroundColor: hoverColor }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="title">Hover over me!</h2>
        </div>
      </div>
      <div className="coordinatesContainer" onMouseMove={handleMouseMove}>
        <h2 className="title">Mouse Coordinates</h2>
        <p className="coordsText">
          X: {coords.x}, Y: {coords.y}
        </p>
      </div>
    </div>
  );
}

export default App;
