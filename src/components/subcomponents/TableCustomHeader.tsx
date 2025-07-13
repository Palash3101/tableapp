import Link from '../../assets/HeaderIcons/Link.svg';
import ArrowSync from '../../assets/HeaderIcons/ArrowSync.svg';
import NewAction from '../../assets/NewAction.svg';
import More from '../../assets/More.svg';
import Add from '../../assets/HeaderIcons/Add.svg';

import type { columnHeader } from '../../types/columnHeader';

function TableCustomHeader({ columnHeader }: { columnHeader: columnHeader[] }) {
  return (
    <tr>
      {
        columnHeader.map((header, index) => (
          <th 
            key={index}
            colSpan={header.colspan} 
            style={{ 
              backgroundColor: header.backgroundColour || '#FFFFFF', 
              color: header.textColour || '#757575' 
            }}
          >
          {
            header.type === "Custom"
            ? <CustomHeader1 />
            : header.type === "NewAction"
            ? <FunctionBlock text={header.text || ''} />
            : header.type === "Add"
            ? (
              <button 
                className='flex justify-center items-center h-[32px] w-[124px] border-x-[1px] border-dashed border-[#CBCBCB]'
                onClick={() => console.log('Add action clicked')}
              >
                <img src={Add} alt="Add Icon" className='size-[16px]' />
              </button>
            )
            : (
              <div>
                {header.text}
              </div>
            )
          }
          </th>
        ))
      }
    </tr>
  );
}

function FunctionBlock({ text }: { text: string }) {
  return (
    <div className='flex justify-center py-[2px] px-[4px] w-full h-full'>
      <div className='flex gap-[4px] '>
        <img src={NewAction} alt="Link Icon" className='size-[16px]' />

        <p className='text-sm font-medium '>
          {text}
        </p>

        <img src={More} alt='Icon' className='size-[20px]' />
      </div>
    </div>
  );
}

function CustomHeader1() {
  return (
    <div className="bg-[#E2E2E2] w-full h-full flex px-[8px] py-[4px] gap-[8px]">    
      <div className="p-[4px] gap-[4px] rounded-[4px] bg-[#EEEEEE] flex">
        <div>
          <img src={Link} alt="Link Icon" className='w-[16px] h-[16px]' />
        </div>
        <div className='text-xs font-normal text-[#545454]' >
          Q3 Financial Overview
        </div>
      </div>
      <div className='flex flex-col justify-center'>  
        <img src={ArrowSync} alt="Sync Icon" className='w-[16px] h-[16px] items-center' />
      </div>
    </div>
  );
}

export default TableCustomHeader;