import { useState } from 'react';
import { useTable} from 'react-table';

import extendedData from '../helpers/extend_rows';

import type { CustomColumn } from '../types/column';
import type { RowData } from '../types/row';
import tableData from '../data/AllOrders';


function Table() {

  const [columns, setColumns] = useState<CustomColumn[]>(extendedData.columns as CustomColumn[]);

  const [data, setData]= useState<RowData[]>(extendedData.data);


  const {
  getTableProps,
  getTableBodyProps,
  } = useTable({ columns, data });


  function handleCellValueChange(accessor: string, rowIndex: number, newValue: string) {

    tableData.data[rowIndex][accessor] = newValue;
    setData([...tableData.data]); // Update the state with the new data
  } 


  return (
    <div className='w-full h-full overflow-auto bg-[#f6f6f6]'>
      <table {...getTableProps()} className='border-separate border-spacing-[1px]] bg-transparent'>
        <thead>
          <tr className='gap-[1px]'>
          {
            columns.map((column: CustomColumn, index:number) => (
              <th 
                key={index}
                className={'text-[16px] pr-[4px] pl-[8px] text-[#757575] font-[600] h-[32px]'}
                style={{ width:`${column.width}px`, backgroundColor: `${column.colour}`}}
              >
              
                {column.Header}
              </th>
              // console.log(column.Header);
            ))
          }
          </tr>
        </thead>

        <tbody {...getTableBodyProps()} className='gap-[1px]'>
          {
            data.map((row: RowData, rowIndex:number) => (
              <tr 
                key={rowIndex}
                
              >
                {
                  columns.map((column:CustomColumn, columnIndex:number)=>(
                    <td
                      key={columnIndex}
                      className={`gap-[1px]
                                ${column.accessor === "index" ? "text-[#757575]" : ""} 
                                `}
                    >
                    { column.accessor === "index" ?
                      <input 
                        className={'table-column'}
                        style={{ width:`${column.width}px`, textAlign: `${column.align}`}}
                        value={row[column.accessor] as string}
                        type="text"
                        disabled
                      />
                      :
                      <input 
                        className={`table-column overflow-hidden truncate`}
                        style={{ width:`${column.width}px`, textAlign: `${column.align}`}}
                        value={row[column.accessor] as string}
                        type="text"
                        onChange={(e) => {
                          handleCellValueChange(column.accessor, rowIndex, e.target.value);
                        }}
                      />
                      
                    }
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table