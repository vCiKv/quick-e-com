import { CSSProperties } from "react";

export default interface PropType {
  className?: string;
  style?:CSSProperties;
  bottomDivider?: boolean;
  topDivider?: boolean;
  invertMobile?:boolean
  invertDesktop?:boolean
  alignTop?:boolean,
  split?:boolean
}
