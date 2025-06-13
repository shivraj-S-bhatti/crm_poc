// This file will contain dummy data for the application.
// For example, WD profile, historical ROI entries, etc.

export {}; // Placeholder to make it a module 

export interface WDProfile {
  wdCode: string;
  wdName: string;
  wdType: string;
  channel: string;
  town: string;
  ownerName: string;
  ownerMobile: string;
  ownerEmail: string;
  branchName: string;
  branchCode: string;
}

export const wdProfile: WDProfile = {
  wdCode: "DE0000",
  wdName: "ABC DISTRIBUTIONS",
  wdType: "NON -LEAN",
  channel: "GT CHANNEL",
  town: "DELHI",
  ownerName: "ABC",
  ownerMobile: "1234567891",
  ownerEmail: "ABC@GMAIL.COM",
  branchName: "ABC@GMAIL.COM", // (per PDF—although it looks like ownerEmail is repeated, copy exactly)
  branchCode: "ABC@GMAIL.COM", // (same as above; the PDF shows two identical lines—just mirror it verbatim)
};

export interface ROIHistoryRow {
  id: number;
  period: string;     // e.g. "JAN-FY24"
  roiPct: string;     // e.g. "1.2%"
  status: string;     // e.g. "SUBMITTED"
}

export const previousROIEntries: ROIHistoryRow[] = [
  { id: 1, period: "JAN-FY24", roiPct: "1.2%", status: "SUBMITTED" },
  { id: 2, period: "APR-FY24", roiPct: "1.5%", status: "SUBMITTED" },
  { id: 3, period: "JUL-FY24", roiPct: "1.6%", status: "SUBMITTED" },
  { id: 4, period: "OCT-FY24", roiPct: "1.1%", status: "SUBMITTED" },
  { id: 5, period: "JAN-FY25", roiPct: "1.5%", status: "SUBMITTED" },
  { id: 6, period: "APR-FY25", roiPct: "1.6%", status: "SUBMITTED" },
  { id: 7, period: "JUL-FY25", roiPct: "1.6%", status: "SUBMITTED" },
];

export interface TurnoverRow {
  category: string;       // e.g., "Cigarettes"
  businessSize: string;   // e.g., "₹80,000,000.00"
  marginPct: string;      // e.g., "1.45%"
  grossProfit: string;    // e.g., "₹1,160,000.00"
}

export const turnoverData: TurnoverRow[] = [
  { category: "Cigarettes", businessSize: "₹80,000,000.00", marginPct: "1.45%", grossProfit: "₹1,160,000.00" },
  { category: "Foods - Bingo", businessSize: "₹1,700,000.00", marginPct: "3%", grossProfit: "₹51,000.00" },
  { category: "Foods - Others", businessSize: "₹1,000,000.00", marginPct: "2.85%", grossProfit: "₹28,500.00" },
  { category: "PCP", businessSize: "₹700,000.00", marginPct: "3%", grossProfit: "₹21,000.00" },
  { category: "Agarbatti", businessSize: "`150000", marginPct: "3%", grossProfit: "₹4,500.00" },
  { category: "Matches", businessSize: "₹150,000.00", marginPct: "3%", grossProfit: "₹4,500.00" },
];

export const turnoverTotal = {
  totalBusinessSize: "₹83,700,000",
  totalGrossProfit: "₹12,69,500",
};

export interface InvestmentRow {
  item: string;         // e.g., "SOH"
  noOfDays: string;     // e.g., "12"
  amount: string;       // e.g., "₹33,480,000.00"
}

export const investmentData: InvestmentRow[] = [
  { item: "SOH", noOfDays: "12", amount: "₹33,480,000.00" },
  { item: "SIT", noOfDays: "1", amount: "₹2,790,000.00" },
  { item: "D&D Pendancy", noOfDays: "2", amount: "₹5,580,000.00" },
  { item: "Pending RFAs", noOfDays: "2", amount: "₹5,580,000.00" },
  { item: "Market Credit", noOfDays: "15", amount: "₹41,850,000.00" },
  { item: "Credit/Debit Balance With Co.", noOfDays: "2", amount: "₹5,580,000.00" },
];

export const investmentTotal = {
  totalNoOfDays: "34",
  totalAmount: "₹9,48,60,000",
};

export interface FixedCostRowA {
  expenseHead: string;
  nos: string;         // e.g., "6300"
  rate: string;        // e.g., "₹7.00"
  expense: string;     // e.g., "₹44,100.00"
}

