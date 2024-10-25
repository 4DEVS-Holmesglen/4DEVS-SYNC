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
  display: ${({ isOpen }) => (isOpen ? "block" : "none")}; /* Changed to flex */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
`;

const DialogContainer = styled.div`
  position: fixed; /* Change from relative to fixed */
  top: 50%; /* Center vertically */
  left: 50%; /* Center horizontally */
  display: flex;
  flex-direction: row;
  transform: translate(-50%, -50%); /* Center the container */
  padding: 20px;
  border-radius: 10px;
  z-index: 1000;
`;

const CloseButton = styled.button`
  align-items: self-end;
  margin-bottom: 120px;
  border: none;
  background: none;
  font-size: 30px;
  cursor: pointer;
  color: ${(props) => props.btncolor}; /* Dynamically set color from prop */
`;

function AlertDialog({
  title,
  body,
  status,
  children,
  buttonVariant,
  hoverColor,
  path,
  btnColor, // Added btnColor to destructured props
  onClick,
  type,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  const closeDialog = () => {
    setIsOpen(false); // Set the isOpen state to false to close the dialog
  };

  return (
    <>
      {/* Button to open the alert dialog */}
      <Button
        hoverColor={hoverColor}
        variant={buttonVariant}
        path={path}
        onClick={toggleDialog}
        type={type}
      >
        {children}
      </Button>

      {/* Overlay for Alert */}
      <Overlay isOpen={isOpen}>
        <DialogContainer onClick={(e) => e.stopPropagation()}>
          {/* Close button with dynamic btnColor */}

          {/* Alert component inside the dialog */}
          <Alert title={title} body={body} status={status} />
          <CloseButton btncolor={btnColor} onClick={closeDialog}>
            &times;
          </CloseButton>
        </DialogContainer>
      </Overlay>
    </>
  );
}

// Prop type validation
AlertDialog.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  status: PropTypes.oneOf([
    "default",
    "primary",
    "success",
    "warning",
    "defaultDark",
    "primaryDark",
    "successDark",
    "warningDark",
  ]).isRequired,
  children: PropTypes.string.isRequired,
  btnColor: PropTypes.string.isRequired, // btnColor is required

  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  buttonVariant: PropTypes.oneOf(["default", "primary", "success", "warning"]), // Define available button variants
};

// Default props in case buttonVariant or btnColor is not provided
AlertDialog.defaultProps = {
  buttonVariant: "default",
  btnColor: "#000000", // Default color for the close button
};

export default AlertDialog;
