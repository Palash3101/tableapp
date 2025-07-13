import { useState } from "react";
import Plus from "../assets/Primary.svg"

function TitleRow({ selectedTable, setSelectedTable }: { selectedTable: string, setSelectedTable: (table: string) => void }) {
  const [tables,setTables] = useState(["All Orders", "Pending", "Reviewed", "Arrived"]);


  function handleKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "Delete"){
      const newTables = deleteTables(tables, selectedTable);
      setTables(newTables);
      setSelectedTable(newTables[0])
    }
    else if (e.key === "F2") {
      renameTable();
    }
  }

  function renameTable() {
    console.log("Rename: " + selectedTable);
  }

  function deleteTables(tables: string[], selectedTable: string) {
    const updatedTables = tables.filter(table => table !== selectedTable);
    return updatedTables;
  }

  return (
    <div className="flex border-t-[1px] border-[#EEEEEE] pt-[4px] pr-[16px] pl-[32px] w-full h-[48px] fixed bottom-0 bg-white ">

      {
        tables.map((table, index) => (
          <button
            key={index}
            onKeyDown={(e) => handleKeyDown(e)}
            onDoubleClick={renameTable}
            className={`title-row ${selectedTable === table ? "selected": ""} hover:bg-[#F5F5F5] transition-colors duration-200`}
            onClick={() => setSelectedTable(table)}
          >
            {table}
          </button>
        ))
      }

      <button 
        className="flex flex-col items-center justify-center hover:bg-[#F5F5F5] transition-colors duration-200 rounded-[4px]"
        onClick={()=>setTables([...tables, `Table ${tables.length + 1}`])}  
      >
        <div className="px-[4px] py-[8px] gap-[4px]">
          <img
            className="size-[15px] mx-auto my-auto"
            alt="Plus Icon"
            src={Plus}
          />
        </div>

      </button>
    </div>
  )
}

export default TitleRow