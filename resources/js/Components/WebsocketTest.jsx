// resources/js/Components/WebsocketTest.jsx
import useWebSocket from '@/Hooks/useWebSocket';
import React, { useEffect, useState } from 'react';

export default function WebsocketTest() {
    const { message, connected, error } = useWebSocket(
        'test-channel',
        'TestEvent',
        {
          // Optional config overrides
          // host: 'example.com',
          // port: 6001,
          // secure: true
        }
      );

    return (
        <div>
            <h2>WebSocket Test</h2>
            <p>Status: {connected ? 'Connected' : 'Disconnected'}</p>
            <h3>Messages:</h3>
            <ul>
                <li>{message}</li>
            </ul>
        </div>
    );
}
