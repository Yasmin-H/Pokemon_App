import React from 'react'

export default function PokeInfo({ data }) {
    console.log(data)
    return (
        <div>
            {
                (!data) ? "" : (
                    <>

                        <h1>{data.name}</h1> {/* Pokemon Name */}
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="image" />
                        <div className='abilities'>
                            {
                                data.abilities.map(poke => {
                                    return (
                                        <>
                                            <div className='group'>
                                                <h1>{poke.ability.name}</h1>
                                            </div>

                                        </>
                                    )
                                })
                            }
                        </div>
                        <div className='base-stat'>
                            {
                                data.stats.map(poke=>{
                                    return(
                                        <>
                                            <h3>{poke.stat.name}:{poke.base_stat}</h3>
                                        </>

                                    )
                                })
                            }

                        </div>

                    </>
                )
            }

        </div>
    )
}
