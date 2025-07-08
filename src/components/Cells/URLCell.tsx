
function URLCell({width, value}: {width: number, value: string}) {
  return (
    <input 
      className='table-column overflow-hidden truncate'
      style={{ 
        width:`${width}px`,
        textDecoration: 'underline',
      }}
      defaultValue={value as string}
      type="text"
    />
  )
}

export default URLCell