import React, { useMemo } from 'react'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import { useTable, useSortBy, useGlobalFilter, useFilters } from 'react-table'
import './table.css'
import { GlobalFilter } from './globalFilter'
import { ColumnFilter } from './columnFilter'

const Sortingtable = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])
    const defaultColumn = useMemo(() => {
        return {
            Filter : ColumnFilter
        }
    }, [])
   
    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter
     } = useTable({
        columns,
        data,
        defaultColumn
    }, useFilters, useGlobalFilter, useSortBy )
    
    const { globalFilter } = state

    return (
        <>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />  
        <table {...getTableProps() }>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th { ...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                <div>{ column.canFilter ? column.render('Filter') : null }</div>
                                <span>
                                    {column.isSorted ? (column.isSortedDesc ? '↑': '↓') : ''}
                                </span>
                            </th>
                        ))}
                    </tr>   
                ))}
            </thead>
            <tbody {...getTableBodyProps() }>
                {rows.map(row=> {
                    prepareRow(row)
                    return <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td { ...cell.getCellProps() }>{cell.render('Cell')}</td>
                                ))}
                            </tr>       
                })}
            </tbody>
            <tfoot>
                {footerGroups.map(footerGroup => (
                    <tr {...footerGroup.getFooterGroupProps()}>
                        {footerGroup.headers.map(column => (
                            <td {...column.getFooterProps()}>{column.render('Footer')}</td>
                        ))}
                    </tr>
                ) )}
            </tfoot>
        </table>
        </>
    )
}

export default Sortingtable
