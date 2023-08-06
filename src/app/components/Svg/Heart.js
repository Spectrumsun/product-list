import React from "react";

function Icon({ status }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="rgba(0, 0, 0, 0.5)"
      stroke="var(--f-mkcy-f)"
      strokeWidth="2"
      aria-hidden="true"
      display="block"
      overflow="visible"
      viewBox="0 0 32 32"
      style={{ height: 35, width: 35 }}
    >
      <path 
        d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 00-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 00-9.9 0A6.98 6.98 0 002 11c0 7 7 12.27 14 17z"
        fill={status ? '#FF385C' : 'transparent'}
      ></path>
    </svg>
  );
}

export default Icon;
