import { useState } from "react";
import type { RowData } from "../types/row";
import type { CustomColumn } from "../types/column";
import type { columnHeader } from "../types/columnHeader";

import Button from "./subcomponents/Button";
import {
  hideFieldsAction,
  sortAction,
  filterAction,
  cellViewAction,
  importAction,
  exportAction,
  shareAction,
} from "../helpers/tableActions";

// Icon imports
import DoubleChevron from "../assets/DoubleChevron.svg";
import Eye from "../assets/Eye.svg";
import UpDownArrow from "../assets/UpDownArrow.svg";
import Filter from "../assets/Filter.svg";
import CellView from "../assets/CellView.svg";
import Import from "../assets/Import.svg";
import Export from "../assets/Export.svg";
import Share from "../assets/Share.svg";

export interface RowProps {
  data: RowData[];
  setData: React.Dispatch<React.SetStateAction<RowData[]>>;
  selectedCell: { accessor: string; rowIndex: number };
  columns: CustomColumn[];
  setColumns: React.Dispatch<React.SetStateAction<CustomColumn[]>>;
  columnHeader: columnHeader[];
  setColumnHeader: React.Dispatch<React.SetStateAction<columnHeader[]>>;
}

function Row({
  data,
  setData,
  selectedCell,
  columns,
  setColumns,
  columnHeader,
  setColumnHeader,
}: RowProps) {
  const [isToolBarOpen, setISToolBarOpen] = useState(true);

  const handleSort = () => {
    const sortedData = sortAction(data);
    setData(sortedData);
  };

  return (
    <div className="flex w-full h-[48px] gap-[8px] py-[6px] px-[8px] border-b-[1px] border-[#EEEEEE] items-center">
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
            style={{ transform: isToolBarOpen ? "rotate(0deg)" : "rotate(180deg)" }}
            alt="Double Chevron Icon"
            src={DoubleChevron}
          />
        </div>
      </button>

      <div className="w-[1px] h-[24px] bg-[#EEEEEE]" />

      {isToolBarOpen && (
        <div className="flex flex-1 h-[36px] gap-[4px] text-sm font-[400]">
          <Button
            text="Hide fields"
            icon={Eye}
            onClick={() => hideFieldsAction(columns, setColumns, columnHeader, setColumnHeader)}
          />
          <Button text="Sort" icon={UpDownArrow} onClick={handleSort} />
          <Button
            text="Filter"
            icon={Filter}
            onClick={() => filterAction(data, setData, columns)}
          />
          <Button
            text="Cell view"
            icon={CellView}
            onClick={() => cellViewAction(selectedCell, data)}
          />
        </div>
      )}

      <div className="flex w-auto items-center gap-[8px]">
        <div className="flex gap-[8px] items-center font-[400] text-sm text-[#545454]">
          <Button text="Import" icon={Import} border onClick={importAction} />
          <Button text="Export" icon={Export} border onClick={exportAction} />
          <Button text="Share" icon={Share} border onClick={() => shareAction(data)} />
        </div>
      </div>
    </div>
  );
}

export default Row;