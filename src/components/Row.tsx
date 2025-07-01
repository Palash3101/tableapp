import {ArrowDownToLine, Share2, ChevronsRight, EyeOff, ArrowDownUp, ListFilter} from "lucide-react";

function Row() {
  return (
    <div className="flex w-full h-[48px] py-[6px] px-[8px] border-b-[1px] border-[#EEEEEE] justify-between" >
      {/* Left Section */}
      <div className="flex items-center">
        <button className="flex text-black items-center gap-[3px] border-r-[1px] border-r-[#EEEEEE] px-[11px] my-[6px] hover:bg-[#f6f6f6] h-full">
          Tool Bar
          <ChevronsRight className="w-5 h-5 translate-y-[2px] text-black"/>
        </button>


        <button className="flex text-black items-center gap-[3px] border-r-[#EEEEEE] px-[11px] my-[6px] hover:bg-[#f6f6f6] h-full">
          <EyeOff className="w-5 h-5 translate-y-[2px] text-black"/>
          Hide Fields
        </button>


        <button className="flex text-black items-center gap-[3px] border-r-[#EEEEEE] px-[11px] my-[6px] hover:bg-[#f6f6f6] h-full">
          <ArrowDownUp className="w-5 h-5 translate-y-[2px] text-black"/>
          Sort
        </button>


        <button className="flex text-black items-center gap-[3px] border-r-[#EEEEEE] px-[11px] my-[6px] hover:bg-[#f6f6f6] h-full">
          <ListFilter className="w-5 h-5 translate-y-[2px] text-black"/>
          Filter
        </button>

        <button className="flex text-black items-center gap-[3px] border-r-[#EEEEEE] px-[11px] my-[6px] hover:bg-[#f6f6f6] h-full">
          <ChevronsRight className="w-5 h-5 translate-y-[2px] text-black"/>
          Cell View
        </button>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-[8px] text-[#545454]">
        <button className="flex items-center gap-[4px] border-[1px] border-[#afafaf] rounded-[5px] px-[11px] my-[6px] hover:bg-[#f6f6f6] h-full">
          <ArrowDownToLine className="w-5 h-5 "/>
          <p>Export</p>
        </button>

        <button className="flex items-center gap-[4px]  border-[1px] border-[#afafaf] rounded-[5px] px-[11px] my-[6px] hover:bg-[#f6f6f6] h-full">
          <ArrowDownToLine className="w-5 h-5  rotate-180"/>
          <p>Import</p>
        </button>

        <button className="flex items-center gap-[4px]  border-[1px] border-[#afafaf] rounded-[5px] px-[11px] my-[6px] hover:bg-[#f6f6f6] h-full">
          <Share2 className="w-5 h-5 "/>
          <p>Share</p>
        </button>
        
        <button className="flex items-center text-white gap-[4px] bg-[#4b6a4f] rounded-[5px] px-[11px] my-[6px] h-full">
          <Share2 className="w-5 h-5 "/>
          <p>New Action</p>
        </button>
      </div>
    </div>
  )
}

export default Row