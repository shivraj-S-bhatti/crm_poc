import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
  Grid,
  TableContainer,
  TextField,
} from '@mui/material';

import {
  turnoverData,
  turnoverTotal,
  investmentData,
  investmentTotal,
  fixedCostA,
  fixedCostB,
  salaryData,
  otherExpensesData,
  roiSummaryData,
  roiAssistData,
} from "../data/dummyData";

const ROIEntry: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {/* 1) Turnover & Earning Section */}
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
          TURNOVER & EARNING
        </Typography>
        <TableContainer component={Paper} variant="elevation" elevation={0}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>CATEGORY</TableCell>
                <TableCell align="right">BUSINESS SIZE</TableCell>
                <TableCell align="right">MARGIN</TableCell>
                <TableCell align="right">GROSS PROFIT</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {turnoverData.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell component="th" scope="row">{row.category}</TableCell>
                  <TableCell align="right">
                    <TextField
                      type="number"
                      value={row.businessSize}
                      onChange={(e) => {
                        // Handle business size change
                      }}
                      size="small"
                      sx={{ width: '120px' }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <TextField
                      type="number"
                      value={row.marginPct}
                      onChange={(e) => {
                        // Handle margin change
                      }}
                      size="small"
                      sx={{ width: '120px' }}
                    />
                  </TableCell>
                  <TableCell align="right">{row.grossProfit}</TableCell>
                </TableRow>
              ))}
              <TableRow sx={{ '& td, & th': { fontWeight: 'bold' } }}>
                <TableCell component="th" scope="row">Total</TableCell>
                <TableCell align="right">{turnoverTotal.totalBusinessSize}</TableCell>
                <TableCell></TableCell>
                <TableCell align="right">{turnoverTotal.totalGrossProfit}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* 2) Investment Section */}
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
          INVESTMENT
        </Typography>
        <TableContainer component={Paper} variant="elevation" elevation={0}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell align="right">No of Days</TableCell>
                <TableCell align="right">Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {investmentData.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell component="th" scope="row">{row.item}</TableCell>
                  <TableCell align="right">
                    <TextField
                      type="number"
                      value={row.noOfDays}
                      onChange={(e) => {
                        // Handle days change
                      }}
                      size="small"
                      sx={{ width: '120px' }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <TextField
                      type="number"
                      value={row.amount}
                      onChange={(e) => {
                        // Handle amount change
                      }}
                      size="small"
                      sx={{ width: '120px' }}
                    />
                  </TableCell>
                </TableRow>
              ))}
              <TableRow sx={{ '& td, & th': { fontWeight: 'bold' } }}>
                <TableCell component="th" scope="row">Total</TableCell>
                <TableCell align="right">{investmentTotal.totalNoOfDays}</TableCell>
                <TableCell align="right">{investmentTotal.totalAmount}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* 3) Fixed Cost Master */}
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
          FIXED COST MASTER
        </Typography>
        {/* Part A table */}
        <TableContainer component={Paper} variant="elevation" elevation={0} sx={{ mb: 2 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Expense Head</TableCell>
                <TableCell align="right">Nos</TableCell>
                <TableCell align="right">Rate</TableCell>
                <TableCell align="right">Expense</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fixedCostA.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell component="th" scope="row">{row.expenseHead}</TableCell>
                  <TableCell align="right">
                    <TextField
                      type="number"
                      value={row.nos}
                      onChange={(e) => {
                        // Handle nos change
                      }}
                      size="small"
                      sx={{ width: '120px' }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <TextField
                      type="number"
                      value={row.rate}
                      onChange={(e) => {
                        // Handle rate change
                      }}
                      size="small"
                      sx={{ width: '120px' }}
                    />
                  </TableCell>
                  <TableCell align="right">{row.expense}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Part B table */}
        <TableContainer component={Paper} variant="elevation" elevation={0}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Expense Head</TableCell>
                <TableCell align="right">Expense</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fixedCostB.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell component="th" scope="row">{row.expenseHead}</TableCell>
                  <TableCell align="right">
                    <TextField
                      type="number"
                      value={row.expense}
                      onChange={(e) => {
                        // Handle expense change
                      }}
                      size="small"
                      sx={{ width: '120px' }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Button variant="contained" size="small">
                      UPDATE
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      
      {/* 4) Salary Master */}
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
          SALARY MASTER
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          (FORMULA FOR TOTAL = NOS * RATE )
        </Typography>
        <TableContainer component={Paper} variant="elevation" elevation={0}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Job Profile</TableCell>
                <TableCell align="right">No. of Heads</TableCell>
                <TableCell align="right">Rate Per Head Per Month</TableCell>
                <TableCell align="right">Total</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {salaryData.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell component="th" scope="row">{row.jobProfile}</TableCell>
                  <TableCell align="right">{row.noOfHeads}</TableCell>
                  <TableCell align="right">{row.ratePerHead}</TableCell>
                  <TableCell align="right">{row.total}</TableCell>
                  <TableCell align="center">
                    <Button variant="contained" size="small" color="error" sx={{ mr: 1 }}>
                      DELETE
                    </Button>
                    <Button variant="contained" size="small">
                      UPDATE
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* 5) Other Expenses */}
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
          OTHER EXPENSES
        </Typography>
        <TableContainer component={Paper} variant="elevation" elevation={0}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Expense Head</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="center">Upload</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {otherExpensesData.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell component="th" scope="row">{row.expenseHead}</TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                  <TableCell align="center">
                    <Button variant="contained" size="small" disabled>
                      UPLOAD
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* 6) ROI Summary */}
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
          ROI
        </Typography>
        <TableContainer component={Paper} variant="elevation" elevation={0}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell align="right">Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Total Gross Profit</TableCell>
                <TableCell align="right">{roiSummaryData.totalGrossProfit}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Investment In Amount</TableCell>
                <TableCell align="right">{roiSummaryData.totalInvestmentAmount}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Investment in Days</TableCell>
                <TableCell align="right">{roiSummaryData.totalInvestmentDays}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Expenditure</TableCell>
                <TableCell align="right">{roiSummaryData.totalExpenditure}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Net Profit</TableCell>
                <TableCell align="right">{roiSummaryData.netProfit}</TableCell>
              </TableRow>
              <TableRow sx={{ '& td': { fontWeight: 'bold' } }}>
                <TableCell>ROI</TableCell>
                <TableCell align="right">{roiSummaryData.roiPercent}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" size="small" disabled>
            CALCULATE
          </Button>
        </Box>
      </Paper>

      {/* 7) ROI Assist */}
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
          ROI AI ASSIST
        </Typography>
        <Typography variant="h6" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
            RECOMMENDATION TO IMPROVE ROI
        </Typography>

        <Box sx={{ mt: 1, mb:2, lineHeight: 1.8}}>
          <Typography variant="body1">
            📌&nbsp;&nbsp;CURRENT ROI : &nbsp;<strong>{roiAssistData.currentROI}</strong>
          </Typography>
          <Typography variant="body1">
            📌&nbsp;&nbsp;TARGET ROI : &nbsp;<strong>{roiAssistData.targetROI}</strong>
          </Typography>
          <Typography variant="body1">
            📌&nbsp;&nbsp;CURRENT GROSS PROFIT : &nbsp;<strong>{roiAssistData.currentGrossProfit}</strong>
          </Typography>
          <Typography variant="body1">
            📌&nbsp;&nbsp;IDEAL GROSS PROFIT NEEDED : &nbsp;<strong>{roiAssistData.idealGrossProfit}</strong>
          </Typography>
          <Typography variant="body1">
            🔺&nbsp;&nbsp;GAP : &nbsp;<strong>{roiAssistData.gap}</strong>
          </Typography>
        </Box>

        <Box sx={{ mt: 2, mb: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>🔍&nbsp;&nbsp;INSIGHT:</Typography>
          <Typography variant="body1">{roiAssistData.insight}</Typography>
        </Box>

        <Box sx={{ mt: 2, mb: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>🎯&nbsp;&nbsp;ACTION PLAN:</Typography>
          {roiAssistData.actionItems.map((item, idx) => (
            <Typography variant="body1" key={idx} sx={{ display: 'flex', alignItems: 'center'}}>
                {item}
            </Typography>
          ))}
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body1">
            CURRENT TURNOVER: <strong>{roiAssistData.currentTurnover}</strong>
          </Typography>
          <Typography variant="body1">
            IDEAL TURNOVER FOR 1.5% ROI: <strong>{roiAssistData.idealTurnover}</strong>
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            📉&nbsp;&nbsp;GAP: {roiAssistData.turnoverGap}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default ROIEntry; 