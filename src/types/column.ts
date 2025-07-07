export type CustomColumn = {
  Header: string;
  accessor: string;
  type: 'TEXT' | 'STATUS' | 'DATE' | 'CURRENCY' | 'URL' | 'PRIORITY'| 'INDEX';
  width: number;
  backgroundColour?: string;
  textColour?: string;
};

