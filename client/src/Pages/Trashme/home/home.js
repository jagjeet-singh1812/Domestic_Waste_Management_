import React from "react";
import "./home.css"; // Updated CSS file path
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
const Tra = () => {

  const divVariants = {
    initial: {
      y: -100, 
      opacity: 0, 
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring', 
        stiffness: 150,
        damping: 10,
      },
    },
    rebound: {
      y: 20, 
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 30,
      },
    },
  };

  const handleRebound = () => {
    return divVariants.rebound;
  };
  return (
    <>
      <div className="test"></div>
      <motion.div
      initial="initial"
      animate="animate"
      variants={divVariants}
      onAnimationComplete={handleRebound}
    >
    <div className="container">
      <div className="content">
        <div className="title">Where does your trash go?</div>
        <div className="subtitle">
          "TrashMe" tells you the category of your trash and where to throw it
        </div>
        <div className="additional-text">
          <p>
            Welcome to TrashMe, your ultimate trash disposal assistant.
            Learn how to properly categorize and dispose of your waste.
          </p>
        </div>
        <div className="whole_trash">
          <div className="gif-container">
            <div className="gif"></div>
          </div>
          <div className="btnnn">
            <Link to="/items" className="button pulse">
              Start Now
            </Link>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
    </>
  );
};

export default Tra;

