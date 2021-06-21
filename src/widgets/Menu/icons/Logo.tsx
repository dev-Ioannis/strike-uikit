import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  return (
    <Svg viewBox="0 0 205 26" {...props}>
      <image width="120" height="29" href={isDark ? '/images/strike/LogoTextNewDark.png' : '/images/strike/LogoTextNewWhite.png'}/>
    </Svg>
  )
};

export default Logo;
