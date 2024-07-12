import React, { useEffect, useState } from "react";
import Footer from "./Footer";

const MainContent = () => {
  const [stories, setStories] = useState([]);
  
  useEffect(() => {
    (async function () {
      const res = await fetch("https://child.onrender.com/api/sciencefiction");
      const resJson = await res.json();
      if (resJson) {
        console.log(resJson[0]);
        setStories(resJson[0]);
      }
    })();
  }, []);

  return (
    <div className="main-content">
      <div className="main-content-inner">
        {stories?.Wordexplore?.slice(0, 8)?.map((story) => {
          console.log(story);
          return (
            <div className="main-content-inner-box">
              <img
                src={
                  story?.image ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUi7h6EA51Wvo5Y2RSCxJd3hH90EYMLKAMg&s"
                }
                alt={story?.Storyttext}
              />
              <span>{story?.Storyttext}</span>
              <button className="btn btn-">New</button>
            </div>
          );
        })}
        <Footer />
      </div>
    </div>
  );
};

export default MainContent;
