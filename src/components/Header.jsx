import React from "react";

const Header = () => {
  return (
    <div className="header-bar">
      <div className="header-bar-top">
        <h3>Science Fiction Stories</h3>
      </div>
      <div className="header-bar-bottom">
        <button className="btn btn-">New</button>
        <button className="btn btn-">In Progress</button>
        <button className="btn btn-">Completed</button>
        <button className="btn btn-">Clear All</button>
      </div>
    </div>
  );
};

export default Header;
