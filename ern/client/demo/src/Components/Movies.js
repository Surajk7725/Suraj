import React from 'react'

function Movies({data}) {
  return (
    <div>
        movies iD:{data.id}<br/>
        movies name:{data.name}<br/>
        movies genre:{data.genre}<br/>
        movies year:{data.year}<br/>
        movies rating:{data.rating}
    </div>
  )
}

export default Movies;