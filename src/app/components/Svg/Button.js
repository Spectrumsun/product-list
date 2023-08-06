import React from "react";

function Icon() {
  return (
    <svg width="26" height="12" fill="none">
      <rect width="25" height="11" x="0.5" y="0.5" fill="#fff" rx="5.5"></rect>
      <path fill="#06F" d="M14 1h7a5 5 0 010 10H11l3-10z"></path>
      <path
        stroke="#06F"
        strokeLinecap="round"
        d="M4.5 6.5l1.774 1.774a.25.25 0 00.39-.049L9.5 3.5"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        d="M16.5 3.5L19 6m0 0l2.5 2.5M19 6l2.5-2.5M19 6l-2.5 2.5"
      ></path>
      <rect
        width="25"
        height="11"
        x="0.5"
        y="0.5"
        stroke="#06F"
        rx="5.5"
      ></rect>
    </svg>
  );
}

export default Icon;
