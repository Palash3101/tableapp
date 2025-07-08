import Link from '../../assets/HeaderIcons/Link.svg';
import ArrowSync from '../../assets/HeaderIcons/ArrowSync.svg';
import NewAction from '../../assets/NewAction.svg';
import More from '../../assets/More.svg';
import Add from '../../assets/HeaderIcons/Add.svg';


function TableCustomHeader() {
  return (
    <tr>
      <th colSpan={1} className="bg-white"></th>
      
      {/* Grouped Columns */}
      <th colSpan={4} >
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
      </th>
      
      <th colSpan={1} className="bg-white"></th>

      <th colSpan={1} className="bg-[#D2E0D4] text-[#505450]">
        <FunctionBlock text={"ABC"}/>
      </th>

      <th colSpan={2} className="bg-[#DCCFFC] text-[#463E59]">
        <FunctionBlock text={"Answer a question"} />
      </th>

      <th colSpan={1} className="bg-[#FAC2AF] text-[#695149]">
        <FunctionBlock text={"Extract"}/>
      </th>
    </tr>
  )
}


function FunctionBlock({text}:{text:string}) {
  return (
    <div className='flex justify-center py-[2px] px-[4px] w-full h-full'>
      <div className='flex gap-[4px] '>
        <img src={NewAction} alt="Link Icon" className='size-[16px]' />

        <p className='text-sm font-medium '>
          {text}
        </p>

        <img src= {More} alt='Icon' className='size-[20px]'/>
      </div>
    </div>
  )
}

export default TableCustomHeader