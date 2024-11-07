import './App.css'
import Button from './components/Button'

function App() {
  const buttonProps = {
    text: "카페",
    color: "blue",
    a: 1,
    b: 2,
    c: 3
  }

  return (
    <>
      <Button text={"메일"} color={"red"}/>
      <Button {...buttonProps}/>
      <Button text={"블로그"}>
        <div>children</div>
      </Button>
    </>
  )
}

export default App
