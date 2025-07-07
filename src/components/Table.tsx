import { useState } from 'react';
import { useTable} from 'react-table';

import extendedData from '../helpers/extend_rows';

import type { CustomColumn } from '../types/column';
import type { RowData } from '../types/row';
import tableData from '../data/AllOrders';


//Import Cell Types
import IndexCell from './Cells/IndexCell';
import TextCell from './Cells/TextCell';
import StatusCell from './Cells/StatusCell';
import DateCell from './Cells/DateCell';
import URLCell from './Cells/URLCell';
import PriorityCell from './Cells/PriorityCell';
import CurrencyCell from './Cells/CurrencyCell';


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

  function renderCell(type:string, width:number, value:string, rowIndex:number, accessor:string) {

    switch (type) {

      case 'INDEX':
        return <IndexCell 
          width={width}
          value={value}
        />;


      case 'TEXT':
        return <TextCell
          width={width}
          value={value}
        />;

      case 'STATUS':
        return <StatusCell
          width={width}
          value={value as 'In-process' | 'Need to start' | 'Complete' | 'Blocked'}
          />;
      
      case 'DATE':
        return <DateCell
          width={width}
          value={value}
        />;
      
      case 'URL':
        return <URLCell
          width={width}
          value={value}
        />;
      
      case 'PRIORITY':
        return <PriorityCell
          width={width}
          value={value as 'Low' | 'Medium' | 'High'| 'undefined' }
        />;
      
      case 'CURRENCY':
        return <CurrencyCell
          width={width}
          value={value}
        />;


      default:
        return <TextCell
          width={width}
          value={value}
        />;
    }
  }


  return (
    <div className='w-full h-full overflow-auto bg-[#f6f6f6]'>
      <table {...getTableProps()} className='border-separate border-spacing-[1px] bg-transparent'>
        <thead>
          <tr>
            <th colSpan={1} className="bg-white"></th>
            <th colSpan={4} className="bg-white">This</th>
            <th colSpan={1} className="bg-white"></th>
            <th colSpan={1} className="bg-white"></th>
            <th colSpan={2} className="bg-white">is a test</th>
            <th colSpan={1} className="bg-white"></th>
          </tr>
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
                      className=''
                    >
                    {
                      renderCell(
                        column.type,
                        column.width,
                        row[column.accessor] as string,
                        rowIndex,
                        column.accessor
                      )
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