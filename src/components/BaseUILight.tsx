import * as React from "react";
import type { SVGProps } from "react";
const BaseUILight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Base UI"
    viewBox="0 0 17 24"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path d="M9.5 7.015A.477.477 0 0 0 9 7.5V23a8 8 0 0 0 .5-15.985M8 9.8V23c-4.418 0-8-3.94-8-8.8V1c4.418 0 8 3.94 8 8.8" />
  </svg>
);
export default BaseUILight;
export const BaseUILightUrl = "https://base-ui.com/";
