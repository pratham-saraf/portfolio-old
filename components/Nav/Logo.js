import { useThemeMode } from "@/lib/Context/ThemeContext";
import { motion } from "framer-motion";
import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

export default function Logo({ color, variants = {} }) {
  const theme = useContext(ThemeContext);
  const themeUpdate = useThemeMode();

  const isDarkMode = theme.name.current === "dark" ? true : false;

  return (
    <>
      <button onClick={() => themeUpdate.toggleMode()}>
        {isDarkMode ? (
          <FontAwesomeIcon
            icon={faSun}
            fontSize="2em"
            data-toggle="tooltip"
            data-placement="left"
            title="Toggle to Light Mode"
          />
        ) : (
          <FontAwesomeIcon
            icon={faMoon}
            fontSize="2em"
            data-toggle="tooltip"
            data-placement="left"
            title="Toggle to Dark Mode"
          />
        )}
      </button>
    </>
  );
}
