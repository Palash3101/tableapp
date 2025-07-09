import { useTable} from 'react-table';

import type { CustomColumn } from '../types/column';
import type { RowData } from '../types/row';  

//Import Cell Types
import IndexCell from './Cells/IndexCell';
import TextCell from './Cells/TextCell';
import StatusCell from './Cells/StatusCell';
import DateCell from './Cells/DateCell';
import URLCell from './Cells/URLCell';
import PriorityCell from './Cells/PriorityCell';
import CurrencyCell from './Cells/CurrencyCell';

//Import Subcomponents
import TableCustomHeader from './subcomponents/TableCustomHeader';
import SingleTableHeader from './subcomponents/SingleTableHeader';


function Table({columns, data, setData}: {columns: CustomColumn[], data: RowData[], setData: React.Dispatch<React.SetStateAction<RowData[]>>}) {


  const {
  getTableProps,
  getTableBodyProps,
  } = useTable({ columns, data });

  function renderCell(type:string, width:number, value:string, accessor: string, rowIndex: number) {
    
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
          accessor={accessor}
          rowIndex={rowIndex}
          data={data}
          setData={setData}
        />;

      case 'STATUS':
        return <StatusCell
          width={width}
          value={value as 'In-process' | 'Need to start' | 'Complete' | 'Blocked'}
          accessor={accessor}
          rowIndex={rowIndex}
          data={data}
          setData={setData}
          />;
      
      case 'DATE':
        return <DateCell
          width={width}
          value={value}
          accessor={accessor}
          rowIndex={rowIndex}
          data={data}
          setData={setData}
        />;
      
      case 'URL':
        return <URLCell
          width={width}
          value={value}
          accessor={accessor}
          rowIndex={rowIndex}
          data={data}
          setData={setData}
        />;
      
      case 'PRIORITY':
        return <PriorityCell
          width={width}
          value={value as 'Low' | 'Medium' | 'High'| 'undefined' }
          accessor={accessor}
          rowIndex={rowIndex}
          data={data}
          setData={setData}
        />;
      
      case 'CURRENCY':
        return <CurrencyCell
          width={width}
          value={value}
          accessor={accessor}
          rowIndex={rowIndex}
          data={data}
          setData={setData}
        />;


      default:
        return <TextCell
          width={width}
          value={value}
          accessor={accessor}
          rowIndex={rowIndex}
          data={data}
          setData={setData}
        />;
    }
  }


  return (
    <div className='w-full h-full overflow-auto bg-[#f6f6f6] flex'>
      <table {...getTableProps()} className='border-separate border-spacing-[1px] bg-transparent'>
        <thead>

          <TableCustomHeader />

          <tr className='gap-[1px]'>
          {
            columns.map((column: CustomColumn, index:number) => (
              <th 
                key={index}
                className={'h-[32px]'}
                style={{ 
                  width:`${column.width}px`, 
                  backgroundColor: column.backgroundColour || '#EEEEEE', 
                  color: column.textColour || '#757575', 
                }}
              >
                <SingleTableHeader
                  columnIcon={column.columnIcon}
                  Header={column.Header}
                  accessor={column.accessor}
                />
              </th>
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
                      // onKeyDown={(e)=>{console.log(e.key, rowIndex, row[column.accessor])}}
                    >
                    {
                      renderCell(
                        column.type,
                        column.width,
                        row[column.accessor] as string,
                        column.accessor,
                        rowIndex
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