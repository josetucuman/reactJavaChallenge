import React, { useMemo, useState } from 'react'
import { useTable } from 'react-table/dist/react-table.development';

import { getAllGuest } from '../../services/GuestServices';

import { COLUMNS } from './columns'

const ListGuest = () => {
  const data = useMemo(() => getAllGuest(), [])
  const columns = useMemo(() => COLUMNS, [])


  const tableInstance = useTable({
    columns,
    data: data
  })

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

  return (
    <table{...getTableProps()}>
      <thead >
        {
          headerGroups.map(headerGroup =>(
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map( column =>(
                <td {...column.getHeadersProps()}>
                  {
                    column.render('Header')
                  }
                </td>
              ))}
            </tr>
          ))
        }
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row =>{
          prepareRow(row)
          return(
            <tr {...row.getRowProps()}>
              {
                row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('cell')}
                    </td>
                })
              }
            </tr>
          )
        })}
         
      </tbody>
    </table>
  )
}

export default ListGuest