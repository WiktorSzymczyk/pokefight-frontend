import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-[#faf1a0] text-[1.2rem] px-[10rem] py-[1rem]">
      <ul className="flex justify-between">
        <Link to="/">Home</Link>
        <Link to="/fight">Fight</Link>
        <Link to="/pokemon">Show All</Link>
      </ul>
    </div>
  );
}
