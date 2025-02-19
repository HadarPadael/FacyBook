import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";

function TransitionPage() {
  // A quick trick to get the browser window size so confetti spans the screen
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="vstack gap-2">
      <h1 id="successDialoge">Sign in process completed successfully!</h1>
      <Confetti
        width={windowDimensions.width}
        height={windowDimensions.height}
      />
      <hr></hr>
      <Link to="/" id="transitionBtn" className="btn btn-primary">
        To log in
      </Link>
    </div>
  );
}

export default TransitionPage;
