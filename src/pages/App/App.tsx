import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello react</h1>
      <div className='flex justify-center'>
        <img alt="React Logo" src={reactLogo} />
        <img alt="Vite Logo" src={viteLogo} />

      </div>
      <div className='flex flex-col'>
        <p>Count {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>Increment</button>
        <Link to="/page2">Go to page 2</Link>
      </div>

    </>
  )
}

export default App
