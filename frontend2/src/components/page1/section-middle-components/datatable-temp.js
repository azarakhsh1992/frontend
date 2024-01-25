import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.volkswagen.blue,
        color: theme.palette.common.white,
        height:'20px'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 10,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const arraySection = ["MaxTemp","MinTemp","MaxHum","MinHum","Avg"];

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
];

export default function DataTableTemp({Data}) {
    return (
        <Box display={'flex'} flexDirection={'column'}>
            {Data !== 'not_Defined' && arraySection.map((value, index) =>{
                return (
                  <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 60, maxHeight:30}} aria-label="customized table" size={'small'}>
                          <TableHead>
                              <TableRow>
                                  {Object.keys(Data[value]).map((value1, index1) =>{
                                      return (
                                        <StyledTableCell sx={{minWidth:60}}><Typography textAlign={'center'}>{value1}</Typography></StyledTableCell>
                                      );
                                    }
                                  )}
                              </TableRow>
                          </TableHead>
                          <TableBody>
                              <StyledTableRow key={index}>
                              {Object.keys(Data[value]).map((value1, index1) =>(
                                    <StyledTableCell>{Data[value][value1]}</StyledTableCell>
                              ))}
                              </StyledTableRow>
                          </TableBody>
                      </Table>
                  </TableContainer>
                );
            })}
        </Box>
    );
}
