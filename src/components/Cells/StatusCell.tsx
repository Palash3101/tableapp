
const colours = {
  //type: [bg, text]
  'In-process': ['#FFF3D6','#85640B'],
  'Need to start': ['#E2E8F0','#475569'],
  'Complete': ['#D3F2E3','#0A6E3D'],
  'Blocked': ['#FFE1DE','#C22219']
}

function StatusCell({width, value}: {width: number, value: 'In-process' | 'Need to start' | 'Complete' | 'Blocked'}) {
  const [bgColor, textColor] = colours[value] || ['#FFFFFF', '#999999'];
  return (
    <button 
      className="table-column text-center overflow-hidden truncate gap-[8px]"
      style={{ width: `${width}px` }}
    >
      <span 
        className="rounded-[100px] py-[4px] px-[8px] bg-[#FFF3D6] font-[500] text-xs"
        style={{ 
          backgroundColor: bgColor,
          color: textColor 
        }}
      >
        {value }  
      </span>
    </button>
  )
}

export default StatusCell

