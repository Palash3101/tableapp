import { useState, useRef, useEffect } from "react";
import type { RowData } from "../../types/row";

const colours = {
  //type: [bg, text]
  'In-process': ['#FFF3D6','#85640B'],
  'Need to start': ['#E2E8F0','#475569'],
  'Complete': ['#D3F2E3','#0A6E3D'],
  'Blocked': ['#FFE1DE','#C22219']
}

interface CellProps {
  width: number;
  value: 'In-process' | 'Need to start' | 'Complete' | 'Blocked';
  accessor: string;
  rowIndex: number;
  data: RowData[];
  setData: React.Dispatch<React.SetStateAction<RowData[]>>;
  selectedCell: {accessor: string, rowIndex: number};
  setSelectedCell: React.Dispatch<React.SetStateAction<{accessor: string, rowIndex: number}>>;
}


function StatusCell({width, value, accessor, rowIndex, data, setData, selectedCell, setSelectedCell}: CellProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [bgColor, textColor] = colours[value] || ['#FFFFFF', '#999999'];
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (selectedCell.accessor === accessor && selectedCell.rowIndex === rowIndex) {
      buttonRef.current?.focus();
      // Open dropdown when cell is selected
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  }, [selectedCell, accessor, rowIndex]);

  function handleStatusChange(newStatus: 'In-process' | 'Need to start' | 'Complete' | 'Blocked' | '') {
    data[rowIndex][accessor] = newStatus;
    setData([...data]);
    setIsDropdownOpen(false);
  }


  return (
    <div className="relative">
      <button 
        ref={buttonRef}
        className={`h-[32px] table-column text-center overflow-hidden truncate gap-[8px] transition-transform duration-200 ease-in-out hover:bg-[#F5F5F5] ${selectedCell.accessor === accessor && selectedCell.rowIndex === rowIndex ? 'thiscell' : ''}`}
        style={{ width: `${width}px` }}
        onDoubleClick={() => {setIsDropdownOpen(!isDropdownOpen);}}
        onFocus={() => setSelectedCell({accessor, rowIndex})}
      >
        <span 
          className="rounded-[100px] py-[4px] px-[8px] bg-[#FFF3D6] font-[500] text-xs transition-all duration-200 ease-in-out hover:scale-105"
          style={{ 
            backgroundColor: bgColor,
            color: textColor 
          }}
        >
          {value}  
        </span>
      </button>

      {isDropdownOpen && (
        <div className="absolute bg-white mt-[2px] z-10 flex flex-col gap-[4px] border border-[#EEEEEE] rounded-[4px] shadow-lg py-[4px]">
          {Object.keys(colours).map((status) => (
            <button 
              key={status}
              className="h-[32px] z-50 bg-white flex items-center justify-center cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#F5F5F5]"
              style={{ width: `${width}px` }}
              onClick={() => handleStatusChange(status as 'In-process' | 'Need to start' | 'Complete' | 'Blocked')}
            >
              <span 
                className="rounded-[100px] py-[4px] px-[8px] font-[500] text-xs transition-transform duration-200 ease-in-out hover:scale-105"
                style={{ 
                  backgroundColor: colours[status as 'In-process' | 'Need to start' | 'Complete' | 'Blocked'][0],
                  color: colours[status as 'In-process' | 'Need to start' | 'Complete' | 'Blocked'][1], 
                }}
              >
                {status}  
              </span>
            </button>
          ))}

          <button
            className="h-[32px] text-xs text-[#757575] hover:text-[#121212] hover:bg-[#F5F5F5] flex items-center justify-center transition-colors duration-200 ease-in-out"
            style={{ width: `${width}px` }}
            onClick={() => handleStatusChange('')}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  )
}

export default StatusCell

