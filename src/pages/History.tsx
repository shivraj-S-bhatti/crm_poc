import React, { useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Paper,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import { previousROIEntries } from "../data/dummyData";

export default function History() {
  const allYears = Array.from(
    new Set(
      previousROIEntries.map((row) => {
        const fy = row.period.split("-")[1];
        return "20" + fy.slice(2);
      })
    )
  ).sort();

  const [filterYear, setFilterYear] = useState<string>("All");

  const filteredRows = previousROIEntries.filter((row) => {
    if (filterYear === "All") return true;
    const year = "20" + row.period.split("-")[1].slice(2);
    return year === filterYear;
  });

  const columns: GridColDef[] = [
    {
      field: "period",
      headerName: "YEAR",
      width: 150,
      sortable: true,
    },
    {
      field: "roiPct",
      headerName: "ROI %",
      width: 120,
      sortable: true,
    },
    {
      field: "status",
      headerName: "SUBMISSION STATUS",
      width: 180,
      sortable: true,
    },
    {
      field: "action",
      headerName: "ACTION",
      width: 120,
      sortable: false,
      renderCell: () => (
        <Button variant="contained" size="small">
          DOWNLOAD
        </Button>
      ),
    },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        VIEW EXISTING ROI ENTRY
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 2 }}>
        <FormControl sx={{ minWidth: 120 }} size="small">
          <InputLabel id="year-filter-label">YEAR</InputLabel>
          <Select
            labelId="year-filter-label"
            id="year-filter"
            value={filterYear}
            label="YEAR"
            onChange={(e: SelectChangeEvent<string>) => setFilterYear(e.target.value)}
          >
            <MenuItem value="All">All</MenuItem>
            {allYears.map((yr) => (
              <MenuItem key={yr} value={yr}>
                {yr}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button variant="contained" disabled>
          DOWNLOAD ALL
        </Button>
      </Box>

      <Paper style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 5, page: 0 },
            },
          }}
          pageSizeOptions={[5, 10, 20]}
          disableRowSelectionOnClick
          hideFooterSelectedRowCount
        />
      </Paper>
    </Box>
  );
} 