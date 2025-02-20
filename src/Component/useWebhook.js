// Webhook.js
import { useCallback } from "react";

const WEBHOOK_URL = "https://hkdk.events/gpxuv3t1p1c23x";

const useWebhook = () => {
  const sendToWebhook = useCallback(async (eventData) => {
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      });
      if (!response.ok) {
        throw new Error("Failed to send data to webhook");
      }
      console.log("Data sent to webhook successfully:", eventData);
    } catch (error) {
      console.error("Error sending data to webhook:", error);
    }
  }, []);

  return sendToWebhook;
};

export default useWebhook;
