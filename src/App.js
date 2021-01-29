import React, { useState } from 'react';
import './App.css'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Grow } from '@material-ui/core';
import { ArrowRight } from '@material-ui/icons';
import { TabPanel, a11yProps, LinkTab } from './Content/tapModule';
import InputComponent from './Content/InputComponent';
import RadioComponent from './Content/RadioComponent';
import ResultTable from './Content/ResultTable';
import madeAPIData, { baselibeRowNames, DNA_suppressionRowNames } from './Module/madeAPIData';
import axios from 'axios';
import Header from './Content/Header/Header'
import ResultArea_1 from './Content/ResultArea_1'
import ResultArea_2 from './Content/ResultArea_2'


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

  },
}));

function createData(name, val1, val2, val3) {
  return { name, val1, val2, val3 };
}

export default function App() {
  const classes = useStyles();
  const [tabValue, setTapValue] = useState(0);
  const [tableVisible, setTableVisible] = useState(false);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);


  const handleTabChange = (event, newValue) => {
    setTableVisible(false);
    setTapValue(newValue);
  };


  const handleSend = async () => {
    try {
      const restAPIData = madeAPIData(tabValue, result);
      setLoading(true);
      if (restAPIData === 0) { setLoading(false); return; }
      const loadTest = await new Promise((res) => setTimeout(() => {res("test")}, 1000));
      const req = await axios.post("/data", restAPIData);

      let rowsNamePicker;

      if (tabValue === 0) rowsNamePicker = baselibeRowNames;
      else if (tabValue === 0) rowsNamePicker = DNA_suppressionRowNames;

      rows.splice(0);

      for (let i = 0; i < rowsNamePicker.length; i++) {
        rows.push(createData(rowsNamePicker[i], ...req.data[`group_${i + 1}`]));
      }

      setRows(rows);
      setLoading(false);

      if (tableVisible === false) setTableVisible(true);
    }
    catch (e) {
      //------test code--------//
      const fakeReq = {
        group_1: ["0.0%", "0.0%", "0.0%"],
        group_2: ["0.0%", "0.0%", "0.0%"],
        group_3: ["0.0%", "0.0%", "0.0%"],
        group_4: ["0.0%", "0.0%", "0.0%"],
        group_5: ["0.0%", "0.0%", "0.0%"],
      }
      let rowsNamePicker;
      if (tabValue === 0) rowsNamePicker = baselibeRowNames;
      else if (tabValue === 1) rowsNamePicker = DNA_suppressionRowNames;
      rows.splice(0);
      for (let i = 0; i < rowsNamePicker.length; i++) {
        rows.push(createData(rowsNamePicker[i], ...fakeReq[`group_${i + 1}`]));
      }
      setRows(rows);

      setLoading(false);
      if (tableVisible === false) setTableVisible(true);
    }
  }

  return (
    <>
      <Header title="Hepatocellular carcinoma prediction in Chronic hepatitis B
      Machine learning based prediction"></Header>
      <div className="App">
        <div className="tab-rapper">
          <div className={classes.root}>
            <AppBar className={classes.header} position="static">
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

            <TabPanel loading={loading} onSend={handleSend} value={tabValue} index={0}
              children_1={<ResultArea_1 result = {result}></ResultArea_1>}
              children_2={<ResultArea_2 result = {result}></ResultArea_2>}
            >
            </TabPanel>
          </div>
        </div>
        {tableVisible &&
          <>
            <Grow timeout={1000} in={tableVisible}>
              <ArrowRight fontSize="large"></ArrowRight>
            </Grow>
            <Grow timeout={1500} in={tableVisible}>
              <div><ResultTable loading = {loading} rows={rows}></ResultTable></div>
            </Grow>
          </>
        }
      </div>
    </>
  );
}