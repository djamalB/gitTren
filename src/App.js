import React, { useEffect, useState } from "react";
import "./footer.css";

function App() {
  const [light, setLight] = useState("red");

  useEffect(() => {
    const colorChange = () => {
      setLight((prev) => {
        if (prev === "red") return "yellowAfterRed";
        if (prev === "yellowAfterRed") return "green";
        if (prev === "green") return "yellowAfterGreen";
        if (prev === "yellowAfterGreen") return "red";
      });
    };

    let interval;
    if (light === "red" || light === "green") {
      interval = setInterval(colorChange, 4000);
    } else {
      interval = setInterval(colorChange, 1000);
    }

    return () => clearInterval(interval);
  }, [light]);

  return (
    <div className="root">
      <div className="block">
        <div
          className={`light red ${light.startsWith("red") ? "active" : ""}`}
        ></div>
        <div
          className={`light yellow ${
            light.startsWith("yellow") ? "active" : ""
          }`}
        ></div>
        <div
          className={`light green ${light.startsWith("green") ? "active" : ""}`}
        ></div>
      </div>
    </div>
  );
}

export default App;
