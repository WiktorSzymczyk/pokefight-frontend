import React from "react";

export default function Navbar() {
  return (
    <div className="bg-[#faf1a0] text-[1.2rem] px-[10rem] py-[1rem]">
      <ul className="flex justify-between">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Fight</a>
        </li>
        <li>
          <a>Show All</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </div>
  );
}
