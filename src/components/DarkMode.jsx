import React, { useState } from "react";
import "./DarkMode.css";

function DarkMode() {
  const [isClick, setIsClicked] = useState(false);

  return (
    <button
      className="dark-btn"
      type="submit"
      onClick={() => {
        setIsClicked(!isClick);
        if (isClick) {
          document.body.style.backgroundColor = "black";
        } else {
          document.body.style.backgroundColor = "white";
        }
      }}
    >
      <span role="img" aria-labelledby="accessible-emoji">
        🌙
      </span>
    </button>
  );
}

export default DarkMode;