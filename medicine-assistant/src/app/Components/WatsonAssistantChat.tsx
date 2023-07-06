'use client'
import { useEffect } from "react";

const WatsonAssistantChat = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.watsonAssistantChatOptions = {
        integrationID: '', // Here you can pass your Watson Assistant, integrationID
        region: "us-south", // Mine is on us-south, but you can change that if you need.
        serviceInstanceID: '', // Here you can pass your Watson Assistant, serviceInstanceID
        onLoad: function (instance) {
          instance.render();
        },
      };

      setTimeout(function () {
        const t = document.createElement("script");
        t.src =
          "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
          (window.watsonAssistantChatOptions.clientVersion || "latest") +
          "/WatsonAssistantChatEntry.js";
        document.head.appendChild(t);
      });
    }
  }, []);

  return null;
};

export default WatsonAssistantChat; 

