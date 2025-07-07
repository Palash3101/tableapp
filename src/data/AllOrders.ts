import type { RowData } from "../types/row";
import type { CustomColumn } from "../types/column";

const tableData = {
  columnGroups:[

  ],

  columns: [
      { Header: "#", accessor: "index", colour: "#EEEEEE", type: "INDEX", width: 32 },
      { Header: "Job Request", accessor: "job_request" , colour: "#EEEEEE", type: "TEXT", width: 256 },
      { Header: "Submitted", accessor: "submitted" , colour: "#EEEEEE", type: "DATE", width: 124 },
      { Header: "Status", accessor: "status" , colour: "#EEEEEE", type: "STATUS", width: 124 },
      { Header: "Submitter", accessor: "submitter" , colour: "#EEEEEE", type: "TEXT", width: 124 },

      { Header: "URL", accessor: "url" , colour: "#EEEEEE", type: "URL", width: 124 },

      { Header: "Assigned To", accessor: "assigned_to" , colour: "#E8F0E9", type: "TEXT", width: 124 },

      { Header: "Priority", accessor: "priority", colour: "#EAE3FC", type: "PRIORITY", width: 125 },
      { Header: "Due Date", accessor: "due_date", colour: "#EAE3FC", type: "DATE", width: 125 },

      { Header: "Est. Value", accessor: "est_value" , colour: "#FFE9E0", type: "CURRENCY", width: 125 },

    ] as CustomColumn[],

  data: [
  {
    index: 1,
    job_request: "Launch social media campaign for product",
    submitted: "15-11-2024",
    status: "In-process",
    submitter: "Aisha Patel",
    url: "www.aishapatel.com",
    assigned_to: "Sophie Choudhury",
    priority: "Medium",
    due_date: "20-11-2024",
    est_value: "6,200,000"
  },
  {
    index: 2,
    job_request: "Update press kit for company redesign",
    submitted: "28-10-2024",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "www.irfankhanpress.com",
    assigned_to: "Tejas Pandey",
    priority: "High",
    due_date: "30-10-2024",
    est_value: "3,500,000"
  },
  {
    index: 3,
    job_request: "Finalize user testing feedback for app",
    submitted: "05-12-2024",
    status: "In-process",
    submitter: "Mark Johnson",
    url: "www.markjohnsondev.com",
    assigned_to: "Rachel Lee",
    priority: "Medium",
    due_date: "10-12-2024",
    est_value: "4,750,000"
  },
  {
    index: 4,
    job_request: "Design new features for the website",
    submitted: "10-01-2025",
    status: "Complete",
    submitter: "Emily Green",
    url: "www.emilygreenui.com",
    assigned_to: "Tom WTEXT",
    priority: "Low",
    due_date: "15-01-2025",
    est_value: "5,900,000"
  },
  {
    index: 5,
    job_request: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "www.jessicabrownfinance.com",
    assigned_to: "Kevin Smith",
    priority: "Low",
    due_date: "30-01-2025",
    est_value: "2,800,000"
  }
] as RowData[]
};

export default tableData;
