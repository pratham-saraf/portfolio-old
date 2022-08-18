import { useThemeMode } from "@/lib/Context/ThemeContext";
import { motion } from "framer-motion";
import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

export default function Logo({ color, variants = {} }) {
  const theme = useContext(ThemeContext);
    const themeUpdate = useThemeMode();

  return (
    <>
    <button onClick={() => themeUpdate.toggleMode()} id="theme-toggle">
    <FontAwesomeIcon icon={faMoon} size="lg"/>
    </button>
    </>
  );
}
