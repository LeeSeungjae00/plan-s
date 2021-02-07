import React from 'react';
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { Fade, Button, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SendOutlined } from '@material-ui/icons';
import InputComponent from './InputComponent';
import RadioComponent from './RadioComponent';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "grid",
        gap: "15px"
    },
    icon: {
        marginRight: "3px",
        width: "0.7em"
    },
    sendButton: {
        width: 80,
        float: 'right'
    },
    buttonProgress: {
        color: "#fff",
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    tab: {
        backgroundColor: "#565656",
        borderRadius: "10px 10px 0px 0px"
    },
    selectTab: {
        backgroundColor: "#4951d9"
    }
}));

export function TabPanel(props) {
    const classes = useStyles();
    const { value, onSend, loading, rangeFilter, result } = props;

    return (

        <Box className={classes.root} p={3}>
            <form className="input_form"
                role="tabpanel"
                id={`nav-tabpanel-1`}
                aria-labelledby={`nav-tab-1`}
            >
                {/* {children_1} */}
                <InputComponent
                    type="number"
                    min={rangeFilter?.age?.min}
                    max={rangeFilter?.age?.max}
                    lable="Age"
                    adornment="Years"
                    setInputVal={age => result.age = age}
                ></InputComponent>
                <RadioComponent
                    title="Sex"
                    value1={"true"}
                    value2={"false"}
                    lable1="male"
                    lable2="female"
                    setRadioVal={male => result.male = male}
                ></RadioComponent>
                <RadioComponent
                    title="Race"
                    value1={"Asian"}
                    value2={"Caucasian"}
                    lable1="Asian"
                    lable2="Caucasian"
                    setRadioVal={race => result.race = race}
                ></RadioComponent>
                <RadioComponent
                    title="Antivirals agent"
                    value1={"entecavir"}
                    value2={"tenofovir"}
                    lable1="entecavir"
                    lable2="tenofovir"
                    setRadioVal={antivirals => result.antivirals = antivirals}
                ></RadioComponent>
                <RadioComponent
                    title="Cirrhosis, baseline"
                    value1={"true"}
                    value2={"false"}
                    lable1="yes"
                    lable2="no"
                    setRadioVal={cirrhosis => result.cirrhosis = cirrhosis}
                ></RadioComponent>
                <Fade in={(value === 1)}>
                    <div>
                        <RadioComponent
                            title="Cirrhosis, DNA suppression"
                            value1={"true"}
                            value2={"false"}
                            lable1="yes"
                            lable2="no"
                            setRadioVal={cirrhosis_dna => result.cirrhosis_dna = cirrhosis_dna}
                        ></RadioComponent>
                    </div>
                </Fade>
                <InputComponent
                    type="number"
                    lable="Platelet, baseline"
                    min={rangeFilter?.platelet?.min}
                    max={rangeFilter?.platelet?.max}
                    adornment={<>x1000mm<sup className="mutip">3</sup></>}
                    setInputVal={platelet => result.platelet = platelet}
                ></InputComponent>
                <Fade in={(value === 1)}>
                    <div>
                        <InputComponent
                            type="number"
                            lable="Platelet, DNA suppression"
                            min={rangeFilter?.platelet_dna?.min}
                            max={rangeFilter?.platelet_dna?.max}
                            adornment={<>x1000mm<sup className="mutip">3</sup></>}
                            setInputVal={platelet_dna => result.platelet_dna = platelet_dna}
                        ></InputComponent>
                    </div>
                </Fade>
                <InputComponent
                    type="number"
                    lable="Albumin, baseline"
                    min={rangeFilter?.albumin?.min}
                    max={rangeFilter?.albumin?.max}
                    adornment="g/dL"
                    setInputVal={albumin => result.albumin = albumin}
                ></InputComponent>
                <Fade in={(value === 1)}>
                    <div>
                        <InputComponent
                            type="number"
                            lable="Albumin, DNA suppression"
                            min={rangeFilter?.albumin_dna?.min}
                            max={rangeFilter?.albumin_dna?.max}
                            adornment="g/dL"
                            setInputVal={albumin_dna => result.albumin_dna = albumin_dna}
                        ></InputComponent>
                    </div>
                </Fade>
                <InputComponent
                    type="number"
                    lable="Total bilirubin, baseline"
                    min={rangeFilter?.total_bilirubin?.min}
                    max={rangeFilter?.total_bilirubin?.max}
                    adornment="mg/dL"
                    setInputVal={total_bilirubin => result.total_bilirubin = total_bilirubin}
                ></InputComponent>
                <Fade in={(value === 1)}>
                    <div>
                        <InputComponent
                            type="number"
                            lable="Total bilirubin, DNA suppression"
                            min={rangeFilter?.total_bilirubin_dna?.min}
                            max={rangeFilter?.total_bilirubin_dna?.max}
                            adornment="mg/dL"
                            setInputVal={total_bilirubin_dna => result.total_bilirubin_dna = total_bilirubin_dna}
                        ></InputComponent>
                    </div>
                </Fade>
                <InputComponent
                    type="number"
                    lable="ALT, baseline"
                    min={rangeFilter?.ALT?.min}
                    max={rangeFilter?.ALT?.max}
                    adornment="U/L"
                    setInputVal={ALT => result.ALT = ALT}
                ></InputComponent>
                <Fade in={(value === 1)}>
                    <div>
                        <InputComponent
                            type="number"
                            lable="ALT, DNA suppression"
                            min={rangeFilter?.ALT_DNA?.min}
                            max={rangeFilter?.ALT_DNA?.max}
                            adornment="U/L"
                            setInputVal={ALT_DNA => result.ALT_DNA = ALT_DNA}
                        ></InputComponent>
                    </div>
                </Fade>
                <InputComponent
                    type="number"
                    lable="HBV DNA, baseline"
                    min={rangeFilter?.HBV_DNA?.min}
                    max={rangeFilter?.HBV_DNA?.max}
                    adornment="IU/mL"
                    setInputVal={HBV_DNA => result.HBV_DNA = HBV_DNA}
                ></InputComponent>
                <Fade in={(value === 1)}>
                    <div>
                        <InputComponent
                            type="number"
                            lable="HBV DNA, DNA suppression"
                            min={rangeFilter?.HBV_DNA_dna?.min}
                            max={rangeFilter?.HBV_DNA_dna?.max}
                            adornment="IU/mL"
                            setInputVal={HBV_DNA_dna => result.HBV_DNA_dna = HBV_DNA_dna}
                        ></InputComponent>
                    </div>
                </Fade>
                <RadioComponent
                    title="Presence of HBeAg, baseline"
                    value1={"true"}
                    value2={"false"}
                    lable1="yes"
                    lable2="no"
                    setRadioVal={presence_of_HBeAg => result.presence_of_HBeAg = presence_of_HBeAg}
                ></RadioComponent>
                <Fade in={(value === 1)}>
                    <div>
                        <RadioComponent
                            title="Presence of HBeAg, DNA suppression"
                            value1={"true"}
                            value2={"false"}
                            lable1="yes"
                            lable2="no"
                            setRadioVal={presence_of_HBeAg_dna => result.presence_of_HBeAg_dna = presence_of_HBeAg_dna}
                        ></RadioComponent>
                    </div>
                </Fade>



            </form>
            {/* <Collapse in={(value === 1)}>
                <form className="input_form"
                    role="tabpanel"
                    id={`nav-tabpanel-2`}
                    aria-labelledby={`nav-tab-2`}
                >
                    {children_2}
                </form>
            </Collapse> */}
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.sendButton}
                    onClick={onSend}
                    disabled={loading}
                >{loading ?
                    <><CircularProgress size={24} className={classes.buttonProgress} />&nbsp;</> :
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
        <>
        <Tab
            onFocus = {(e)=>{
                document.getElementById("Age_id").focus();
            }}
            classes={{
                root: classes.tab,
                selected: classes.selectTab
                
            }}
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
        </>
    );
}