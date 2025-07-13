import { useState, useEffect } from "react";

import Row from "./components/Row";
import TitleRow from "./components/TitleRow";
import Table from "./components/Table";
import TopBar from "./components/TopBar";

import extendedData from "./helpers/extend_rows";
// import tableData from "./data/AllOrders";

import type { CustomColumn } from "./types/column";
import type { RowData } from './types/row';  
import type { columnHeader } from './types/columnHeader';

function App() {
  const [selectedTable, setSelectedTable] = useState("All Orders");

  const [columns, setColumns] = useState<CustomColumn[]>(extendedData.columns as CustomColumn[]);
  const [data, setData]= useState<RowData[]>(extendedData.data);
  const [columnHeader, setColumnHeader] = useState<columnHeader[]>(extendedData.columnHeader);

  const [selectedCell, setSelectedCell] = useState({accessor: columns[1].accessor, rowIndex: 0});

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Prevent default scrolling behavior for arrow keys
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter'].includes(event.key)) {
        event.preventDefault();
      }

      switch(event.key) {
        case 'ArrowUp':
          if(selectedCell.rowIndex > 0) {
            setSelectedCell(prev => ({
              ...prev,
              rowIndex: prev.rowIndex - 1
            }));
          }
          break;
        case 'ArrowDown':
          if(selectedCell.rowIndex < data.length - 1) {
            setSelectedCell(prev => ({
              ...prev,
              rowIndex: prev.rowIndex + 1
            }));
          }
          break;
        case 'ArrowLeft': {
          const currentColumnIndex = columns.findIndex(col => col.accessor === selectedCell.accessor);
          if (currentColumnIndex > 0) {
            setSelectedCell(prev => ({
              ...prev,
              accessor: columns[currentColumnIndex - 1].accessor
            }));
          }
          break;
        }
        case 'ArrowRight': {
          const nextColumnIndex = columns.findIndex(col => col.accessor === selectedCell.accessor);
          if (nextColumnIndex < columns.length - 1) {
            setSelectedCell(prev => ({
              ...prev,
              accessor: columns[nextColumnIndex + 1].accessor
            }));
          }
          break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCell, columns, data.length]);

  return (
    <div className="flex flex-col items-center w-full h-screen overflow-hidden">
      <TopBar />

      <Row 
        data={data} 
        setData={setData} 
        selectedCell={selectedCell} 
        columns={columns} 
        setColumns={setColumns}
        setColumnHeader={setColumnHeader}
        columnHeader={columnHeader}
      />
      
      <Table 
        setColumns={setColumns} 
        columns={columns} 
        data={data} 
        setData={setData} 
        selectedCell={selectedCell} 
        setSelectedCell={setSelectedCell}
        columnHeader={columnHeader}
        setColumnHeader={setColumnHeader}
      />
      
      
      <TitleRow 
        setSelectedTable={setSelectedTable} 
        selectedTable={selectedTable}
      />
    </div>
  )
}

export default App