export const fixedCostA: FixedCostRowA[] = [
  { expenseHead: "Godown Space (Area & Rate/Sqft)", nos: "6300", rate: "₹7.00", expense: "₹44,100.00" },
  { expenseHead: "Office Space (Area & Rate/Sqft)", nos: "300", rate: "₹7.00", expense: "₹2,100.00" },
];

export interface FixedCostRowB {
  expenseHead: string;
  expense: string;     // e.g., "₹1,872.00"
}

export const fixedCostB: FixedCostRowB[] = [
  { expenseHead: "Licences", expense: "₹1,872.00" },
  { expenseHead: "Insurance", expense: "₹3,375.00" },
];

export interface SalaryRow {
  jobProfile: string;   // e.g., "Loader"
  noOfHeads: string;    // e.g., "2"
  ratePerHead: string;  // e.g., "₹15,000.00"
  total: string;        // e.g., "₹30,000.00"
}

export const salaryData: SalaryRow[] = [
  { jobProfile: "Loader", noOfHeads: "2", ratePerHead: "₹15,000.00", total: "₹30,000.00" },
  { jobProfile: "Godown Keeper", noOfHeads: "3", ratePerHead: "₹15,000.00", total: "₹45,000.00" },
  { jobProfile: "Cashier", noOfHeads: "1", ratePerHead: "₹15,000.00", total: "₹15,000.00" },
  { jobProfile: "Manager", noOfHeads: "1", ratePerHead: "₹25,000.00", total: "₹25,000.00" },
  { jobProfile: "Computer Operator", noOfHeads: "2", ratePerHead: "₹15,000.00", total: "₹30,000.00" },
];

export interface OtherExpenseRow {
  expenseHead: string;
  amount: string;        // e.g., "₹8,000.00"
}

export const otherExpensesData: OtherExpenseRow[] = [
  { expenseHead: "Stationery", amount: "₹8,000.00" },
  { expenseHead: "Electricity Bill", amount: "₹8,200.00" },
  { expenseHead: "Auditing Fees", amount: "₹4,167.00" },
  { expenseHead: "Employee Welfare", amount: "₹3,700.00" },
  { expenseHead: "Phone Bill", amount: "₹4,000.00" },
  { expenseHead: "Internet Bill", amount: "₹5,000.00" },
  { expenseHead: "Computer Maintenance (AMC)", amount: "₹6,580.00" },
  { expenseHead: "Any other costs (Misc)", amount: "₹6,000.00" },
];

export interface RoiSummary {
  totalGrossProfit: string;         // e.g., "₹12,69,500"
  totalInvestmentAmount: string;    // e.g., "₹9,48,60,000"
  totalInvestmentDays: string;      // e.g., "34"
  totalExpenditure: string;         // e.g., "₹2,42,094"
  netProfit: string;                // e.g., "₹1,027,406.00"
  roiPercent: string;               // e.g., "1.08%"
}

export const roiSummaryData: RoiSummary = {
  totalGrossProfit: "₹12,69,500",
  totalInvestmentAmount: "₹9,48,60,000",
  totalInvestmentDays: "34",
  totalExpenditure: "₹2,42,094",
  netProfit: "₹1,027,406.00",
  roiPercent: "1.08%",
};

export interface RoiAssist {
  currentROI: string;           // e.g., "1.08%"
  targetROI: string;            // e.g., "1.5%"
  currentGrossProfit: string;   // e.g., "₹12,69,500"
  idealGrossProfit: string;     // e.g., "₹16,64,994"
  gap: string;                  // e.g., "₹3,95,494"
  insight: string;              
  actionItems: string[];        // each line, e.g. "📈 BOOST CIGARETTE SALES: ..."
  currentTurnover: string;      // e.g., "₹83.7 CR"
  idealTurnover: string;        // e.g., "₹86.3 CR"
  turnoverGap: string;          // e.g., "₹2.6 CR AWAY"
}

export const roiAssistData = {
  currentROI: "1.24%",
  targetROI: "1.5%",
  currentGrossProfit: "₹1,04,400.00",
  idealGrossProfit: "₹1,26,450.00",
  gap: "₹22,050.00",
  insight: "To achieve the target ROI of 1.5%, you need to increase your gross profit by ₹22,050.00",
  actionItems: [
    "Increase sales volume in high-margin categories",
    "Optimize inventory levels to reduce holding costs",
    "Review and adjust pricing strategy",
    "Focus on customer retention and loyalty programs"
  ],
  currentTurnover: "₹8.37 Crores",
  idealTurnover: "₹8.63 Crores",
  turnoverGap: "₹0.26 Crores"
}; 