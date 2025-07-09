import Dropdown from '../../assets/HeaderIcons/Dropdown.svg'

function SingleTableHeader({columnIcon, Header, accessor}: {columnIcon?: string, Header: string, accessor: string}) {
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
        <button
          onClick={() => console.log('Dropdown', accessor)}
        >
          <img 
            src={Dropdown}
            alt='Dropdown'
            className='size-[20px]'
          />
        </button>
      }

    </div>
  )
}

export default SingleTableHeader