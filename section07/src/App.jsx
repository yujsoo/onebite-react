import './App.css'
import { useEffect, useState } from 'react';
import Controller from './components/Controller'
import Viewer from './components/Viewer'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // 컴포넌트 내부에서 어떠한 값이 변경되었을 때 원하는 동작을 수행하도록 만들 수가 있음.
  useEffect(() => {
    console.log(`count:${count} / ${input}`)
  }, [count,input])
  // 의존성 배열 : dependency : deps

  const onClickButton = (value) => {
    setCount(count + value);
  }

  return (
    <div className="app">
      <h1>Simple Counter</h1>
      <section>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value) }/>
      </section>
      <section>
        <Viewer count={count}></Viewer>
      </section>
      <section>
        <Controller onClickButton={onClickButton}></Controller>
      </section>
    </div>
  )
}

export default App
