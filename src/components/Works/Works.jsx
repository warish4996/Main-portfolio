import React, { useContext } from "react";
import "./Works.css";
import ReduxIcon from "../../img/Redux.png";
import MUIIcon from "../../img/MUI.png";
import ReactIcon from "../../img/React.png";
import TypeScriptIcon from "../../img/TypeScript.png";
import StyledComponentsIcon from "../../img/styled-components.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
           Knowdlege of
          </span>
          <span>Library & Packages</span>
          <spane>
            Over 3 years of experience working with JavaScript, React, HTML, and CSS
            <br />
            with expertise in popular libraries and frameworks such as Redux, Styled-Components
            <br />
            Material-UI, and TypeScript.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={ReduxIcon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={MUIIcon} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="w-secMiddle" src={ReactIcon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={TypeScriptIcon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={StyledComponentsIcon} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
