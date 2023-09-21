import React from "react";
import ChatBot from "./components/ChatBot";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col bg-primaryColor">
      <div className="h-1/10 m-2 bg-black shadow-xl  rounded-xl">
        <Header />
      </div>

      <Hero />

      <ChatBot />
    </div>
  );
}

export default App;
