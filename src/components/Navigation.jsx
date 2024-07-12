import React from "react";

const Navigation = () => {
  return (
    <div className="navigation-bar">
      <div className="navigation-bar-left">
        <h3>Logo</h3>
      </div>
      <div className="navigation-bar-middle">
        <a href="#home">Home</a>
        <a href="#lead">Leaderboard</a>
        <a href="#daily-quiz">Daily Quiz</a>
        <a href="#genre">Genre ⌄</a>
      </div>
      <div className="navigation-bar-right">
        <button type="button" className="navigation-bar-right-button">
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Navigation;
