
function IndexCell({width, value}: {width: number, value: string}) {
  return (
    <input 
      className={'table-column'}
      style={{ width:`${width}px`}}
      defaultValue={value}
      type="text"
      disabled
    />
  )
}

export default IndexCell