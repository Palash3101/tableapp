import { useState } from 'react';
import type { RowData } from "../../types/row"

interface CellProps {
  width: number;
  value: string;
  accessor: string;
  rowIndex: number;
  data: RowData[];
  setData: React.Dispatch<React.SetStateAction<RowData[]>>;
}


function CurrencyCell({ width, value, accessor, rowIndex, data, setData}: CellProps) {
  const sanitizedValue = value || '';
  const [isFocused, setIsFocused] = useState(false);


  function handleCellValueChange(accessor: string, rowIndex: number, newValue: string) {
    data[rowIndex][accessor] = newValue; // Remove non-numeric characters
    setData([...data]); // Update the state with the new data
  } 

  return (
    <div
      className={`bg-white h-[32px] flex items-center px-[8px] gap-[4px] border
        ${isFocused ? 'border-[#6C8B70] shadow-[0_0_12px_0_#0A6E3D38,0_0_4px_-2px_#0A6E3D99]' : 'border-transparent'}`}
      style={{ width: `${width}px` }}
    >
      <input
        className="flex-1 text-right text-black h-[16px] text-xs font-medium outline-none"
        style={{ width: `97px` }}
        defaultValue={value}
        type="text"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e)=> handleCellValueChange(accessor, rowIndex, e.target.value)}
      />
      {sanitizedValue.length > 0 && (
        <span className="text-[#AFAFAF] text-xs">&#8377;</span>
      )}
    </div>
  );
}

export default CurrencyCell;
