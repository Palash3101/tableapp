export type CustomColumn = {
  Header: string;
  accessor: string;
  colour: string;
  type: 'TEXT' | 'STATUS' | 'DATE' | 'CURRENCY' | 'URL' | 'PRIORITY'| 'INDEX';
  width: number;
};

