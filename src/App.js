import React, { useState, useEffect, createContext, useRef } from 'react'
import { Card } from './Componenets/Card'

export const CardContext = createContext()
export const SelectedContext = createContext()

function App() {
  const [cards, setCards] = useState([])
  const [selected, setSelected] = useState([])

  const options = [
    { color: '#000000', active: false, match: false },
    { color: '#2A1A1F', active: false, match: false },
    { color: '#764134', active: false, match: false },
    { color: '#AD8350', active: false, match: false },
    { color: '#AFA060', active: false, match: false },
    { color: '#B084CC', active: false, match: false },
    { color: '#5DD9C1', active: false, match: false },
    { color: '#ACFCD9', active: false, match: false }
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
    if (isMatch()) {
      console.log('match')
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
    setSelected([])
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
