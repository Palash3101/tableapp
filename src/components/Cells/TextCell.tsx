
function TextCell({width, value}: {width: number, value: string}) {
  return (
    <input 
      className={`table-column overflow-hidden truncate`}
      style={{ width:`${width}px`}}
      value={value as string}
      type="text"
    />
  )
}

export default TextCell