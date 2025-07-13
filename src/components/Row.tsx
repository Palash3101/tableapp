//Icon imports
import DoubleChevron from "../assets/DoubleChevron.svg";
import Eye from "../assets/Eye.svg";
import UpDownArrow from "../assets/UpDownArrow.svg";
import Filter from "../assets/Filter.svg";
import CellView from "../assets/CellView.svg";
import Import from "../assets/Import.svg";
import Export from "../assets/Export.svg";
import Share from "../assets/Share.svg";
import NewAction from "../assets/NewAction.svg";

import type { RowData } from "../types/row";
import { useState } from "react";
import type { CustomColumn } from "../types/column";

import TemplateGenerator from "../helpers/templategenerator";
import rowExtender from "../helpers/rowExtender";

function HideFieldsAction(columns: CustomColumn[], setColumns: React.Dispatch<React.SetStateAction<CustomColumn[]>>, columnHeader: columnHeader[], setColumnHeader: React.Dispatch<React.SetStateAction<columnHeader[]>>  ) {
  const updatedColumns = columns.map((column) => {
    if (column.accessor === 'submitter') {
      return { ...column, visibility: !column.visibility };
    }
    return column;
  });
  const updatedColumnHeader = columnHeader.map((header) => {
    if (header.type === 'Custom') {
      header.colspan = header.colspan === 4 ? 3 : 4; // Toggle colspan
    }
    return header;
  });


  setColumns(updatedColumns);
  setColumnHeader(updatedColumnHeader);
}

function SortAction(data: RowData[]) {
  //Only need to change the name field forchanging the field, is mindful of state and will react accordingly
  return [...data].sort((a, b) => {
    const nameA = String(a.submitter ?? '').trim().toLowerCase();
    const nameB = String(b.submitter ?? '').trim().toLowerCase();

    const isEmptyA = nameA === '';
    const isEmptyB = nameB === '';

    if (isEmptyA && !isEmptyB) return 1;   // A is empty → push down
    if (!isEmptyA && isEmptyB) return -1;  // B is empty → B goes down
    return nameA.localeCompare(nameB);     // Normal alphabetical sort
  });
}

function FilterAction(data: RowData[], setData: React.Dispatch<React.SetStateAction<RowData[]>>, columns: CustomColumn[]) {
  const smth_new = data.filter(item => item.priority === "Low");
  setData(rowExtender(smth_new, TemplateGenerator(columns)));
}

function CellViewAction(selectedCell: {accessor: string, rowIndex: number}, data: RowData[]) {
  const cellData = data[selectedCell.rowIndex][selectedCell.accessor];
  console.log(cellData !== '' ? cellData : "No data available");
}

function ImportAction() {
  console.log("Import function called");
}

function ExportAction() {
  console.log("Export function called");
}

function ShareAction(data: RowData[]) {
  console.log(data);
}

import type { columnHeader } from "../types/columnHeader";

export interface RowProps {
  data: RowData[];
  setData: React.Dispatch<React.SetStateAction<RowData[]>>;
  selectedCell: {accessor: string, rowIndex: number};
  columns: CustomColumn[];
  setColumns: React.Dispatch<React.SetStateAction<CustomColumn[]>>;
  columnHeader: columnHeader[];
  setColumnHeader: React.Dispatch<React.SetStateAction<columnHeader[]>>;
}


function Row({data, setData, selectedCell, columns, setColumns, columnHeader, setColumnHeader}: RowProps) {
  const [isToolBarOpen, setISToolBarOpen] = useState(true);

  return (
    <div className="flex w-full h-[48px] gap-[8px] py-[6px] px-[8px] border-b-[1px] border-[#EEEEEE] items-center" >
      
      {/* Tool Bar */}
      <button 
        className="w-[91px] flex p-[8px] rounded-[4px] gap-[4px] justify-center items-center"
        onClick={() => setISToolBarOpen(!isToolBarOpen)}
      >
      
        <span className="w-[55px] text-sm font-[400] text-[#121212]">
          Tool Bar
        </span>
        <div className="w-[16px] h-[16px] flex flex-col justify-center my-auto">
          <img
            className="w-[8.6px] h-[9.8px] mx-auto"
            style={{ transform: isToolBarOpen ? 'rotate(0deg)' : 'rotate(180deg)' }}
            alt="Double Chevron Icon"
            src={DoubleChevron}
          />
        </div>
      </button>

      <div className="w-[1px] h-[24px] bg-[#EEEEEE]" />

      {/* Table Controls Block */}

      <div className="flex flex-1 h-[36px] gap-[4px] text-sm font-[400]">
      {
        isToolBarOpen && 
        <>
          <Button 
            text="Hide fields"  
            icon={Eye}
            onClick={()=>HideFieldsAction(columns, setColumns, columnHeader, setColumnHeader)}
          />

          <Button 
            text="Sort"  
            icon={UpDownArrow}
            onClick={()=>{
              const updatedData = SortAction(data);
              setData(updatedData)
            }}
          />

          <Button 
            text="Filter"  
            icon={Filter}
            onClick={()=>FilterAction(data, setData, columns)}
          />

          <Button 
            text="Cell view"  
            icon={CellView}
            onClick={()=>CellViewAction(selectedCell, data)}
          />
        </>
      }

      </div>

      {/* Right section */}
      <div className="flex w-[437px] items-center gap-[8px] ">
        {/* Controls */}
        <div className="flex gap-[8px] items-center font-[400] text-sm text-[#545454]">
          <Button 
            text="Import"  
            icon={Import}
            border = {true}
            onClick={ImportAction}
          />

          <Button 
            text="Export"  
            icon={Export}
            border = {true}
            onClick={ExportAction}
          />

          <Button 
            text="Share"  
            icon={Share}
            border = {true}
            onClick={()=>ShareAction(data)}
          />
        </div>

        <button className="flex h-auto items-center text-white gap-[4px] bg-[#4b6a4f] rounded-[6px] px-[24px] py-[8px] h-full">
          <div className="size-[20px] flex flex-col justify-center">
            <img
              className="transform scale-[0.9375] mx-auto my-auto"
              alt="Icon"
              src={NewAction}
            />
          </div>
          

          <span className="font-[500] text-[14px] leading-[20px] tracking-normal h-[20px]">
            New Action
          </span>
        </button>
      </div>
    </div>
  )
}

function Button({text, icon, border, onClick}: {text: string, icon:string, border?: boolean, onClick?: () => void}) {
  return (
    <button 
      className={`flex w-auto h-auto py-[8px] pl-[8px] pr-[12px] gap-[4px] items-center rounded-[6px] transition-colors duration-200 hover:bg-[#F5F5F5] ${border ? 'border-[1px] border-[#EEEEEE]' : ''}`}
      onClick={onClick}
    >

      <div className="size-[20px] flex flex-col justify-center">
        <img
          className="transform scale-[0.9375] mx-auto my-auto"
          alt="Icon"
          src={icon}
        />
      </div>
      <span className="">
        {text}
      </span>
    </button>
  )
}

export default Row