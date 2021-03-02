import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { Button, CircularProgress } from '@material-ui/core';
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
    const formRef = React.useRef();
    const { onSend, loading, rangeFilter, result , setTableVisible, setResult} = props;
    const [sex, setSex] = useState('');
    const [race, setRace] = useState('');
    const [antivirals, setAntivirals] = useState('');
    const [cirrhosis, setCirrhosis] = useState('');
    const [hebeag, setHebeag] = useState('');


    return (

        <Box className={classes.root} p={3}>
            <form className="input_form"
                ref = {formRef}
                role="tabpanel"
                id={`nav-tabpanel-1`}
                aria-labelledby={`nav-tab-1`}
            >
                <InputComponent
                    type="number"
                    min={rangeFilter?.age?.min}
                    max={rangeFilter?.age?.max}
                    lable="Age"
                    adornment="Years"
                    setInputVal={age => setResult({...result, age})}
                ></InputComponent>
                <RadioComponent
                    val = {sex}
                    setVal = {setSex}
                    title="Sex"
                    value1={"true"}
                    value2={"false"}
                    lable1="male"
                    lable2="female"
                    setRadioVal={male => setResult({...result, male})}
                ></RadioComponent>
                <InputComponent
                    type="number"
                    lable="Platelet, baseline"
                    min={rangeFilter?.platelet?.min}
                    max={rangeFilter?.platelet?.max}
                    adornment={<>x1000mm<sup className="mutip">3</sup></>}
                    setInputVal={platelet => setResult({...result, platelet})}
                ></InputComponent>
                <RadioComponent
                    val = {race}
                    setVal = {setRace}
                    title="Race"
                    value1={"Asian"}
                    value2={"Caucasian"}
                    lable1="Asian"
                    lable2="Caucasian"
                    setRadioVal={race => setResult({...result, race})}
                ></RadioComponent>
                <InputComponent
                    type="number"
                    lable="Albumin, baseline"
                    min={rangeFilter?.albumin?.min}
                    max={rangeFilter?.albumin?.max}
                    adornment="g/dL"
                    setInputVal={albumin => setResult({...result, albumin})}
                ></InputComponent>
                <RadioComponent
                    val = {antivirals}
                    setVal = {setAntivirals}
                    title="Antivirals agent"
                    value1={"entecavir"}
                    value2={"tenofovir"}
                    lable1="entecavir"
                    lable2="tenofovir"
                    setRadioVal={antivirals => setResult({...result, antivirals})}
                ></RadioComponent>
                <InputComponent
                    // val = {totalBilirubin}
                    // setVal = {setTotalBilirubin}
                    type="number"
                    lable="Total bilirubin, baseline"
                    min={rangeFilter?.total_bilirubin?.min}
                    max={rangeFilter?.total_bilirubin?.max}
                    adornment="mg/dL"
                    setInputVal={total_bilirubin => setResult({...result, total_bilirubin})}
                ></InputComponent>
                <RadioComponent
                    val = {cirrhosis}
                    setVal = {setCirrhosis}
                    title="Cirrhosis, baseline"
                    value1={"true"}
                    value2={"false"}
                    lable1="yes"
                    lable2="no"
                    setRadioVal={cirrhosis =>  setResult({...result, cirrhosis})}
                ></RadioComponent>
                <InputComponent
                    // val = {alt}
                    // setVal = {setAlt}
                    type="number"
                    lable="ALT, baseline"
                    min={rangeFilter?.ALT?.min}
                    max={rangeFilter?.ALT?.max}
                    adornment="U/L"
                    setInputVal={ALT => setResult({...result, ALT})}
                ></InputComponent>
                <RadioComponent
                    val = {hebeag}
                    setVal = {setHebeag}
                    title="Presence of HBeAg, baseline"
                    value1={"true"}
                    value2={"false"}
                    lable1="yes"
                    lable2="no"
                    setRadioVal={presence_of_HBeAg => setResult({...result, presence_of_HBeAg})}
                ></RadioComponent>
                <InputComponent
                    // val = {hbv_dna}
                    // setVal = {setHbv_dna}
                    type="number"
                    lable="HBV DNA, baseline"
                    min={rangeFilter?.HBV_DNA?.min}
                    max={rangeFilter?.HBV_DNA?.max}
                    adornment="IU/mL"
                    setInputVal={HBV_DNA =>  setResult({...result, HBV_DNA})}
                ></InputComponent>

            </form>
            <div>
                <Button
                    style = {{width : 142}}
                    variant="contained"
                    color="primary"
                    className={classes.sendButton}
                    onClick={onSend}
                    disabled={loading}
                >{loading ?
                    <><CircularProgress size={24} className={classes.buttonProgress} />&nbsp;</> :
                    <><SendOutlined className={classes.icon} ></SendOutlined>prediction</>
                    }
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.sendButton}
                    onClick={() => {
                        setSex('');
                        setRace('');
                        setAntivirals('');
                        setCirrhosis('');
                        setHebeag('');
                        setTableVisible(false);
                        formRef.current.reset();
                        setResult({});
                    }}
                    disabled={loading}
                    style = {{marginRight : 10}}
                >clear
                </Button>
                </div>

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