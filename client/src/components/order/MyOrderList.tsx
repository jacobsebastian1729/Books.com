import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from "@mui/system/Unstable_Grid";
import Typography from "@mui/material/Typography";
import { Button, Rating } from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';


import MyOrderType from '../../redux/types/myorder';
import MyOrderItem from './MyOrderItem';



type MyOrder = {
    prop: MyOrderType;
}

export default function MyOrderList({prop}: MyOrder){
    return <div>
        <Box>
<TableContainer component={Paper} sx={{ mt: 2,ml: 5, mr: 5,width: .95}}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow
          sx={{ '&:last-child td, &:last-child th': { border: 2 } }}
          >
          <TableCell component="th" scope="row">
          <Grid
    container
    rowSpacing={1}
    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
  >
            <Grid xs={4}>
            
                <Typography>
                    ID: {prop._id}
                </Typography>
            
            </Grid>
            <Grid xs={4}>
            
            <Typography>
                    Date: {prop.date}
                </Typography>
            
            </Grid>
            <Grid xs={4}>
            
            <Button variant="contained">Track  <PlaceIcon/></Button>
            
            </Grid>
            </Grid>
            </TableCell>
            
          </TableRow>
        </TableHead>
        
      </Table>
    </TableContainer>
    </Box>
       
       {
        prop.productOrder.map((item) => {
            return <MyOrderItem key={item._id} prop = {item}/>
        })
       }
    </div>
}