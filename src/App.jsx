import React from "react";
import ChatBot from "./ChatBot";
import bg from "../src/assets/bg.jpeg";

function App() {
  const divStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover", // You can adjust this to 'contain' or other values as needed
    backgroundPosition: "center center",
  };

  return (
    <div
      className={`h-screen w-screen flex flex-col justify-center items-center`}
      style={divStyle}
    >
      <section className="w-8/12 border-2 p-10 rounded-3xl shadow-2xl bg-white opacity-90">
        <p className="text-2xl">
          Ellocent Labs IT Solutions Pvt. Ltd. successfully marked its presence
          in the prominent IT development business world by delivering
          innovative solutions via implementing the SOLID coding principles.
        </p>

        {/* ChatBot... */}
        <ChatBot />
      </section>
    </div>
  );
}

export default App;
