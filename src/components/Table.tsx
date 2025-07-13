import { useTable} from 'react-table';

import type { CustomColumn } from '../types/column';
import type { RowData } from '../types/row';  
import type { columnHeader } from '../types/columnHeader';

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



function Table({setColumns, columns, data, setData, selectedCell, setSelectedCell, columnHeader, setColumnHeader}: {setColumns: React.Dispatch<React.SetStateAction<CustomColumn[]>>, columns: CustomColumn[], data: RowData[], setData: React.Dispatch<React.SetStateAction<RowData[]>>, selectedCell: {accessor: string, rowIndex: number}, setSelectedCell: React.Dispatch<React.SetStateAction<{accessor: string, rowIndex: number}>>, columnHeader: columnHeader[], setColumnHeader: React.Dispatch<React.SetStateAction<columnHeader[]>>}) {

  const {
  getTableProps,
  getTableBodyProps,
  } = useTable({ columns, data });

  function renderCell(type:string, width:number, value:string, accessor: string, rowIndex: number, selectedCell: {accessor: string, rowIndex: number}, setSelectedCell: React.Dispatch<React.SetStateAction<{accessor: string, rowIndex: number}>> ) {
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
          selectedCell={selectedCell}
          setSelectedCell={setSelectedCell}
        />;

      case 'STATUS':
        return <StatusCell
          width={width}
          value={value as 'In-process' | 'Need to start' | 'Complete' | 'Blocked'}
          accessor={accessor}
          rowIndex={rowIndex}
          data={data}
          setData={setData}
          selectedCell={selectedCell}
          setSelectedCell={setSelectedCell}
          />;
      
      case 'DATE':
        return <DateCell
          width={width}
          value={value}
          accessor={accessor}
          rowIndex={rowIndex}
          data={data}
          setData={setData}
          selectedCell={selectedCell}
          setSelectedCell={setSelectedCell}
        />;
      
      case 'URL':
        return <URLCell
          width={width}
          value={value}
          accessor={accessor}
          rowIndex={rowIndex}
          data={data}
          setData={setData}
          selectedCell={selectedCell}
          setSelectedCell={setSelectedCell}
        />;
      
      case 'PRIORITY':
        return <PriorityCell
          width={width}
          value={value as 'Low' | 'Medium' | 'High'| 'undefined' }
          accessor={accessor}
          rowIndex={rowIndex}
          data={data}
          setData={setData}
          selectedCell={selectedCell}
          setSelectedCell={setSelectedCell}
        />;
      
      case 'CURRENCY':
        return <CurrencyCell
          width={width}
          value={value}
          accessor={accessor}
          rowIndex={rowIndex}
          data={data}
          setData={setData}
          selectedCell={selectedCell}
          setSelectedCell={setSelectedCell}
        />;

      case 'ADD':
        return (
          <div className='w-[124px] h-[32px] bg-white border-dashed border-x-[1px] border-[#CBCBCB]' />
        )
      default:
        return <TextCell
          width={width}
          value={value}
          accessor={accessor}
          rowIndex={rowIndex}
          data={data}
          setData={setData}
          selectedCell={selectedCell}
          setSelectedCell={setSelectedCell}
        />;
    }
  }


  return (
    <div className='w-full h-full overflow-auto bg-[#f6f6f6] flex'>
      <table {...getTableProps()} className='border-separate border-spacing-[1px] bg-transparent'>
        <thead>

          <TableCustomHeader columnHeader={columnHeader} columns={columns} setColumnHeader={setColumnHeader} setColumns={setColumns}/>

          <tr className='gap-[1px]'>
          {
            columns.map((column: CustomColumn, index: number) => (
              !column.visibility 
                ? null 
                : (
                  <th 
                    key={index}
                    className={'h-[32px]'}
                  >
                    <SingleTableHeader
                      column={column}
                      columns={columns}
                      setColumns={setColumns}
                    />
                  </th>
                )
            ))
          }
          </tr>
        </thead>

        <tbody {...getTableBodyProps()} className='gap-[1px]'>
          {
            data.map((row: RowData, rowIndex: number) => (
              <tr 
                key={rowIndex}
              >
                {
                  columns.map((column: CustomColumn, columnIndex: number) => (
                    !column.visibility 
                      ? null 
                      : (
                        <td
                          key={columnIndex}
                        >
                        {
                          renderCell(
                            column.type,
                            column.width,
                            row[column.accessor] as string,
                            column.accessor,
                            rowIndex,
                            selectedCell,
                            setSelectedCell
                          )
                        }
                        </td>
                      )
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