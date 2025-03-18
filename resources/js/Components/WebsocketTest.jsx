// resources/js/Components/WebsocketTest.jsx
import React, { useEffect, useState } from 'react';

export default function WebsocketTest() {
    const [messages, setMessages] = useState("");
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:6001/app/app-key');

        ws.onopen = () => {
            console.log("WebSocket connected directly");
            setConnected(true);

            // Subscribe ke channel
            const subscribeMessage = {
                event: 'pusher:subscribe',
                data: {
                    channel: 'test-channel'
                }
            };
            ws.send(JSON.stringify(subscribeMessage));
        };

        ws.onmessage = (event) => {
            console.log("WebSocket message:", event.data);
            try {
                const data = JSON.parse(event.data);
                console.log({data})
                if (data.event === 'TestEvent') {
                    console.log(JSON.parse(data.data));
                    setMessages(JSON.parse(data.data).message);
                }
            } catch (error) {
                console.error("Error parsing WebSocket message:", error);
            }
        };

        ws.onerror = (error) => {
            console.error("WebSocket error:", error);
        };

        ws.onclose = () => {
            console.log("WebSocket closed");
            setConnected(false);
        };

        return () => {
            ws.close();
        };
    }, []);

    return (
        <div>
            <h2>WebSocket Test</h2>
            <p>Status: {connected ? 'Connected' : 'Disconnected'}</p>
            <h3>Messages:</h3>
            <ul>
                    <li>{messages}</li>
            </ul>
        </div>
    );
}
