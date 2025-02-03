"use client";

import { useEffect, useState } from "react";

export default function ChatBot() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;
    document.body.appendChild(script);

    window.botpressWebChat = {
      config: {
        botId: "YOUR_BOT_ID",
        host: "https://cdn.botpress.cloud/webchat",
        showCloseButton: true,
      },
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg"
      >
        💬 Chat
      </button>
      {open && <div id="bp-web-widget" />}
    </div>
  );
}
