import React, { useState, useEffect, createContext, useRef } from 'react'
import { Card } from './Componenets/Card'

export const CardContext = createContext()
export const SelectedContext = createContext()

function App() {
  const [cards, setCards] = useState([])
  const [selected, setSelected] = useState([])

  const options = [
    { color: '#DE3C4B', active: false, match: false },
    { color: '#E28413', active: false, match: false },
    { color: '#30C5FF', active: false, match: false },
    { color: '#52FFB8', active: false, match: false },
    { color: '#070600', active: false, match: false },
    { color: '#F4E409', active: false, match: false },
    { color: '#802392', active: false, match: false },
    { color: '#496DDB', active: false, match: false }
  ]

  const shuffle = array => array.sort(() => Math.random() - 0.5)

  const createCards = () => {
    let doubles = shuffle([...options, ...options])
      .map(double => ({ ...double, id: Math.random() }))

    setCards(doubles)
  }

  useEffect(() => {
    createCards()
  }, [])

  const isMatch = () => new Set(selected).size !== selected.length

  if (selected.length === 2) {
    setSelected([])
    setTimeout(() => {
      if (isMatch()) {
        const updateCards = cards.map(c => {
          return c.color === selected[0]
            ? { ...c, active: false, match: true }
            : c
        })
        setCards(updateCards)

      } else {
        const reset = cards.map(card => ({ ...card, active: false }))
        setCards(reset)
      }
    }, 400)
  }

  return (
    <CardContext.Provider value={{ cards, setCards }}>
      <SelectedContext.Provider value={{ selected, setSelected }}>
        <div className="App">Memory game
          <div className='board'>
            {cards.map(card => <Card card={card} key={Math.random()} />)}
          </div>
        </div>
      </SelectedContext.Provider>
    </CardContext.Provider>
  )
}

export default App
