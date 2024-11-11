import './App.css'
import Controller from './components/Controller'
import Viewer from './components/Viewer'

function App() {
  return (
    <div className="app">
      <h1>Simple Counter</h1>
      <section>
        <Viewer></Viewer>
      </section>
      <section>
        <Controller></Controller>
      </section>
    </div>
  )
}

export default App
