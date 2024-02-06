import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Greeting from './randomComponent'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const buttonElement = document.getElementById('movingButton')
    const cardElement = document.querySelector('.card')

    const moveButtonRandomly = () => {
      const cardWidth = cardElement!.clientWidth
      const cardHeight = cardElement!.clientHeight

      const buttonWidth = buttonElement!.offsetWidth
      const buttonHeight = buttonElement!.offsetHeight

      const maxX = cardWidth - buttonWidth
      const maxY = cardHeight - buttonHeight

      const randomX = Math.floor(Math.random() * maxX)
      const randomY = Math.floor(Math.random() * maxY)

      buttonElement!.style.left = `${randomX}px`
      buttonElement!.style.top = `${randomY}px`
    }

    buttonElement!.addEventListener('click', moveButtonRandomly)

    return () => {
      buttonElement!.removeEventListener('click', moveButtonRandomly)
    }
  }, [])

  return (
    <div>
      <div className="card">
        <Greeting name="frah"></Greeting>
        <button
          id="movingButton"
          data-testid="movingButton"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
