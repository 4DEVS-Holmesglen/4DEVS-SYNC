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
  background: rgba(0, 0, 0, 0.5);
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

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

function AlertDialog({ title, body, btnText, alertType }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Button to open the alert dialog */}
      <Button text={btnText} variant="default" onClick={toggleDialog} />

      {/* Overlay for Alert */}
      <Overlay isOpen={isOpen} onClick={toggleDialog}>
        <DialogContainer onClick={(e) => e.stopPropagation()}>
          {/* Close button for the dialog */}
          <CloseButton onClick={toggleDialog}>&times;</CloseButton>

          {/* Alert component inside the dialog */}
          <Alert title={title} body={body} type={alertType} btn={btnText} />
        </DialogContainer>
      </Overlay>
    </>
  );
}

// Prop type validation
AlertDialog.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  alertType: PropTypes.oneOf([
    "default",
    "primary",
    "success",
    "warning",
    "defaultDark",
    "primaryDark",
    "successDark",
    "warningDark",
  ]).isRequired,
};

export default AlertDialog;
