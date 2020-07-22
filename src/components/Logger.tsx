import React, { useEffect } from 'react'
import { w3cwebsocket as W3CWebSocket } from "websocket";


// import { Client, Message, Frame } from '@stomp/stompjs'

// export function connectRabbit() {}

const Logger = () => {
  useEffect(() => {
    const client = new W3CWebSocket('ws://localhost/ws');
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message: object) => {
      console.log(message);
    };

    // const client = new Client({
    //   brokerURL: 'ws:///localhost/rabbitmq/ws',
    //   connectHeaders: {
    //     login: 'user',
    //     passcode: 'user',
    //   },
    //   debug: function (str: string) {
    //     console.log(str)
    //   },
    //   reconnectDelay: 2000,
    //   heartbeatIncoming: 4000,
    //   heartbeatOutgoing: 4000,
    // })

    // client.onConnect = function (frame: Frame) {
    //   // Do something, all subscribes must be done is this callback
    //   // This is needed because this will be executed after a (re)connect
    //   const subscription = client.subscribe('/queue/hello', function (
    //     message: Object,
    //   ) {
    //     console.log(message)
    //   })
    // }

    // client.onStompError = function (frame: Frame) {
    //   // Will be invoked in case of error encountered at Broker
    //   // Bad login/passcode typically will cause an error
    //   // Complaint brokers will set `message` header with a brief message. Body may contain details.
    //   // Compliant brokers will terminate the connection after any error
    //   console.log('Broker reported error: ' + frame.headers['message'])
    //   console.log('Additional details: ' + frame.body)
    // }

    // client.activate()
  }, [])

  const click = () => {
    fetch('/api')
      .then((response) => response.json())
      .then((data) => console.log(data))
  }

  return (
    <div className="Logger">
      Msg <button onClick={click}>Click me</button>
    </div>
  )
}

export default Logger
