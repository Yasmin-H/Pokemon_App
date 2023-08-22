import React from 'react'

export default function PokeInfo() {
  return (
    <div>
        <h1>Charmander</h1> {/* Pokemon Name */}
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg" alt="image" />
        <div className='abilities'>
            <div className='group'>
                <h1>blaze</h1>
            </div>
            <div className='group'>
                <h1>solar power</h1>
            </div>
        </div>
        <div className='base-stat'>
            <h3>Hp: 30</h3>
            <h3>Attack : 52</h3>
            <h3>defense : 43</h3>
            <h3>special-attack: 50</h3>
            <h3>speed: </h3>

        </div>
      
    </div>
  )
}
