import React, { useMemo } from 'react'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import { useTable, useSortBy, useColumnOrder } from 'react-table'
import './table.css'

const ColumnOrder = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])
   
    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        state,
        prepareRow,
        setColumnOrder
     } = useTable({
        columns,
        data,
    }, useSortBy, useColumnOrder )
    

    const orderChange = () => {
        setColumnOrder([
            'id',
            'first_name',
            'last_name',
            'gender',
            'email',
            'dob'
        ])
    }

    return (
        <>
            <button onClick={orderChange}>Change Order</button>
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

export default ColumnOrder
