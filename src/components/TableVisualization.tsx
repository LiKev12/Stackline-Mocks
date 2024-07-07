import React from 'react';
import { Box } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export interface ITableVisualizationProps {
    data: ITableVisualizationDataPointProps[];
}
export interface ITableVisualizationDataPointProps {
    retailSales: number;
    retailerMargin: number;
    unitsSold: number;
    weekEnding: string;
    wholesaleSales: number;
}

const TableVisualization: React.FC<ITableVisualizationProps> = (props: ITableVisualizationProps) => {
    var options = { style: 'currency', currency: 'USD' };
    var formatter = new Intl.NumberFormat('en-US', options);
    return (
        <Box
            style={{
                height: '500px',
                width: '100%',
                display: 'flex',
                backgroundColor: 'white',
            }}
        >
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>WEEK ENDING</TableCell>
                            <TableCell align="right">RETAIL SALES</TableCell>
                            <TableCell align="right">WHOLESALE SALES</TableCell>
                            <TableCell align="right">UNITS SOLD</TableCell>
                            <TableCell align="right">RETAILER MARGIN</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.data.map((row: ITableVisualizationDataPointProps, idx: number) => (
                            <TableRow
                                key={`${idx}_${row.weekEnding}`}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.weekEnding}
                                </TableCell>
                                <TableCell align="right">
                                    {formatter
                                        .format(row.retailSales)
                                        .substring(0, formatter.format(row.retailSales).length - 3)}
                                </TableCell>
                                <TableCell align="right">
                                    {formatter
                                        .format(row.wholesaleSales)
                                        .substring(0, formatter.format(row.retailerMargin).length - 3)}
                                </TableCell>
                                <TableCell align="right">{row.unitsSold}</TableCell>
                                <TableCell align="right">
                                    {formatter
                                        .format(row.retailerMargin)
                                        .substring(0, formatter.format(row.retailerMargin).length - 3)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default TableVisualization;
