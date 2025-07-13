import { useRef, useEffect } from "react";
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


function CurrencyCell({ width, value, accessor, rowIndex, data, setData, selectedCell, setSelectedCell}: CellProps) {
  const sanitizedValue = value || '';
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
    <div
      className={`bg-white h-[32px] flex items-center px-[8px] gap-[4px]
      ${selectedCell.accessor === accessor && selectedCell.rowIndex === rowIndex ? 'thiscell' : ''}`}
      style={{ width: `${width}px` }}
    >
      <input
        ref={inputRef}
        className="flex-1 text-right text-black h-[16px] text-xs font-medium outline-none"
        style={{ width: `97px` }}
        value={value}
        type="text"
        onFocus={() => {setSelectedCell({accessor, rowIndex});}}
        onChange={(e)=> handleCellValueChange(accessor, rowIndex, e.target.value)}
      />
      {sanitizedValue.length > 0 && (
        <span className="text-[#AFAFAF] text-xs">&#8377;</span>
      )}
    </div>
  );
}

export default CurrencyCell;
