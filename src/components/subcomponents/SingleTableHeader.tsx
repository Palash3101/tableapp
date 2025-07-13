import { useState } from 'react'
import Dropdown from '../../assets/HeaderIcons/Dropdown.svg'
import type { CustomColumn } from '../../types/column';

function SingleTableHeader({column}: {column: CustomColumn}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [columnName, setColumnName] = useState(column.Header);
  const [textColor, setTextColor] = useState(column.textColour || '#000000');
  const [backgroundColor, setBackgroundColor] = useState(column.backgroundColour || '#ffffff');


  const handleApplyChanges = () => {
    setIsDropdownOpen(false);
    column.Header = columnName;
    column.textColour = textColor;
    column.backgroundColour = backgroundColor;
    
  };

  return (
    <div
      className='h-full w-full'
      style={{ 
        width: `${column.width}px`, 
        backgroundColor: column.backgroundColour || '#EEEEEE', 
        color: column.textColour || '#757575', 
        
        borderRight: `${column.type == 'ADD'?'dashed 1px #CBCBCB' : 'none'}`,
        borderLeft: `${column.type == 'ADD'?'dashed 1px #CBCBCB' : 'none'}`
      }}
    >
      <button 
        onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
        className='flex w-full h-full pr-[4px] pl-[8px] items-center'
      >

        <div className='flex flex-1 gap-[4px] font-semibold'>
          {
            column.columnIcon&& 
            <img 
              src={`/headerIcons/${column.columnIcon}`}
              alt={column.Header}
              className='size-[16px] '
            />
          }
          <span className='text-xs'>
            {column.Header}
          </span>
        </div>
        
        {
          column.columnIcon && 
          <div>
            <img 
              src={Dropdown}
              alt='Dropdown'
              className='size-[20px]'
            />
          </div>
        }

      </button>
 {
        isDropdownOpen && (
          <div className='absolute bg-white shadow-lg rounded-md mt-[4px] p-[12px] min-w-[280px] z-50 border'>
            <div className='space-y-4'>
              
              {/* Column Name Input */}
              <div>
                <label className='text-sm font-medium text-gray-700 mb-2 block'>
                  Column Name
                </label>
                <input
                  type='text'
                  value={columnName}
                  onChange={(e) => setColumnName(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  placeholder='Enter column name'
                />
              </div>

              {/* Text Color Selector */}
              <div>
                <label className='text-sm font-medium text-gray-700 mb-2 block'>
                  Text Color
                </label>
                <input
                  type='color'
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className='w-full h-8 rounded border border-gray-300 cursor-pointer'
                />
              </div>

              {/* Background Color Selector */}
              <div>
                <label className='text-sm font-medium text-gray-700 mb-2 block'>
                  Background Color
                </label>
                <input
                  type='color'
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className='w-full h-8 rounded border border-gray-300 cursor-pointer'
                />
              </div>

              {/* Preview */}
              <div>
                <label className='text-sm font-medium text-gray-700 mb-2 block'>
                  Preview
                </label>
                <div 
                  className='px-3 py-2 rounded border text-xs font-semibold'
                  style={{ backgroundColor, color: textColor }}
                >
                  {columnName}
                </div>
              </div>

              {/* Action Buttons */}
              <div className='flex gap-2 pt-2'>
                <button
                  onClick={handleApplyChanges}
                  className='flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium'
                >
                  Apply
                </button>
                <button
                  onClick={() => setIsDropdownOpen(false)}
                  className='flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded text-sm font-medium'
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default SingleTableHeader