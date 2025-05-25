import React, { useEffect, useState } from "react";

const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme"));
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark"); // Fixed toggle logic
  };
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme); 
  }, [theme]);

  return (
    <div 
      className="nav_ac" 
      onClick={themetoggle} 
      style={{ scale: '2', fontSize: 20 }}
      aria-label="Toggle theme"
    >
      {/* No icon - just a clickable area */}
    </div>
  );
};

export default Themetoggle;