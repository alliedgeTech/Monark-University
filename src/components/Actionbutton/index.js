import React, { useState, useEffect } from "react";

const ActionButton = (props) => {
  const { buttonClassName } = props;
  const [isActive, setActive] = useState(false);
  const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Functionality for the action button
  const performAction = () => {
    setActive(!isActive);
    setShowAdditionalButtons(!showAdditionalButtons);
  };

  useEffect(() => {
    // Button is displayed after scrolling for 200 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div>
          <button
            className={`${buttonClassName ? buttonClassName : "action-button"} ${isActive ? "open" : ""}`}
            onClick={performAction}
          >
            <i className={`far ${isActive ? 'fa-minus' : 'fa-plus'}`}></i>
          </button>
          {showAdditionalButtons && (
            <>
              <button className="dark-btn">Button 1</button>
              <button className="additional-button">Button 2</button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ActionButton;
