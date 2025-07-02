import { useState } from "react";

import Header from "./components/Header"
import Row from "./components/Row";
import TitleRow from "./components/TitleRow";
import Table from "./components/Table";

function App() {
  const [selectedTable, setSelectedTable] = useState("All Orders");

  return (
    <div className="flex flex-col items-center w-full h-screen">
      <Header />
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
