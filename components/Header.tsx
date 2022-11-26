import React from "react";
import { Logo } from "../icons";

export const Header = () => {
  return (
    <div className="bg-zinc-800 py-2 px-6 md:px-24 flex justify-between  border-zinc-50 border-b border-opacity-10 ">
      <div className="py-2">
        <Logo />
      </div>
      {/* <div className="flex flex-row -mt-1 items-center text-zinc-50">
        <h1 className="mx-2">middle section</h1>
      </div> */}

      {/* <div>
        <h1>menu</h1>
      </div> */}
    </div>
  );
};
