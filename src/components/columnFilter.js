import React from 'react'

export const ColumnFilter = ({ column }) => {
    const { filterValue, setFilter } = column
    return (
        <div>
            Serach : {' '}
            <input value={filterValue || ''} onChange={e => setFilter(e.target.value)} />
        </div>
    )
}

