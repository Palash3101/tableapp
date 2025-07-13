import PanelShape from '../assets/Shape.svg'
import Chevron from '../assets/Chevron.svg'
import More from '../assets/More.svg'
import Search_2 from '../assets/Search_2.svg'
import Alert from '../assets/Alert.svg'

import ProfileImage from '../assets/images/Ellipse_1.png'

function handlePanelClick() {
  console.log('Panel clicked');
}

function handleNotificationsClick() {
  console.log('Notifications clicked');
}

function handleProfileClick() {
  console.log('Profile clicked');
}

function TopBar() {
  return (
    <div className="flex py-[8px] px-[16px] h-[56px] border-b-[1px] border-[#EEEEEE] justify-between w-full">
      {/* Left Section */}
      <div className="flex items-center gap-[16px]">
        
        <button 
          onClick={handlePanelClick}
          className='size-[24px]'
        >
          <img
            alt="Panel Icon"
            src={`${PanelShape}`}
          />
        </button>
        
        <div className="gap-[4px] flex items-center font-[500] text-sm text-[#AFAFAF] ">

          <span>
            Workspace
          </span>
          
          <img 
            src={Chevron}
            className="size-[12px] my-auto translate-y-[2px]"
          />

          <span>
            Folder 2
          </span>

          <img 
            src={Chevron}
            className="size-[12px] my-auto translate-y-[2px]"
          />

          <div className="flex gap-[8px]">

            <span className='text-[#121212] font-[500] text-sm'>
              Spreadsheet 3
            </span>

            <img
              className="size-[20px] my-auto translate-y-[1px]"
              src={More}
              alt='More Options'
            />
          </div>

        </div>
      </div>


      {/* Right Section */}
      <div className="flex gap-[4px]">

        <div className="rounded-[6px] p-[12px] gap-[8px] flex items-center bg-[#F6F6F6]">

          <img 
            src={Search_2}
            alt='Search Icon'
          />

          <input
            type="text"
            placeholder="Search within sheet"
            className="font-[400] text-xs w-[117px] outline-none"
            //Can add different search algorithms here
            onKeyDown={(e) => {if (e.key === 'Enter') console.log('Search:', e.currentTarget.value)}}
          />
      </div>

      <button 
        className="relative cursor-pointer flex items-center justify-center p-[8px]"
        onClick={handleNotificationsClick}
      >
        <img  
          src={Alert}
          alt="Notification Icon"
          className="size-[24px] "
        />
        
        <div className="absolute size-[16px] rounded-[100px] border-[2px] border-[#FFFFFF] bg-[#4B6A4F] top-1 right-1">
          <span className='font-[500] text-[10px] line-height-[16px] text-[#FFFFFF] flex items-center justify-center h-full my-auto'>
            2
          </span>
        </div>
      </button>

      <button 
        className="flex py-[6px] pr-[12px] pl-[8px] gap-[8px] items-center"
        onClick={handleProfileClick}
      >

        <img
          src={ProfileImage}
          alt="John Doe"
          className="size-[28px] rounded-full"
        />

        <div className="flex flex-col justify-center w-[56px]">
          <p className="text-xs font-normal text-[#121212]">John Doe</p>
          <p className="text-[10px] line-height-[12px] text-[#757575] overflow-hidden whitespace-nowrap text-ellipsis">john.doe@gmail.com</p>
        </div>
      </button>

      </div>
    </div>
  )
}

export default TopBar