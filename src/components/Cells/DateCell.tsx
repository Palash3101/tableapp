import type { RowData } from "../../types/row"

interface CellProps {
  width: number;
  value: string;
  accessor: string;
  rowIndex: number;
  data: RowData[];
  setData: React.Dispatch<React.SetStateAction<RowData[]>>;
}


function DateCell({width, value, accessor, rowIndex, data, setData}: CellProps) {

  function handleCellValueChange(accessor: string, rowIndex: number, newValue: string) {
    data[rowIndex][accessor] = newValue;
    setData([...data]); 
  } 

  return (
    <input 
      className='table-column overflow-hidden truncate text-right'
      style={{ width:`${width}px`}}
      defaultValue={value as string}
      type="text"
      onChange={(e) => handleCellValueChange(accessor, rowIndex, e.target.value)}
    />
  )
}

export default DateCell