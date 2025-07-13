export type CustomColumn = {
  Header: string;
  accessor: string;
  type: 'TEXT' | 'STATUS' | 'DATE' | 'CURRENCY' | 'URL' | 'PRIORITY'| 'INDEX'| 'ADD';
  width: number;
  visibility: boolean; // Updated to boolean
  backgroundColour?: string;
  textColour?: string;
  columnIcon?: string;
};

