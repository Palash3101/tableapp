import { Search, Bell } from 'lucide-react';
import PanelShape from '../assets/Shape.svg'

function TopBar() {
  return (
    <div className="flex py-[8px] px-[16px] h-[56px] border-b-[1px] border-[#EEEEEE] justify-between w-full">
      {/* Left Section */}
      <div className="flex items-center gap-[8px]">
        
        <button>
          <img
            src={`${PanelShape}`}
          />
        </button>
        
        <div className="font-semibold text-[17px]">
          <span className="text-[#afafaf]">
            Workspace &gt; Folder 2 &gt; 
          </span>
            Spreadsheet 3
        </div>
        <button className="flex justify-center items-center h-full">
          ...
        </button>
      </div>


      {/* Right Section */}
      <div className="flex  ">
        <div className="flex items-center flex-1 max-w-md relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#afafaf] w-5 h-5" />
          <input
            type="text"
            placeholder="Search within sheet"
            className="w-auto pl-10 py-2 bg-[#f6f6f6] rounded-lg text-[#] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
      </div>


      <div className="flex items-center space-x-4 ml-6">
    

        <div className="relative">
          <Bell className="w-6 h-6 text-black hover:text-black cursor-pointer" />
          <div className="absolute -top-2 -right-2 bg-[#4b6a4f] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            2
          </div>
        </div>


        <div className="flex items-center space-x-3">
          <img
            alt="John Doe"
            className="w-10 h-10 rounded-full"
          />
          <div className="hidden sm:block w-[70px]">
            <p className="text-sm font-medium text-gray-900">John Doe</p>
            <p className="text-xs text-gray-500 overflow-hidden whitespace-nowrap text-ellipsis">john.doe@gmail.com</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default TopBar