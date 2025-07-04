import { useState } from 'react';
import { useTable} from 'react-table';

import tableData from '../data/AllOrders';

type RowData = Record<string, any>;

type CustomColumn = {
  Header: string;
  accessor: string;
  colour: string;
  align: 'left' | 'right' | 'center';
  width: number;
};


function Table() {

  const [columns, setColumns] = useState<CustomColumn[]>(tableData.columns as CustomColumn[]);

    const [data, setData]= useState<RowData[]>(tableData.data);



    const {
    getTableProps,
    getTableBodyProps,
    } = useTable({ columns, data });





  return (
    <div className='w-full h-full overflow-auto'>
      <table {...getTableProps()} className='border-collapse'>
        <thead>
          <tr>
          {
            columns.map((column: CustomColumn, index:number) => (
              <th 
                key={index}
                className={'text-[16px] pr-[4px] pl-[8px] border-y border-r border-[#f6f6f6] text-[#757575] font-[600] h-[32px]'}
                style={{ width:`${column.width}px`, backgroundColor: `${column.colour}`}}
              >
              
                {column.Header}
              </th>
              // console.log(column.Header);
            ))
          }
          </tr>
        </thead>

        <tbody {...getTableBodyProps()} className=''>
          {
            data.map((row: RowData, rowIndex:number) => (
              <tr 
                key={rowIndex}
              >
                {
                  columns.map((column:CustomColumn, columnIndex:number)=>(
                    <td
                      key={columnIndex}
                      className={`border-b-[1px] border-r-[1px] border-[#f6f6f6] 
                                ${column.accessor === "index" ? "text-[#757575]" : ""} 
                                `}
                    >
                    { column.accessor === "index" ?
                      <input 
                        className={'table-column'}
                        style={{ width:`${column.width}px`, textAlign: `${column.align}`}}
                        value={row[column.accessor]}
                        type="text"
                        disabled
                      />
                      :
                      <input 
                        className={`table-column overflow-hidden truncate`}
                        style={{ width:`${column.width}px`, textAlign: `${column.align}`}}
                        value={row[column.accessor]}
                        type="text"
                        readOnly
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