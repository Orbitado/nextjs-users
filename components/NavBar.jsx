import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <Link href="/">
      <nav className="flex justify-center py-4 text-xl">
        <h1>Home</h1>
      </nav>
    </Link>
  );
};

export default NavBar;
