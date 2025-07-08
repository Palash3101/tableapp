import type { RowData } from "../types/row";
import type { CustomColumn } from "../types/column";

const tableData = {
  columnGroups:[

  ],

  columns: [
      { Header: "#", accessor: "index", type: "INDEX", width: 32},
      { Header: "Job Request", accessor: "job_request" , type: "TEXT", width: 256, columnIcon: "Briefcase.svg"  },
      { Header: "Submitted", accessor: "submitted" , type: "DATE", width: 124, columnIcon: "Calendar.svg"  },
      { Header: "Status", accessor: "status" , type: "STATUS", width: 124, columnIcon: "ChevronCircle.svg"  },
      { Header: "Submitter", accessor: "submitter" , type: "TEXT", width: 124, columnIcon: "Person.svg"  },

      { Header: "URL", accessor: "url" , type: "URL", width: 124, columnIcon: "Globe.svg"  },

      { Header: "Assigned To", accessor: "assigned_to" , backgroundColour: "#E8F0E9",textColour:"#666C66" ,type: "TEXT", width: 124 },

      { Header: "Priority", accessor: "priority", backgroundColour: "#EAE3FC", textColour:"#655C80",type: "PRIORITY", width: 125 },
      { Header: "Due Date", accessor: "due_date", backgroundColour: "#EAE3FC", textColour:"#655C80",type: "DATE", width: 125 },

      { Header: "Est. Value", accessor: "est_value" , backgroundColour: "#FFE9E0", textColour:"#8C6C62",type: "CURRENCY", width: 125 },

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
    est_value: "6,200,000",
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
    est_value: "3,500,000",
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
    est_value: "4,750,000",
    add_new_row: true
  },
  {
    index: 4,
    job_request: "Design new features for the website",
    submitted: "10-01-2025",
    status: "Complete",
    submitter: "Emily Green",
    url: "www.emilygreenui.com",
    assigned_to: "Tom White",
    priority: "Low",
    due_date: "15-01-2025",
    est_value: "5,900,000",
    add_new_row: true
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
    est_value: "2,800,000",
    add_new_row: true
  }
] as RowData[]
};

export default tableData;
