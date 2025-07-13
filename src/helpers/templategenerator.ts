import type { CustomColumn } from '../types/column';
import type { RowData } from '../types/row';

export default function TemplateGenerator(columns:CustomColumn[]){
  const template:RowData = {}
  columns.forEach((column) => { 

  if (column.accessor === "index") {
    template[column.accessor] = 0; 
  }

  else template[column.accessor] = '';
  });
  return template;
}