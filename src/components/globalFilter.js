import React from 'react'

export const GlobalFilter = ({ filter, setFilter}) => {
    return (
        <div>
            Serach : { }
            <input value={filter || ''} onChange={e => setFilter(e.target.value)} />
        </div>
    )
}
