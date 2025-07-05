import { useState } from "react";

import Row from "./components/Row";
import TitleRow from "./components/TitleRow";
import Table from "./components/Table";
import TopBar from "./components/TopBar";

function App() {
  const [selectedTable, setSelectedTable] = useState("All Orders");

  return (
    <div className="flex flex-col items-center w-full h-screen">
      <TopBar />
      <Row/>
      <Table />
      <TitleRow 
        setSelectedTable={setSelectedTable} 
        selectedTable={selectedTable}
      />
    </div>
  )
}

export default App
