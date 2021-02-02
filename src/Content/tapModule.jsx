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
        width : 80,
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
    tab : {
        backgroundColor : "#4951d9",
        borderRadius: "10px 10px 0px 0px"
    },
    selectTab : {
        backgroundColor : "#b0d2a4"
    }
}));

export function TabPanel(props) {
    const classes = useStyles();
    const { children_1, children_2, value, onSend,loading } = props;

    return (

        <Box className={classes.root} p={3}>
            <form className="input_form"
                role="tabpanel"
                id={`nav-tabpanel-1`}
                aria-labelledby={`nav-tab-1`}
            >
                {children_1}

            </form>
            <Collapse in={(value === 1)}>
                <form className="input_form"
                    role="tabpanel"
                    id={`nav-tabpanel-2`}
                    aria-labelledby={`nav-tab-2`}
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
                disabled = {loading}
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
    const classes = useStyles();
    return (
        <Tab
            // classes = {{
            //     root : classes.tab,
            //     selected : classes.selectTab
            // }}
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}