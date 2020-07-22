import React from "react";
import "./App.css";
import Logger from './components/Logger';
import IframeResizer from 'iframe-resizer-react'

const App = () => {
  return (
    <div className="App">
      <IframeResizer
        src="http://localhost/plugins/logger"
        style={{ width: '1px', minWidth: '100%'}}
      />
      <Logger />
    </div>
  );
}

export default App;
