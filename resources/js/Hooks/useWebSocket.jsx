import { useState, useEffect, useCallback } from 'react';

/**
* Custom hook for connecting to a WebSocket channel
* @param {string} channelName - The channel to subscribe to
* @param {string} eventName - The event to listen for
* @param {Object} config - Configuration options
* @returns {Object} - Connection state and message data
*/
function useWebSocket(channelName, eventName, config = {}) {
 const [message, setMessage] = useState("");
 const [connected, setConnected] = useState(false);
 const [error, setError] = useState(null);

 const defaultConfig = {
   host: 'localhost',
   port: 6001,
   key: 'app-key',
   secure: false
 };

 const wsConfig = { ...defaultConfig, ...config };

 useEffect(() => {
   const protocol = wsConfig.secure ? 'wss' : 'ws';
   const ws = new WebSocket(`${protocol}://${wsConfig.host}:${wsConfig.port}/app/${wsConfig.key}`);

   ws.onopen = () => {
     console.log(`WebSocket connected to ${channelName}`);
     setConnected(true);

     // Subscribe to the channel
     const subscribeMessage = {
       event: 'pusher:subscribe',
       data: { channel: channelName }
     };
     ws.send(JSON.stringify(subscribeMessage));
   };

   ws.onmessage = (event) => {
     try {
       const data = JSON.parse(event.data);

       // Handle the specific event we're listening for
       if (data.event === eventName) {
         const eventData = JSON.parse(data.data);
         setMessage(eventData.message);
       }
     } catch (error) {
       console.error("Error parsing WebSocket message:", error);
       setError(error);
     }
   };

   ws.onerror = (error) => {
     console.error("WebSocket error:", error);
     setError(error);
   };

   ws.onclose = () => {
     console.log("WebSocket closed");
     setConnected(false);
   };

   // Cleanup function
   return () => {
     if (ws.readyState === WebSocket.OPEN) {
       ws.close();
     }
   };
 }, [channelName, eventName, wsConfig]);

 return { message, connected, error };
}

export default useWebSocket;
