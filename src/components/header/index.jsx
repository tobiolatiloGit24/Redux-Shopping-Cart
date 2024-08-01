import React from "react";
import { Link } from "react-router-dom";

// console.log()
export default function Header() {
  return (
    <div>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto ">
        <Link to={"/"}>
          <div className="ml-5">
            <h1 className="text-red-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer truncate-wide ">
              REDUX SHOPPING CART
            </h1>
          </div>
        </Link>
        <ul className=" list-none flex items-center space-x-6 text-gray-800 font-semibold sm:mr-2 ">
          <Link to={"/"}>
            <li className="cursor-pointer list-none">Home</li>
          </Link>
          <Link to={"/cart"}>
            <li className="cursor-pointer list-none ">Cart</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
