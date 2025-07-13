import type { RowData } from "../types/row";
import type { CustomColumn } from "../types/column";
import rowExtender from "./rowExtender";
import TemplateGenerator from "./templategenerator";

export function hideFieldsAction(
  columns: CustomColumn[],
  setColumns: React.Dispatch<React.SetStateAction<CustomColumn[]>>,
  columnHeader: any[], // Replace with a proper type
  setColumnHeader: React.Dispatch<React.SetStateAction<any[]>> // Replace with a proper type
) {
  const updatedColumns = columns.map((column) => {
    if (column.accessor === "submitter") {
      return { ...column, visibility: !column.visibility };
    }
    return column;
  });

  const updatedColumnHeader = columnHeader.map((header) => {
    if (header.type === "Custom") {
      return { ...header, colspan: header.colspan === 4 ? 3 : 4 };
    }
    return header;
  });

  setColumns(updatedColumns);
  setColumnHeader(updatedColumnHeader);
}

export function sortAction(data: RowData[]) {
  return [...data].sort((a, b) => {
    const nameA = String(a.submitter ?? "").trim().toLowerCase();
    const nameB = String(b.submitter ?? "").trim().toLowerCase();
    if (nameA === "") return 1;
    if (nameB === "") return -1;
    return nameA.localeCompare(nameB);
  });
}

export function filterAction(
  data: RowData[],
  setData: React.Dispatch<React.SetStateAction<RowData[]>>,
  columns: CustomColumn[]
) {
  const filteredData = data.filter((item) => item.priority === "Low");
  setData(rowExtender(filteredData, TemplateGenerator(columns)));
}

export function cellViewAction(
  selectedCell: { accessor: string; rowIndex: number },
  data: RowData[]
) {
  const cellData = data[selectedCell.rowIndex]?.[selectedCell.accessor];
  console.log(cellData ?? "No data available");
}

export function importAction() {
  console.log("Import function called");
}

export function exportAction() {
  console.log("Export function called");
}

export function shareAction(data: RowData[]) {
  console.log(data);
}
