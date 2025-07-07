
function IndexCell({width, value}: {width: number, value: string}) {
  return (
    <input 
      className={'table-column'}
      style={{ width:`${width}px`}}
      value={value}
      type="text"
      disabled
    />
  )
}

export default IndexCell