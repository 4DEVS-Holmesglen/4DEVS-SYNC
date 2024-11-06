// AlertDialog component
import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import Alert from "../Alert/Alert";
import Button from "../Button/Button";

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    transform: translate(-50%, -60%);
  }
  to {
    transform: translate(-50%, -50%);
  }
`;

const CloseButton = styled.button`
  align-items: self-end;
  margin-bottom: 120px;
  border: none;
  background: none;
  font-size: 40px;
  cursor: pointer;
  color: ${(props) => props.btncolor};
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const DialogContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: row;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 10px;
  z-index: 1000;
  animation: ${slideDown} 0.3s ease-in-out;
`;

function AlertDialog({
  title,
  body,
  status,
  children,
  buttonVariant,
  hoverColor,
  path,
  btnColor,
  onClick,
  type,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button
        hoverColor={hoverColor}
        variant={buttonVariant}
        path={path}
        onClick={toggleDialog}
        type={type}
        aria-label="Open dialog"
      >
        {children}
      </Button>

      <Overlay isOpen={isOpen} onClick={closeDialog} aria-hidden={!isOpen}>
        <DialogContainer
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-labelledby="alert-title"
          aria-describedby="alert-body"
        >
          <Alert title={title} body={body} status={status} />
          <CloseButton btncolor={btnColor} onClick={closeDialog}>
            &times;
          </CloseButton>
        </DialogContainer>
      </Overlay>
    </>
  );
}

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
  btnColor: PropTypes.string.isRequired,
  buttonVariant: PropTypes.oneOf(["default", "primary", "success", "warning"]),
};

AlertDialog.defaultProps = {
  buttonVariant: "default",
  btnColor: "#000000",
};

export default AlertDialog;
