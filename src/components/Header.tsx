import React from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';
import StacklineLogo from '../assets/stackline_logo.svg';

const Header: React.FC = () => {
    return (
        <Box sx={{ marginBottom: '64px' }}>
            <AppBar>
                <Toolbar disableGutters sx={{ paddingLeft: '40px' }}>
                    <Box sx={{ width: '100px' }}>
                        <img src={StacklineLogo} alt="stackline-logo" />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
