import { useState } from 'react';
import { useTable} from 'react-table';

import extendedData from '../helpers/extend_rows';

import type { CustomColumn } from '../types/column';
import type { RowData } from '../types/row';
import tableData from '../data/AllOrders';

import Link from '../assets/HeaderIcons/Link.svg';
import ArrowSync from '../assets/HeaderIcons/ArrowSync.svg';
import NewAction from '../assets/NewAction.svg';
import More from '../assets/More.svg';

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
            
            {/* Grouped Columns */}
            <th colSpan={4} >
              <div className="bg-[#E2E2E2] w-full h-full flex px-[8px] py-[4px] gap-[8px]">
                
                <div className="p-[4px] gap-[4px] rounded-[4px] bg-[#EEEEEE] flex">
                  <div>
                    <img src={Link} alt="Link Icon" className='w-[16px] h-[16px]' />
                  </div>
                  <div className='text-xs font-normal text-[#545454]' >
                    Q3 Financial Overview
                  </div>
                </div>
                <div className='flex flex-col justify-center'>  
                  <img src={ArrowSync} alt="Sync Icon" className='w-[16px] h-[16px] items-center' />
                </div>
              </div>
            </th>
            
            <th colSpan={1} className="bg-white"></th>

            <th colSpan={1} className="bg-[#D2E0D4] text-[#505450]">
              <FunctionBlock text={"ABC"}/>
            </th>

            <th colSpan={2} className="bg-[#DCCFFC] text-[#463E59]">
              <FunctionBlock text={"Answer a question"} />
            </th>

            <th colSpan={1} className="bg-[#FAC2AF] text-[#695149]">
              <FunctionBlock text={"Extract"}/>
            </th>
            <th colSpan={1}> Add </th>
          </tr>
          <tr className='gap-[1px]'>
          {
            columns.map((column: CustomColumn, index:number) => (
              <th 
                key={index}
                className={'text-[16px] pr-[4px] pl-[8px] text-[#757575] font-[600] h-[32px]'}
                style={{ width:`${column.width}px`, backgroundColor: `${column.backgroundColour || '#EEEEEE'}`, color: `${column.textColour || '#757575'}` }}
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


function FunctionBlock({text}:{text:string}) {
  return (
    <div className='flex justify-center py-[2px] px-[4px] w-full h-full'>
      <div className='flex gap-[4px] '>
        <img src={NewAction} alt="Link Icon" className='size-[16px]' />

        <p className='text-sm font-medium '>
          {text}
        </p>

        <img src= {More} alt='Icon' className='size-[20px]'/>
      </div>
    </div>
  )
}

export default Table