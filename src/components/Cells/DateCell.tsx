
function DateCell({width, value}: {width: number, value: string}) {
  return (
    <input 
      className='table-column overflow-hidden truncate text-right'
      style={{ width:`${width}px`}}
      defaultValue={value as string}
      type="text"
    />
  )
}

export default DateCell