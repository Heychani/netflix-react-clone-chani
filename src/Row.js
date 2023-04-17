import React, { useState } from 'react'

function Row({ title }) {
    const [movies, setMovies] = useState( [] ) //reactHook
    return (
    <div>
        <h2>{title}</h2>

        {/* container -> posters */}
    </div>
  )
}

export default Row