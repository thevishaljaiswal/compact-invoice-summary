
export interface InvoiceDetail {
  title: string;
  amount: number;
  gst: number;
  total: number;
}

export interface InvoiceSummary {
  title: string;
  total: number;
  color: string;
  details: InvoiceDetail[];
}

export const invoiceData: InvoiceSummary[] = [
  {
    title: "Total Payable",
    total: 25750.00,
    color: "bg-primary text-white",
    details: [
      {
        title: "Consideration Value",
        amount: 15000.00,
        gst: 2700.00,
        total: 17700.00,
      },
      {
        title: "Admin Charges",
        amount: 2000.00,
        gst: 360.00,
        total: 2360.00,
      },
      {
        title: "Other Charges",
        amount: 1500.00,
        gst: 270.00,
        total: 1770.00,
      },
      {
        title: "Interest Charges",
        amount: 3333.33,
        gst: 586.67,
        total: 3920.00,
      },
    ],
  },
  {
    title: "Total Invoice",
    total: 21830.00,
    color: "bg-secondary text-white",
    details: [
      {
        title: "Consideration Value",
        amount: 15000.00,
        gst: 2700.00,
        total: 17700.00,
      },
      {
        title: "Admin Charges",
        amount: 2000.00,
        gst: 360.00,
        total: 2360.00,
      },
      {
        title: "Other Charges",
        amount: 1500.00,
        gst: 270.00,
        total: 1770.00,
      },
    ],
  },
  {
    title: "Total Paid",
    total: 19600.00,
    color: "bg-success text-white",
    details: [
      {
        title: "Consideration Value",
        amount: 13559.32,
        gst: 2440.68,
        total: 16000.00,
      },
      {
        title: "Admin Charges",
        amount: 1694.92,
        gst: 305.08,
        total: 2000.00,
      },
      {
        title: "Other Charges",
        amount: 1355.93,
        gst: 244.07,
        total: 1600.00,
      },
    ],
  },
  {
    title: "Total Outstanding",
    total: 6150.00,
    color: "bg-warning text-white",
    details: [
      {
        title: "Consideration Value",
        amount: 1440.68,
        gst: 259.32,
        total: 1700.00,
      },
      {
        title: "Admin Charges",
        amount: 305.08,
        gst: 54.92,
        total: 360.00,
      },
      {
        title: "Other Charges",
        amount: 144.07,
        gst: 25.93,
        total: 170.00,
      },
      {
        title: "Interest Charges",
        amount: 3333.33,
        gst: 586.67,
        total: 3920.00,
      },
    ],
  },
];
