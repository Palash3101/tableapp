import { useRef, useEffect } from "react";
import type { RowData } from "../../types/row";

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

function URLCell({width, value, accessor, rowIndex, data, setData, selectedCell, setSelectedCell}: CellProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (selectedCell.accessor === accessor && selectedCell.rowIndex === rowIndex) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [selectedCell, accessor, rowIndex]);

  function handleCellValueChange(accessor: string, rowIndex: number, newValue: string) {
    data[rowIndex][accessor] = newValue;
    setData([...data]); 
  } 

  return (
    <div className="flex items-center h-[32px] overflow-hidden">
      <input
        ref={inputRef}
        className={`table-column overflow-hidden truncate underline font-medium text-xs ${selectedCell.accessor === accessor && selectedCell.rowIndex === rowIndex ? 'thiscell' : ''}`}
        style={{ width: `${width}px` }}
        value={value}
        type="text"
        onChange={(e) => handleCellValueChange(accessor, rowIndex, e.target.value)}
        onFocus={() => setSelectedCell({accessor, rowIndex})}
      />
    </div>
  );
}

export default URLCell;