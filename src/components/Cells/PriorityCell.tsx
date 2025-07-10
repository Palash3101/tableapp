import { useState } from "react";
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

  function handlePriorityChange(newPriority: 'Low' | 'Medium' | 'High' | 'undefined') {
    data[rowIndex][accessor] = newPriority;
    setData([...data]);
    setIsDropdownOpen(false);
  }

  return (
    <div className="relative">
      <button 
        className={`text-center overflow-hidden truncate gap-[8px] table-column ${selectedCell.accessor === accessor && selectedCell.rowIndex === rowIndex ? 'thiscell' : ''}`}
        style={{ width: `${width}px` }}
        onDoubleClick={() => setIsDropdownOpen(!isDropdownOpen)}
        onFocus={() => setSelectedCell({accessor, rowIndex})}
      >
        <span 
          className="font-semibold text-xs"
          style={{ 
            backgroundColor: '#FFFFFF',
            color: textColor 
          }}
        >
          {value || '&nbsp'}  
        </span>
      </button>

      {isDropdownOpen && (
        <div className="absolute bg-white mt-1 z-10 flex flex-col gap-[4px]">
          {['Low', 'Medium', 'High'].map((priority) => (
            <button 
              key={priority}
              className="z-50 bg-white flex items-center justify-center cursor-pointer"
              style={{ width: `${width}px` }}
              onClick={() => handlePriorityChange(priority as 'Low' | 'Medium' | 'High')}
            >
              <span 
                className="font-semibold text-xs"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  color: colours[priority as 'Low' | 'Medium' | 'High'] 
                }}
              >
                {priority}  
              </span>
            </button>
          ))}

          <button
            className="text-sm text-gray-500 hover:text-gray-700 underline"
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

