import { useState, useRef, useEffect } from "react";
import type { RowData } from "../../types/row";

const colours = {
  //type: text
  'Low':'#1A8CFF',
  'Medium':'#C29210',
  'High':'#EF4D44',
  'undefined': '#FFFFFF'
}

interface CellProps {
  width: number;
  value: 'Low' | 'Medium' | 'High' | 'undefined'
  accessor: string;
  rowIndex: number;
  data: RowData[];
  setData: React.Dispatch<React.SetStateAction<RowData[]>>;
  selectedCell: {accessor: string, rowIndex: number};
  setSelectedCell: React.Dispatch<React.SetStateAction<{accessor: string, rowIndex: number}>>;
}

function PriorityCell({width, value, setData, accessor, rowIndex, data, selectedCell, setSelectedCell}: CellProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const textColor = colours[value] || '#FFFFFF';
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (selectedCell.accessor === accessor && selectedCell.rowIndex === rowIndex) {
      buttonRef.current?.focus();
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  }, [selectedCell, accessor, rowIndex]);

  function handlePriorityChange(newPriority: 'Low' | 'Medium' | 'High' | 'undefined') {
    data[rowIndex][accessor] = newPriority;
    setData([...data]);
    setIsDropdownOpen(false);
  }

  return (
    <div className="relative">
      <button 
        ref={buttonRef}
        className={`h-[32px] table-column text-center overflow-hidden truncate gap-[8px] ${selectedCell.accessor === accessor && selectedCell.rowIndex === rowIndex ? 'thiscell' : ''}`}
        style={{ width: `${width}px` }}
        onDoubleClick={() => setIsDropdownOpen(!isDropdownOpen)}
        onFocus={() => setSelectedCell({accessor, rowIndex})}
      >
        <span 
          className="font-[500] text-xs py-[4px] px-[8px] transition-all duration-200 ease-in-out"
          style={{ 
            color: textColor 
          }}
        >
          {value === 'undefined' ? '' : value}  
        </span>
      </button>

      {isDropdownOpen && (
        <div className="absolute bg-white mt-[2px] z-10 flex flex-col gap-[4px] border border-[#EEEEEE] rounded-[4px] shadow-lg py-[4px]">
          {['Low', 'Medium', 'High'].map((priority) => (
            <button 
              key={priority}
              className="h-[32px] z-50 bg-white flex items-center justify-center cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#F5F5F5]"
              style={{ width: `${width}px` }}
              onClick={() => handlePriorityChange(priority as 'Low' | 'Medium' | 'High')}
            >
              <span 
                className="font-[500] text-xs py-[4px] px-[8px] transition-transform duration-200 ease-in-out hover:scale-105"
                style={{ 
                  color: colours[priority as 'Low' | 'Medium' | 'High'] 
                }}
              >
                {priority}
              </span>
            </button>
          ))}

          <button
            className="h-[32px] text-xs text-[#757575] hover:text-[#121212] hover:bg-[#F5F5F5] flex items-center justify-center transition-colors duration-200 ease-in-out"
            style={{ width: `${width}px` }}
            onClick={() => handlePriorityChange('undefined')}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  )
}

export default PriorityCell;

