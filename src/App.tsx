import { useState } from "react";

import Row from "./components/Row";
import TitleRow from "./components/TitleRow";
import Table from "./components/Table";
import TopBar from "./components/TopBar";

import extendedData from "./helpers/extend_rows";

import type { CustomColumn } from "./types/column";
import type { RowData } from './types/row';  


function App() {
  const [selectedTable, setSelectedTable] = useState("All Orders");
    const [columns, setColumns] = useState<CustomColumn[]>(extendedData.columns as CustomColumn[]);
  
    const [data, setData]= useState<RowData[]>(extendedData.data);

  return (
    <div className="flex flex-col items-center w-full h-screen">
      <TopBar />
      <Row data={data}/>
      <Table columns={columns} data={data} setData={setData}/>
      <TitleRow 
        setSelectedTable={setSelectedTable} 
        selectedTable={selectedTable}
      />
    </div>
  )
}

export default App
