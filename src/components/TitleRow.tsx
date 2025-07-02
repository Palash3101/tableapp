import { useState } from "react";
import {Plus} from "lucide-react";

function TitleRow({ selectedTable, setSelectedTable }: { selectedTable: string, setSelectedTable: (table: string) => void }) {
  const [tables,setTables] = useState(["All Orders", "Pending", "Reviewed", "Arrived"]);


  function handleKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "Delete"){
      console.log("Delete:" + selectedTable);
    }
    else if (e.key === "F2") {
      renameTable();
    }
  }

  function renameTable() {
    console.log("Rename: " + selectedTable);
  }

  return (
    <div className="flex border-t-[1px] border-[#EEEEEE] pt-[4px] pr-[16px] pl-[32px] w-full fixed bottom-0">

      {
        tables.map((table, index) => (
          <button
            key={index}
            onKeyDown={(e) => handleKeyDown(e)}
            onDoubleClick={renameTable}
            className={`flex items-center justify-center h-full px-[16px]
              ${selectedTable === table ? 
                  "border-t-[2px] bg-[#e8f0e9] text-[#3e5741] font-semibold" : 
                  
                  "text-[#757575]"}`}

            onClick={() => setSelectedTable(table)}
          >
            {table}
          </button>
        ))
      }

      <div>
        <button 
          className="text-[#757575] hover:text-[#3e5741] transition-colors duration-200"
          onClick={()=>setTables([...tables, `Table ${tables.length + 1}`])}  
        >
          <Plus />
        </button>
      </div>
    </div>
  )
}

export default TitleRow