import type { RowData } from '../types/row';

export default function rowExtender(data: RowData[], template: RowData) {
  const currentLength = data.length;
  const ct = 30; // Number of extra rows to add
  const extendedData = [...data]

  for (let i = 0; i < ct; i++) {
    if (i>=currentLength) {
      const newRow:RowData = {...template};
      newRow.index = i + 1; // Setting the index for the new row
      extendedData.push(newRow);
    }

    else{
      extendedData[i]['index'] = i + 1; // Ensuring the index is set for existing rows
    }
  }

  return extendedData; // Return the updated data
}