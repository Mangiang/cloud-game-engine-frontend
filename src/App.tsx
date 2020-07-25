import React, { useState, Suspense } from 'react'
import './App.css'
import PluginLoader from './components/PluginLoader'

const App = () => {
  const [plugins, setPlugins] = useState<string[]>([])

  return (
    <div className="App">
      <button onClick={(evt) => setPlugins(plugins.concat(['cloud-game-engine-logger-frontend']))}>
        Add logger
      </button>
      {plugins.map((plugin: string) => (
        <Suspense
          key={plugin}
          fallback={<h1>Chargement du plugin {plugin}...</h1>}
        >
          <PluginLoader name={plugin} />
        </Suspense>
      ))}
    </div>
  )
}

export default App
