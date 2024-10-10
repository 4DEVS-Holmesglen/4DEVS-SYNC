import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import PropTypes from "prop-types";
import Montserrat from "../../style/Font/Montserrat-VariableFont_wght.ttf";
import OpenSans from "../../style/Font/OpenSans-VariableFont_wdth,wght.ttf";

// Global style for fonts
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Montserrat";
    src: url(${Montserrat});
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Open Sans";
    src: url(${OpenSans});
    font-weight: 300;
    font-style: normal;
  }

  body {
    font-family: "Montserrat", "Open Sans";
  }
`;

const MarkBox = styled.div`
  position: relative;
  display: inline-block;
  padding: 5px;
  border-radius: 20px;
  border: 3px solid transparent;
  background: ${({ borderGradient }) => borderGradient};
  background-clip: padding-box;
  mask-composite: exclude;
  margin: 10px;
`;

const StyledButton = styled.button`
  background-color: ${({ buttonBackgroundColor }) => buttonBackgroundColor};
  border: none;
  font-family: "Montserrat", sans-serif;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin: 0;
  border-radius: 15px;
  color: ${({ textColor }) => textColor};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
  }
`;

const Button = ({ text, variant, hoverColor }) => {
  const styles = {
    default: {
      borderGradient: "linear-gradient(90deg, #00c0ff, #635BE7, #a000ff)",
      backgroundColor: "#000000",
      textColor: "#ffffff",
      hoverColor: "#929292",
    },
    primary: {
      borderGradient: "linear-gradient(90deg, #1d4ed8, #ffffff, #1d4ed8)",
      backgroundColor: "#1d4ed8",
      textColor: "#ffffff",
      hoverColor: "#1f56ec",
    },
    success: {
      borderGradient: "linear-gradient(90deg, #16a34a, #ffffff, #16a34a)",
      backgroundColor: "#16a34a",
      textColor: "#ffffff",
      hoverColor: "#1cd560",
    },
    warning: {
      borderGradient: "linear-gradient(90deg, #dc2626, #ffffff, #dc2626)",
      backgroundColor: "#dc2626",
      textColor: "#ffffff",
      hoverColor: "#ef2929",
    },
    false: {
      borderGradient: "linear-gradient(90deg, #00c0ff, #635BE7, #a000ff)",
      backgroundColor: "#ffffff",
      textColor: "#000000",
      hoverColor: "#929292",
    },
    primaryfalse: {
      borderGradient: "linear-gradient(90deg, #1d4ed8, #ffffff, #1d4ed8)",
      backgroundColor: "#ffffff",
      textColor: "#000000",
      hoverColor: "#1f56ec",
    },
    successfalse: {
      borderGradient: "linear-gradient(90deg, #16a34a, #ffffff, #16a34a)",
      backgroundColor: "#ffffff",
      textColor: "#000000",
      hoverColor: "#1cd560",
    },
    warningfalse: {
      borderGradient: "linear-gradient(90deg, #dc2626, #ffffff, #dc2626)",
      backgroundColor: "#ffffff",
      textColor: "#000000",
      hoverColor: "#ef2929",
    },
  };

  const { borderGradient, backgroundColor, textColor } =
    styles[variant] || styles.primary;

  return (
    <>
      <GlobalStyle />
      <MarkBox borderGradient={borderGradient}>
        <StyledButton
          buttonBackgroundColor={backgroundColor}
          textColor={textColor}
        >
          {text}
        </StyledButton>
      </MarkBox>
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf([
    "default",
    "primary",
    "success",
    "warning",
    "false",
    "primaryfalse",
    "successfalse",
    "warningfalse",
  ]),
  role: PropTypes.string.isRequired,
  function: PropTypes.func,
  arialabelledby: PropTypes.string,
  ariadescribedby: PropTypes.string,
  function: PropTypes.func,
};

Button.defaultProps = {
  variant: "default",
};

export default Button;
