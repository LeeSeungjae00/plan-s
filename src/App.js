import React from 'react';
import './App.css'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Grow } from '@material-ui/core';
import { TabPanel, a11yProps, LinkTab } from './Content/tapModule';
import InputComponent from './Content/InputComponent';
import RadioComponent from './Content/RadioComponent';
import ResultTable from './Content/ResultTable';
import { ArrowRight } from '@material-ui/icons';
import madeAPIData from './Module/madeAPIData';
import axios from 'axios';



const result = {};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    boxShadow: "1px 1px 6px 0px",
    borderRadius: "10px"
  },
  header: {
    borderRadius: "10px 10px 0px 0px",

  }
}));



export default function App() {
  const classes = useStyles();
  const [tabValue, setTapValue] = React.useState(0);
  const [tableVisible, setTableVisible] = React.useState(false);


  const handleTabChange = (event, newValue) => {
    setTableVisible(false);
    setTapValue(newValue);
  };


  const handleSend = async () => {
    try {
      const restAPIData = madeAPIData(tabValue, result);
      if (restAPIData === 0) return;

      const req = await axios.post("/data", restAPIData);

      

      if (tableVisible === false) setTableVisible(true);
    }
    catch (e) {
      console.log(e);
    }
  }


  return (
    <div className="App">
      <div className="tab-rapper">
        <div className={classes.root}>
          <AppBar
            className={classes.header}
            position="static">
            <Tabs
              variant="fullWidth"
              value={tabValue}
              onChange={handleTabChange}
              aria-label="nav tabs example"
            >
              <LinkTab label="Data from baseline (antivirals initiation)" href="/antiviralsinitiation" {...a11yProps(0)} />
              <LinkTab label="Data from baseline and HBV DNA suppression (<2,000IU/ml)" href="/HBVDNAsuppression" {...a11yProps(1)} />
            </Tabs>
          </AppBar>

          <TabPanel onSend={handleSend} value={tabValue} index={0}
            children_1={
              <>
                <InputComponent
                  type="number"
                  min="0"
                  lable="Age"
                  adornment="Years"
                  setInputVal={age => result.age = age}
                ></InputComponent>
                <RadioComponent
                  title="Sex"
                  lable1="male"
                  lable2="female"
                  setRadioVal={sex => result.sex = sex}
                ></RadioComponent>
                <InputComponent
                  type="number"
                  lable="Platelet, baseline"
                  adornment={<>x1000mm<sup className="mutip">3</sup></>}
                  setInputVal={platelet => result.platelet = platelet}
                ></InputComponent>
                <RadioComponent
                  title="Antivirals agent"
                  lable1="entecavir"
                  lable2="tenofovir"
                  setRadioVal={antivirals => result.antivirals = antivirals}
                ></RadioComponent>
                <InputComponent
                  type="number"
                  lable="Albumin, baseline"
                  adornment="g/dL"
                  setInputVal={albumin => result.albumin = albumin}
                ></InputComponent>
                <RadioComponent
                  title="Cirrhosis, baseline"
                  lable1="yes"
                  lable2="no"
                  setRadioVal={cirrhosis => result.cirrhosis = cirrhosis}
                ></RadioComponent>
                <InputComponent
                  type="number"
                  lable="Total bilirubin, baseline"
                  adornment="mg/dL"
                  setInputVal={total_bilirubin => result.total_bilirubin = total_bilirubin}
                ></InputComponent>
                <RadioComponent
                  title="Presence of HBeAg, baseline"
                  lable1="yes"
                  lable2="no"
                  setRadioVal={presence_of_HBeAg => result.presence_of_HBeAg = presence_of_HBeAg}
                ></RadioComponent>
                <InputComponent
                  type="number"
                  lable="ALT, baseline"
                  adornment="U/L"
                  setInputVal={ALT => result.ALT = ALT}
                ></InputComponent>
                <InputComponent
                  type="number"
                  lable="HBV DNA, baseline"
                  adornment="IU/mL"
                  setInputVal={HBV_DNA => result.HBV_DNA = HBV_DNA}
                ></InputComponent>
              </>
            }
            children_2={
              <>
                <InputComponent
                  type="number"
                  lable="Platelet, DNA suppression"
                  adornment={<>x1000mm<sup className="mutip">3</sup></>}
                  setInputVal={platelet_dna => result.platelet_dna = platelet_dna}
                ></InputComponent>
                <RadioComponent
                  title="Cirrhosis, DNA suppression"
                  lable1="yes"
                  lable2="no"
                  setRadioVal={cirrhosis_dna => result.cirrhosis_dna = cirrhosis_dna}
                ></RadioComponent>
                <InputComponent
                  type="number"
                  lable="Albumin, DNA suppression"
                  adornment="g/dL"
                  setInputVal={albumin_dna => result.albumin_dna = albumin_dna}
                ></InputComponent>
                <InputComponent
                  type="number"
                  lable="Total bilirubin, DNA suppression"
                  adornment="mg/dL"
                  setInputVal={total_bilirubin_dna => result.total_bilirubin_dna = total_bilirubin_dna}
                ></InputComponent>
                <InputComponent
                  type="number"
                  lable="ALT, DNA suppression"
                  adornment="U/L"
                  setInputVal={ATL_dna => result.ATL_dna = ATL_dna}
                ></InputComponent>
                <InputComponent
                  type="number"
                  lable="HBV DNA, DNA suppression"
                  adornment="IU/mL"
                  setInputVal={HBV_dna_dna => result.HBV_dna_dna = HBV_dna_dna}
                ></InputComponent>
                <RadioComponent
                  title="Presence of HBeAg, DNA suppression"
                  lable1="yes"
                  lable2="no"
                  setRadioVal={presence_of_HBeAg_dna => result.presence_of_HBeAg_dna = presence_of_HBeAg_dna}
                ></RadioComponent>
              </>
            }
          >
          </TabPanel>
        </div>
      </div>
      { tableVisible ?
        <>
          <Grow timeout={1000} in={tableVisible}>
            <ArrowRight fontSize="large"></ArrowRight>
          </Grow>
          <Grow in={tableVisible}
            style={{ transformOrigin: '0 0 0' }}
            {...(tableVisible ? { timeout: 1500 } : {})}>
            <div><ResultTable result={result}></ResultTable></div>
          </Grow></> : null
      }
    </div>
  );
}