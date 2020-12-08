import React, { useMemo } from 'react'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import { useTable, useSortBy, usePagination } from 'react-table'
import './table.css'

const Pagination = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])
   
    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        setPageSize,
        state,
        gotoPage,
        pageCount,
        prepareRow
     } = useTable({
        columns,
        data,
        initialState: { 
            pageIndex :  0,
            pageSize : 5
        }
    }, useSortBy, usePagination  )
    
    const { pageIndex, pageSize } = state
    return (
        <>
            <table {...getTableProps() }>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th { ...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? '↑': '↓') : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>   
                    ))}
                </thead>
                <tbody {...getTableBodyProps() }>
                    {page.map(row=> {
                        prepareRow(row)
                        return <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => (
                                        <td { ...cell.getCellProps() }>{cell.render('Cell')}</td>
                                    ))}
                                </tr>       
                    })}
                </tbody>
            </table>
            <div>
                <strong>
                    Page {pageIndex + 1} of {pageOptions.length}{' '}
                </strong>
                <div>Go to page
                    <input type='number' defaultValue={pageIndex+1} 
                    min={1}
                    max={pageOptions.length}
                        onChange={e => {
                            const pageNumber = e.target.value ? Number(e.target.value) - 1: 0 
                            gotoPage(pageNumber)
                            
                        }}
                        style = {{ width: '50px'}}
                        />
                </div>
                <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                    {
                        [5, 10, 25, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))
                    }
                </select>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'} </button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
            </div>
        </>
    )
}

export default Pagination
