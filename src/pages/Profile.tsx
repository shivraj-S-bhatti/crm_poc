// import React from 'react'; // Unused React import
import { Card, CardContent, Grid, Typography, TextField, Box } from '@mui/material';
import { wdProfile } from '../data/dummyData';

export default function Profile() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        WD PROFILE
      </Typography>

      <Card variant="outlined">
        <CardContent>
          <Grid container spacing={2}>
            {/* @ts-ignore */}
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2">WD CODE</Typography>
              <TextField fullWidth value={wdProfile.wdCode} disabled InputLabelProps={{ shrink: true }} />
            </Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2">WD NAME</Typography>
              <TextField fullWidth value={wdProfile.wdName} disabled InputLabelProps={{ shrink: true }} />
            </Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2">WD TYPE</Typography>
              <TextField fullWidth value={wdProfile.wdType} disabled InputLabelProps={{ shrink: true }} />
            </Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2">CHANNEL</Typography>
              <TextField fullWidth value={wdProfile.channel} disabled InputLabelProps={{ shrink: true }} />
            </Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2">WD TOWN</Typography>
              <TextField fullWidth value={wdProfile.town} disabled InputLabelProps={{ shrink: true }} />
            </Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2">WD OWNER NAME</Typography>
              <TextField fullWidth value={wdProfile.ownerName} disabled InputLabelProps={{ shrink: true }} />
            </Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2">WD OWNER MOBILE</Typography>
              <TextField fullWidth value={wdProfile.ownerMobile} disabled InputLabelProps={{ shrink: true }} />
            </Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2">WD OWNER EMAIL</Typography>
              <TextField fullWidth value={wdProfile.ownerEmail} disabled InputLabelProps={{ shrink: true }} />
            </Grid>
            {/* @ts-ignore */}
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2">BRANCH NAME & CODE</Typography>
              <TextField fullWidth value={`${wdProfile.branchName} & ${wdProfile.branchCode}`} disabled InputLabelProps={{ shrink: true }} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
} 