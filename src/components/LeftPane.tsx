import React from 'react';
import { Box, Chip, Divider, Grid, Typography } from '@mui/material';

export interface ILeftPaneProps {
    imgSrc: string;
    title: string;
    subtitle: string;
}

const LeftPane: React.FC<ILeftPaneProps> = (props: ILeftPaneProps) => {
    return (
        <Box
            style={{
                height: '100vh',
                width: '300px',
                display: 'flex',
                paddingTop: '40px',
                margin: '0px 40px',
                backgroundColor: 'white',
            }}
        >
            <Grid container direction="column" alignItems="center">
                <Grid item>
                    <Box component="img" sx={{ width: '100px', height: '100px' }} src={props.imgSrc}></Box>
                </Grid>
                <Grid item>
                    <Typography variant="h6">{props.title}</Typography>
                </Grid>
                <Grid item sx={{ width: '240px', color: '#939393' }}>
                    <Typography variant="caption" align="center" display="block">
                        {props.subtitle}
                    </Typography>
                </Grid>
                <Divider sx={{ marginTop: '20px', marginBottom: '20px', width: '100%' }} />
                <Grid item>
                    <Grid container direction="row" sx={{ padding: '0px 24px' }}>
                        <Grid item sx={{ marginRight: '8px', marginBottom: '8px' }}>
                            <Chip label="Pantry" variant="outlined" sx={{ borderRadius: 1 }} />
                        </Grid>
                        <Grid item sx={{ marginRight: '8px', marginBottom: '8px' }}>
                            <Chip label="Obsolete" variant="outlined" sx={{ borderRadius: 1 }} />
                        </Grid>
                        <Grid item sx={{ marginRight: '8px', marginBottom: '8px' }}>
                            <Chip label="Blender" variant="outlined" sx={{ borderRadius: 1 }} />
                        </Grid>
                        <Grid item sx={{ marginRight: '8px', marginBottom: '8px' }}>
                            <Chip label="Lightning Deal" variant="outlined" sx={{ borderRadius: 1 }} />
                        </Grid>
                    </Grid>
                </Grid>
                <Divider sx={{ marginTop: '20px', marginBottom: '20px', width: '100%' }} />
            </Grid>
        </Box>
    );
};

export default LeftPane;
