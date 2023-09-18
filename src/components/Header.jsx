import React from "react";

const Header = () => {
  return (
    <div className=" text-white p-4 flex items-center justify-between ">
      <div>
        <p className="text-3xl font-semibold ">
          Ello 🤖 <span className="text-gray-600 text-2xl">Bot </span>
        </p>
      </div>
      <div>
        <img
          src="https://img.freepik.com/free-vector/cute-artificial-intelligence-robot-isometric-icon_1284-63045.jpg?size=626&ext=jpg"
          alt="AI Chat Bot"
          className="w-14 h-14 rounded-full cursor-pointer hover:border-2"
        />
      </div>
    </div>
  );
};

export default Header;
