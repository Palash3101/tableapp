import type { RowData } from "../../types/row"

interface CellProps {
  width: number;
  value: string;
  accessor: string;
  rowIndex: number;
  data: RowData[];
  setData: React.Dispatch<React.SetStateAction<RowData[]>>;
  selectedCell: {accessor: string, rowIndex: number};
  setSelectedCell: React.Dispatch<React.SetStateAction<{accessor: string, rowIndex: number}>>;
}


function DateCell({width, value, accessor, rowIndex, data, setData, selectedCell, setSelectedCell}: CellProps) {

  function handleCellValueChange(accessor: string, rowIndex: number, newValue: string) {
    data[rowIndex][accessor] = newValue;
    setData([...data]); 
  } 

  return (
    <input 
      className={`table-column overflow-hidden truncate text-right ${selectedCell.accessor == accessor && selectedCell.rowIndex == rowIndex ? 'thiscell' : ''}`}
      style={{ width:`${width}px`}}
      value={value as string}
      type="text"
      onChange={(e) => handleCellValueChange(accessor, rowIndex, e.target.value)}
      onFocus={() => (setSelectedCell({accessor, rowIndex}))}      
    />
  )
}

export default DateCell