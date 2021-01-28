import React from 'react';
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { Collapse, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SendOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "grid",
        gap: "25px"
    },
    icon: {
        marginRight: "3px",
        width: "0.7em"
    },
    sendButton : {
        float : 'right'
    }
}));

export function TabPanel(props) {
    const classes = useStyles();
    const { children_1, children_2, value, index, onSend,...other } = props;

    return (

        <Box className={classes.root} p={3}>
            <form className="input_form"
                role="tabpanel"
                id={`nav-tabpanel-1`}
                aria-labelledby={`nav-tab-1`}
                {...other}
            >
                {children_1}

            </form>
            <Collapse in={(value === 1)}>
                <form className="input_form"
                    role="tabpanel"
                    id={`nav-tabpanel-2`}
                    aria-labelledby={`nav-tab-2`}
                    {...other}
                >
                    {children_2}
                </form>
            </Collapse>
            <div>
                <Button
                variant="contained"
                color="primary"
                className={classes.sendButton}
                onClick = {onSend}
                >
                    <SendOutlined className={classes.icon} ></SendOutlined>
                    Send
                </Button></div>

        </Box>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

export function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}