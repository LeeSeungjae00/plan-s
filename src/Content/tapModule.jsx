import React from 'react';
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { Collapse, Button , CircularProgress } from '@material-ui/core';
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
        width : 50,
        float : 'right'
    },
    buttonProgress: {
        color: "#fff",
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
      },
}));

export function TabPanel(props) {
    const classes = useStyles();
    const { children_1, children_2, value, index, onSend,loading,...other } = props;

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
                >{loading ?
                    <><CircularProgress size={24} className = {classes.buttonProgress} />&nbsp;</>: 
                    <><SendOutlined className={classes.icon} ></SendOutlined>Send</>
                }
                   
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