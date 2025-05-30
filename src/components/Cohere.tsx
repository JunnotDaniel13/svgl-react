import * as React from "react";
import type { SVGProps } from "react";
const Cohere = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 75 75"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path
      d="M24.3 44.7c2 0 6-.1 11.6-2.4 6.5-2.7 19.3-7.5 28.6-12.5 6.5-3.5 9.3-8.1 9.3-14.3C73.8 7 66.9 0 58.3 0h-36C10 0 0 10 0 22.3s9.4 22.4 24.3 22.4"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#39594d",
      }}
    />
    <path
      d="M30.4 60c0-6 3.6-11.5 9.2-13.8l11.3-4.7C62.4 36.8 75 45.2 75 57.6 75 67.2 67.2 75 57.6 75H45.3c-8.2 0-14.9-6.7-14.9-15"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#d18ee2",
      }}
    />
    <path
      d="M12.9 47.6C5.8 47.6 0 53.4 0 60.5v1.7C0 69.2 5.8 75 12.9 75s12.9-5.8 12.9-12.9v-1.7c-.1-7-5.8-12.8-12.9-12.8"
      style={{
        fill: "#ff7759",
      }}
    />
  </svg>
);
export default Cohere;
export const CohereUrl = "https://cohere.com/";
