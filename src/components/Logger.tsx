import React, { useEffect } from 'react'

import Stomp from 'stompjs'

export function connectRabbit() {}

const Logger = () => {
  
  useEffect(() => {
    const ws = new WebSocket('ws:///localhost/rabbitmq/ws')
    const stompClient = Stomp.over(ws)
    const headers = {
      login: 'user',
      passcode: 'user',
      durable: 'true',
      'auto-delete': 'false',
    }

    stompClient.connect(headers, function (frame) {
      console.log('Connected')
      const subscription = stompClient.subscribe('/queue/hello', function ( message,) {
        console.log(message)
      })
    })
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
