import React, { useState, useContext } from 'react'
import { CardContext, SelectedContext } from '../App.js'

export const Card = ({ card }) => {
    const { cards, setCards } = useContext(CardContext)
    let { selected, setSelected } = useContext(SelectedContext)

    const handleClick = () => {
        if(!card.active && !card.match){
            const updateCards = cards.map(c => {
                return c.id === card.id
                    ? { ...c, active: true }
                    : c
            })
            setCards(updateCards)
            setSelected([...selected, card.color])
        }
    }

    return (
        <div>
            <div
                style={{
                    height: '50px',
                    width: '50px',
                    backgroundColor: card.active || card.match ? card.color : 'grey',
                }}
                onClick={handleClick}
            >
            </div>
        </div>
    )
}
