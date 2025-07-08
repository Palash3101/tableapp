import Dropdown from '../../assets/HeaderIcons/Dropdown.svg'

function SingleTableHeader({columnIcon, Header}: {columnIcon?: string, Header: string}) {
  return (
    <div className='flex w-full h-full pr-[4px] pl-[8px] items-center'>

      <div className='flex flex-1 gap-[4px] font-semibold'>
        {
          columnIcon && 
          <img 
            src={`/headerIcons/${columnIcon}`}
            alt={Header}
            className='size-[16px] '
          />
        }
        <span className='text-xs'>
          {Header}
        </span>
      </div>
      
      {
        columnIcon && 
        <img 
          src={Dropdown}
          alt='Dropdown'
          className='size-[20px]'
        />
      }

    </div>
  )
}

export default SingleTableHeader