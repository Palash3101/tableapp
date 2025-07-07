
const colours = {
  //type: text
  'Low':'#1A8CFF',
  'Medium':'#C29210',
  'High':'#EF4D44',
  'undefined': '#FFFFFF'
}

function PriorityCell({width, value}: {width: number, value: 'Low' | 'Medium' | 'High' |'undefined' }) {
  const textColor = colours[value] || '#FFFFFF';
  return (
    <button 
      className="text-center overflow-hidden truncate gap-[8px] table-column"
      style={{ width: `${width}px` }}
    >
      <span 
        className="font-semibold text-xs"
        style={{ 
          backgroundColor: '#FFFFFF',
          color: textColor 
        }}
      >
        {value || '&nbsp'}  
      </span>
    </button>
  )
}

export default PriorityCell

