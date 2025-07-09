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


const extra_rows = 21;// Number of extra rows to add

for (let i = 0; i < extra_rows; i++) {
  const temp = {...template };
  temp.index = currentLength + i + 1;// Incrementing index for each new row
  extendedData.data.push(temp);
}




// console.log(template);

export default extendedData;
