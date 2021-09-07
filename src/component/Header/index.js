import React from "react";
import './header.styles.scss'

export default function Header() {
  return (
    <div>
      <div className="wgchat-header">
        <svg viewBox="0 0 32 32">
          <path d="M24,22a1,1,0,0,1-.64-.23L18.84,18H17A8,8,0,0,1,17,2h6a8,8,0,0,1,2,15.74V21a1,1,0,0,1-.58.91A1,1,0,0,1,24,22ZM17,4a6,6,0,0,0,0,12h2.2a1,1,0,0,1,.64.23L23,18.86V16.92a1,1,0,0,1,.86-1A6,6,0,0,0,23,4Z" />
          <rect height="2" width="2" x="19" y="9"></rect>
          <rect height="2" width="2" x="14" y="9"></rect>
          <rect height="2" width="2" x="24" y="9"></rect>
          <path d="M8,30a1,1,0,0,1-.42-.09A1,1,0,0,1,7,29V25.74a8,8,0,0,1-1.28-15,1,1,0,1,1,.82,1.82,6,6,0,0,0,1.6,11.4,1,1,0,0,1,.86,1v1.94l3.16-2.63A1,1,0,0,1,12.8,24H15a5.94,5.94,0,0,0,4.29-1.82,1,1,0,0,1,1.44,1.4A8,8,0,0,1,15,26H13.16L8.64,29.77A1,1,0,0,1,8,30Z" />
        </svg>
        <div className="title">
          Silakan chat dengan tim kami{" "}
          <span>Admin akan merespon dalam beberapa menit</span>
        </div>
      </div>
    </div>
  );
}
