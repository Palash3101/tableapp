//Icon imports
import DoubleChevron from "../assets/DoubleChevron.svg";
import Eye from "../assets/Eye.svg";
import UpDownArrow from "../assets/UpDownArrow.svg";
import Filter from "../assets/Filter.svg";
import CellView from "../assets/CellView.svg";
import Import from "../assets/Import.svg";
import Export from "../assets/Export.svg";
import Share from "../assets/Share.svg";
import NewAction from "../assets/NewAction.svg";

import type { RowData } from "../types/row";

function Row({data}: {data: RowData[]}) {
  return (
    <div className="flex w-full h-[48px] gap-[8px] py-[6px] px-[8px] border-b-[1px] border-[#EEEEEE] items-center" >
      
      {/* Tool Bar */}
      <button className="w-[91px] flex p-[8px] rounded-[4px] gap-[4px] justify-center items-center">
        <span className="w-[55px] text-sm font-[400] text-[#121212]">
          Tool Bar
        </span>
        <div className="w-[16px] h-[16px] flex flex-col justify-center my-auto">
          <img
            className="w-[8.6px] h-[9.8px] mx-auto"
            alt="Double Chevron Icon"
            src={DoubleChevron}
          />
        </div>
      </button>

      <div className="w-[1px] h-[24px] bg-[#EEEEEE]" />

      {/* Table Controls Block */}
      <div className="flex flex-1 h-[36px] gap-[4px] text-sm font-[400]">
        <Button 
          text="Hide fields"  
          icon={Eye}
        />

        <Button 
          text="Sort"  
          icon={UpDownArrow}
        />

        <Button 
          text="Filter"  
          icon={Filter}
        />

        <Button 
          text="Cell view"  
          icon={CellView}
        />
      </div>

      {/* Right section */}
      <div className="flex w-[437px] items-center gap-[8px] ">
        {/* Controls */}
        <div className="flex gap-[8px] items-center font-[400] text-sm text-[#545454]">
          <Button 
            text="Import"  
            icon={Import}
            border = {true}
          />

          <Button 
            text="Export"  
            icon={Export}
            border = {true}
          />

          <Button 
            text="Share"  
            icon={Share}
            border = {true}
            data={data}
          />
        </div>

        
        <button className="flex h-auto items-center text-white gap-[4px] bg-[#4b6a4f] rounded-[6px] px-[24px] py-[8px] h-full">
          <div className="size-[20px] flex flex-col justify-center">
            <img
              className="transform scale-[0.9375] mx-auto my-auto"
              alt="Icon"
              src={NewAction}
            />
          </div>
          

          <span className="font-[500] text-[14px] leading-[20px] tracking-normal h-[20px]">
            New Action
          </span>
        </button>
      </div>
    </div>
  )
}

function Button({text, icon, border, data}: {text: string, icon:string, border?: boolean, data?: RowData[]}) {
  return (
    <button 
      className={`flex w-auto h-auto py-[8px] pl-[8px] pr-[12px] gap-[4px] items-center rounded-[6px]  ${border ? 'border-[1px] border-[#EEEEEE]' : ''}`}
      onClick={() => {console.log(data)}}
    >

      <div className="size-[20px] flex flex-col justify-center">
        <img
          className="transform scale-[0.9375] mx-auto my-auto"
          alt="Icon"
          src={icon}
        />
      </div>
      <span className="">
        {text}
      </span>
    </button>
  )
}

export default Row