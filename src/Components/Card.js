import React from 'react'

export default function Card({pokemon,loading, infoPokemon}) {
    // console.log(pokemon)
  return (
      <div className='card-container'>
          {
              loading ? <h1>Loading...</h1> :
                  pokemon.map((item) => {
                      return (
                          <>
                              <div className="card" key={item.id} onClick={() => infoPokemon(item)}>
                                  <h2>{item.id}</h2>
                                  <img src={item.sprites.front_default} width="100" height="100" alt="A pokemon figure " />
                                  <h2>{item.name}</h2>

                              </div>
                          </>
                      )
                  })
          }
      </div>
  )
}
