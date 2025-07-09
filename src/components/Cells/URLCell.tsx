import type { RowData } from "../../types/row"

interface CellProps {
  width: number;
  value: string;
  accessor: string;
  rowIndex: number;
  data: RowData[];
  setData: React.Dispatch<React.SetStateAction<RowData[]>>;
}


function URLCell({width, value, accessor, rowIndex,data, setData}: CellProps) {

  function handleCellValueChange(accessor: string, rowIndex: number, newValue: string) {
    data[rowIndex][accessor] = newValue;
    setData([...data]); 
  } 

  return (
    <input 
      className='table-column overflow-hidden truncate'
      style={{ 
        width:`${width}px`,
        textDecoration: 'underline',
      }}
      defaultValue={value as string}
      onChange={(e)=>handleCellValueChange(accessor, rowIndex, e.target.value)}
      type="text"
    />
  )
}

export default URLCell