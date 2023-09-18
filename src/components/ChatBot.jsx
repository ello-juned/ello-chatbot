import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        botId: import.meta.env.VITE_REACT_APP_BOT_ID,
        hostUrl: "https://cdn.botpress.cloud/webchat/v1",
        messagingUrl: "https://messaging.botpress.cloud",
        clientId: import.meta.env.VITE_REACT_APP_CLIENT_ID,
      });
    };
  }, []);

  return <div id="webchat" style={{ display: "none" }} />;
};

export default Chatbot;
