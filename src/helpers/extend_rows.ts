import tableData from '../data/AllOrders';
import type { RowData } from '../types/row';

let extendedData = tableData;

const currentLength = extendedData.data.length;


//Creating a empty template object for new rows
let template:RowData = {}
tableData.columns.forEach((column,index) => { 

  if (column.accessor === "index") {
    template[column.accessor] = 0; 
  }

  else template[column.accessor] = "";
});


const extra_rows = 30; // Number of extra rows to add
//Adding template to extendedData
for (let i = 0; i < extra_rows; i++) {
  const temp = {...template };
  temp.index = currentLength + i + 1;// Incrementing index for each new row
  extendedData.data.push(temp);
}




// console.log(template);

export default extendedData;
