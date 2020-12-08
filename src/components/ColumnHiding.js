import React, { useMemo } from 'react'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import { useTable, useSortBy } from 'react-table'
import './table.css'
import Checkbox from './Checkbox'

const ColumnHiding = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])
   
    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
        allColumns,
        getToggleHideAllColumnsProps
     } = useTable({
        columns,
        data
    }, useSortBy )
    
    return (
        <>
            <div style={{display: 'flex', height: '50px'}}>
                <div style={{width:'150px'}}> 
                    <Checkbox {...getToggleHideAllColumnsProps()}/>Toggle All
                </div>
                {
                    allColumns.map(column => (
                        <div key={column.id} style={{width:'150px'}}>
                            <label>
                                <input type='checkbox' {...column.getToggleHiddenProps()} />
                                { column.Header }
                            </label>
                        </div>
                    ))
                }
            </div>
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

export default ColumnHiding
