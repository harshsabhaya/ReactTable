import React, { useMemo } from 'react'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import { useTable, useSortBy, useRowSelect } from 'react-table'
import './table.css'
import Checkbox from './Checkbox'

const RowSelection = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])
   
    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        selectedFlatRows,
        prepareRow
     } = useTable({
        columns,
        data
    }, useSortBy,
     useRowSelect,
      (hooks) => {
        hooks.visibleColumns.push((columns) => {
            return [
                {   
                    id: 'selection',
                    Header: ({ getToggleAllRowsSelectedProps }) => (
                        <Checkbox { ...getToggleAllRowsSelectedProps() }/>
                    ),
                    Cell: ({row}) => (
                        <Checkbox { ...row.getToggleRowSelectedProps()}/>
                    )
                },
                ...columns
            ]
        })
      })

    const firstRows = rows.slice(0, 10)
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
                    {firstRows.map(row=> {
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
            <pre>
                {console.log('flatData', selectedFlatRows)}
                <code>
                    {
                        JSON.stringify(
                            {
                                selectedFlatRows : selectedFlatRows.map(row => row.original),
                            },
                            null, 
                            2
                        )
                    }
                </code>
            </pre>
        </>
    )
}

export default RowSelection
