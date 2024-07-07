import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Filler } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler, Legend);

export interface ILineVisualizationProps {
    data: ILineVisualizationDataPointProps[];
}
export interface ILineVisualizationDataPointProps {
    retailSales: number;
    retailerMargin: number;
    unitsSold: number;
    weekEnding: string;
    wholesaleSales: number;
}

const LineVisualization: React.FC<ILineVisualizationProps> = (props: ILineVisualizationProps) => {
    const retailSales = props.data.map((point: ILineVisualizationDataPointProps) => point.retailSales);
    const wholesaleSales = props.data.map((point: ILineVisualizationDataPointProps) => point.wholesaleSales);
    const monthLabelsUsed = new Set();
    const mapMonthToLabel: { [key: string]: string } = {
        '01': 'JAN',
        '02': 'FEB',
        '03': 'MAR',
        '04': 'APR',
        '05': 'MAY',
        '06': 'JUN',
        '07': 'JUL',
        '08': 'AUG',
        '09': 'SEP',
        '10': 'OCT',
        '11': 'NOV',
        '12': 'DEC',
    };
    const monthLabels = props.data.map((point: ILineVisualizationDataPointProps) => {
        const month = point.weekEnding.split('-')[1]; // Ex. 2017-05-08 => 05 (may)
        if (!monthLabelsUsed.has(mapMonthToLabel[month])) {
            monthLabelsUsed.add(mapMonthToLabel[month]);
            return mapMonthToLabel[month];
        } else {
            return ''; // blank label
        }
    });
    return (
        <Box
            style={{
                display: 'flex',
                marginBottom: '64px',
                backgroundColor: 'white',
                padding: '24px',
            }}
        >
            <Grid container direction="column">
                <Grid item sx={{ marginBottom: '24px' }}>
                    <Box>
                        <Typography variant="h6">Retail Sales</Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <Line
                        data={{
                            labels: monthLabels,
                            datasets: [
                                {
                                    data: retailSales,
                                    backgroundColor: '#46a8f6',
                                    borderColor: '#46a8f6',
                                    pointBorderColor: '#46a8f6',
                                    pointBackgroundColor: '#46a8f6',
                                },
                                {
                                    data: wholesaleSales,
                                    backgroundColor: '#9ba5bf',
                                    borderColor: '#9ba5bf',
                                    pointBorderColor: '#9ba5bf',
                                    pointBackgroundColor: '#9ba5bf',
                                },
                            ],
                        }}
                        options={{
                            plugins: {
                                legend: {
                                    display: false,
                                },
                            },
                            scales: {
                                y: {
                                    title: {
                                        display: false,
                                    },
                                    display: false,
                                },
                                x: {
                                    ticks: {
                                        autoSkip: false,
                                        maxRotation: 0,
                                        minRotation: 0,
                                    },
                                    grid: {
                                        display: false,
                                    },
                                },
                            },
                            elements: {
                                point: {
                                    radius: 0,
                                },
                            },
                        }}
                    ></Line>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LineVisualization;
