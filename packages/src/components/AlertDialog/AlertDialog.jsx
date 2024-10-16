import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Alert from "../Alert/Alert";
import Button from "../Button/Button";

// Styled components for overlay
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0);
  backdrop-filter: blur(2px);
  z-index: 999;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const DialogContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

function AlertDialog({}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <button className="btn btn-primary" onClick={toggleDialog}>
        Button as link
      </button> */}

      <Button text="Click Me" variant="primary" onClick={toggleDialog} />

      {/* Overlay for Alert */}
      <Overlay isOpen={isOpen} onClick={toggleDialog}>
        <DialogContainer onClick={(e) => e.stopPropagation()}>
          {/* to stop the event from  bubblingup to parent elements. When a click event occurs on an element, it typically bubbles up to its ancestors in the DOM tree. Calling stopPropagation() prevents that from happening. */}

          <Alert
            title="Alert!!!!"
            body="This is a alert—check it out! This is a alert—check it out!"
            type="primary"
          />

          {/* <div className="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
            Here of information{" "}
            <a href="wwww.google.com">This is a alert—check it out! </a>
          </div> */}

          
        </DialogContainer>
      </Overlay>
    </>
  );
}

export default AlertDialog;
