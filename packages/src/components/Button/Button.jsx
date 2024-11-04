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

const Button = ({
  children,
  variant = "default",
  hoverColor,
  path,
  type = "button",
  onClick,
}) => {
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
  };

  const { borderGradient, backgroundColor, textColor } =
    styles[variant] || styles.default;

  if (path) {
    return (
      <>
        <GlobalStyle />
        <MarkBox borderGradient={borderGradient}>
          <a
            href={path}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Link to ${path}`}
          >
            <StyledButton
              buttonBackgroundColor={backgroundColor}
              textColor={textColor}
              hoverColor={hoverColor || styles[variant].hoverColor}
              type={type}
              onClick={onClick}
              aria-label={children}
            >
              {children}
            </StyledButton>
          </a>
        </MarkBox>
      </>
    );
  }

  return (
    <>
      <GlobalStyle />
      <MarkBox borderGradient={borderGradient}>
        <StyledButton
          buttonBackgroundColor={backgroundColor}
          textColor={textColor}
          hoverColor={hoverColor || styles[variant].hoverColor}
          onClick={onClick}
          type={type}
          aria-label={children}
        >
          {children}
        </StyledButton>
      </MarkBox>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["default", "primary", "success", "warning"]),
  hoverColor: PropTypes.string,
  path: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

Button.defaultProps = {
  variant: "default",
  type: "button",
};

export default Button;
