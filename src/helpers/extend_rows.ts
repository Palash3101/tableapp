import tableData from '../data/AllOrders';
import type { RowData } from '../types/row';

const extendedData = tableData;

const currentLength = tableData.data.length;


//Creating a empty template object for new rows
const template:RowData = {}
tableData.columns.forEach((column) => { 

  if (column.accessor === "index") {
    template[column.accessor] = 0; 
  }

  else template[column.accessor] = undefined;
});


const ct = 30;// Number of extra rows to add

for (let i = 0; i < ct; i++) {
  if (i>=currentLength) {
    const newRow:RowData = {...template};
    newRow.index = i + 1; // Setting the index for the new row
    tableData.data.push(newRow);
  }

  else{
    extendedData.data[i]['index'] = i + 1; // Ensuring the index is set for existing rows
  }
}




// console.log(template);

export default extendedData;
