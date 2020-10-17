import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography>Employee Directory</Typography>
                </Toolbar>
            </AppBar>
            <div>
                <img alt="Employees Working" src="https://ywcachicago.org/wp-content/uploads/2016/08/092615_YWCA_Chicago_IL_CD_0417-1400x400.jpg" />
            </div>
        </>
    );
};

export default Header;