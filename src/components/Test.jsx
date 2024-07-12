// import React, { useRef } from "react";

// const IntervalComponent = () => {
//   const debounceTimeoutRef = useRef(null);

//   const myFunction = () => {
//     console.log("Function called");
//     // Place the logic of your function here
//   };

//   const handleClick = () => {
//     // Clear the previous timeout if it exists
//     if (debounceTimeoutRef.current) {
//       clearTimeout(debounceTimeoutRef.current);
//     }

//     // Set a new timeout to call the function after 5 seconds
//     debounceTimeoutRef.current = setTimeout(() => {
//       myFunction();
//       debounceTimeoutRef.current = null; // Reset the timeout reference
//     }, 600); // 5000ms = 5 seconds
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Call Function</button>
//     </div>
//   );
// };

// export default IntervalComponent;


import React, { useRef } from "react";

const IntervalComponent = () => {
  const debounceTimeoutRef = useRef(null);

  const myFunction = () => {
    console.log("Function called");
    // Place the logic of your function here
  };

  const handleClick = () => {
    // Clear the previous timeout if it exists
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    // Set a new timeout to call the function after 5 seconds
    debounceTimeoutRef.current = setTimeout(() => {
      myFunction();
      debounceTimeoutRef.current = null; // Reset the timeout reference
    }, 1000); // 5000ms = 5 seconds
  };

  return (
    <div>
      <button onClick={handleClick}>Call Function</button>
    </div>
  );
};

export default IntervalComponent;
