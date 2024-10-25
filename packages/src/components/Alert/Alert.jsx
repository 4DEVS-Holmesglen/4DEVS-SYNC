import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import PropTypes from "prop-types";
import { FiCheck } from "react-icons/fi";
import Montserrat from "../../style/Font/Montserrat-VariableFont_wght.ttf";
import OpenSans from "../../style/Font/OpenSans-VariableFont_wdth,wght.ttf";

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

const AlertStyled = styled.div`
  width: "auto";
  max-width: 500px;
  padding: 20px 20px 15px 70px;
  margin-bottom: 20px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: relative;
  border-radius: 20px;

  h2 {
    font-size: 1.25em;
    font-family: "Montserrat", sans-serif;
    margin: 0;
    font-weight: bold;
    color: ${({ textColor }) => textColor};
  }

  p {
    font-size: 1em;
    font-family: "Open Sans", sans-serif;
    margin: 8px 0;
    color: ${({ textColor }) => textColor};
  }

  .box-mark {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    border: 3px solid transparent;
    background: ${({ borderGradient }) => borderGradient} border-box;
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: -5.5%;
  top: 22%;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  border: solid 3px #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ iconBackground }) => iconBackground};
  color: #fff;
  font-size: 45px;
`;

const Alert = ({ title, body, status, icon: IconComponent }) => {
  const alertStyles = {
    default: {
      borderGradient: "linear-gradient(90deg, #00c0ff, #635BE7, #a000ff)",
      backgroundColor: "#ffffff",

      iconBackground: "linear-gradient(90deg, #00c0ff, #635BE7)",
      icon: <FiCheck />,
      textColor: "#000000",
    },
    defaultDark: {
      borderGradient: "linear-gradient(90deg, #00c0ff, #635BE7, #a000ff)",
      backgroundColor: "#000000",

      iconBackground: "linear-gradient(90deg, #00c0ff, #635BE7)",
      icon: <FiCheck />,
      textColor: "#ffffff",
    },
    primary: {
      borderGradient: "linear-gradient(90deg, #3b82f6, #ffffff, #3b82f6)",
      backgroundColor: "#ffffff",

      iconBackground: "#3b82f6",
      icon: <FiCheck />,
      textColor: "#000000",
    },
    primaryDark: {
      borderGradient: "linear-gradient(90deg, #3b82f6, #ffffff, #3b82f6)",
      backgroundColor: "#000000",

      iconBackground: "#3b82f6",
      icon: <FiCheck />,
      textColor: "#ffffff",
    },
    success: {
      borderGradient: "linear-gradient(90deg, #16a34a, #ffffff,  #16a34a)",
      backgroundColor: "#ffffff",

      iconBackground: "#16a34a",
      icon: <FiCheck />,
      textColor: "#000000",
    },
    successDark: {
      borderGradient: "linear-gradient(90deg, #16a34a, #ffffff,  #16a34a)",
      backgroundColor: "#000000",

      iconBackground: "#16a34a",
      icon: <FiCheck />,
      textColor: "#ffffff",
    },
    warning: {
      borderGradient: "linear-gradient(90deg, #dc2626, #ffffff, #dc2626)",
      backgroundColor: "#ffffff",

      iconBackground: "#dc2626",
      icon: <FiCheck />,
      textColor: "#000000",
    },
    warningDark: {
      borderGradient: "linear-gradient(90deg, #dc2626, #ffffff, #dc2626)",
      backgroundColor: "#000000",

      iconBackground: "#dc2626",
      icon: <FiCheck />,
      textColor: "#ffffff",
    },
  };

  const {
    borderGradient,
    backgroundColor,
    buttonColor,
    iconBackground,
    icon,
    textColor,
  } = alertStyles[status] || alertStyles.primary;

  return (
    <>
      <GlobalStyle />
      <AlertStyled
        borderGradient={borderGradient}
        backgroundColor={backgroundColor}
        buttonColor={buttonColor}
        textColor={textColor}
      >
        <div className="box-mark" />
        <IconWrapper iconBackground={iconBackground}>
          {IconComponent || icon}
        </IconWrapper>
        <h2>{title}</h2>
        <p>{body}</p>
        {/*<button>{btn}</button>*/}
      </AlertStyled>
    </>
  );
};

Alert.propTypes = {
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
};

export default Alert;
