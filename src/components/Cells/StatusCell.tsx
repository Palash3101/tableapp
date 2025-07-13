import type { RowData } from "../../types/row";
import { useState} from "react";

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

  function handleStatusChange(newStatus: 'In-process' | 'Need to start' | 'Complete' | 'Blocked' | '') {
    data[rowIndex][accessor] = newStatus;
    setData([...data]);
    setIsDropdownOpen(false);
  }


  return (
    <div className="relative">
      <button 
        className={`table-column text-center overflow-hidden truncate gap-[8px] ${selectedCell.accessor === accessor && selectedCell.rowIndex === rowIndex ? 'thiscell' : ''}`}
        style={{ width: `${width}px` }}
        onDoubleClick={() => {setIsDropdownOpen(!isDropdownOpen);}}
        onFocus={() => setSelectedCell({accessor, rowIndex})}
      >
        <span 
          className="rounded-[100px] py-[4px] px-[8px] bg-[#FFF3D6] font-[500] text-xs"
          style={{ 
            backgroundColor: bgColor,
            color: textColor 
          }}
        >
          {value}  
        </span>
      </button>


      {isDropdownOpen && (
        <div className="absolute bg-white mt-1 z-10 flex flex-col gap-[4px]">
          {Object.keys(colours).map((status) => (
            
            <button 
              key={status}
              className="z-50 bg-white flex items-center justify-center cursor-pointer"
              style={{ width: `${width}px` }}
              onClick={() => handleStatusChange(status as 'In-process' | 'Need to start' | 'Complete' | 'Blocked')}
            >
              
              <span 
                className="rounded-[100px] py-[4px] px-[8px] bg-[#FFF3D6] font-[500] text-xs"
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
            className="text-sm text-gray-500 hover:text-gray-700 underline"
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

