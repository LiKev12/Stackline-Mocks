import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Grid, CircularProgress } from '@mui/material';
import LineVisualization from './components/LineVisualization';
import TableVisualization from './components/TableVisualization';
import Header from './components/Header';
import LeftPane from './components/LeftPane';
import { sliceDataActions } from '../src/redux/SliceData';
import MockData from './mocks/data.json';
// import CircularProgress from '@mui/material/CircularProgress';

function App() {
    const dispatch = useDispatch();
    try {
        // const response = await axios({method: 'GET',url: '...'}); // stubbed out example API call
        const response = MockData;
        dispatch(sliceDataActions.setStateData(response)); // set state in redux
    } catch (e: any) {
        // stubbed out error handling
    }
    const sliceDataState = useSelector((state: any) => state.data);

    return (
        <React.Fragment>
            <Header />
            <Box sx={{ width: '100%', paddingBottom: '64px', backgroundColor: '#f6f8fa' }} />
            {sliceDataState.isLoading ? (
                <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CircularProgress />
                </Box>
            ) : (
                <Grid container direction="row" sx={{ backgroundColor: '#f6f8fa', paddingBottom: '64px' }}>
                    <Grid item>
                        <LeftPane
                            imgSrc={sliceDataState.data.image}
                            subtitle={sliceDataState.data.subtitle}
                            title={sliceDataState.data.title}
                        />
                    </Grid>
                    <Grid item sx={{ width: '70%' }}>
                        <Grid container direction="column">
                            <Grid item>
                                <LineVisualization data={sliceDataState.data.sales} />
                            </Grid>
                            <Grid item>
                                <TableVisualization data={sliceDataState.data.sales} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </React.Fragment>
    );
}

export default App;
