import React, { useState, useEffect } from 'react';
import './App.css'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Grow } from '@material-ui/core';
import { ArrowRight } from '@material-ui/icons';
import { TabPanel, a11yProps, LinkTab } from './Content/tapModule';
import ResultTable from './Content/ResultTable';
import madeAPIData, { baselibeRowNames, DNA_suppressionRowNames } from './Module/madeAPIData';
import axios from 'axios';
import Header from './Content/Header/Header'
import TapAreaSt from './Content/TapAreaFirst'
import TapAreaNd from './Content/TapAreaSecond'


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
  const [rangeFilter, setRangeFilter] = useState({});

  useEffect(() => {
    const getRange = async () => {
      try {
        const res = await axios.get("/limits");
        setRangeFilter(res.data);
      } catch (error) {
        let test = {
          ALT: { min: 1, max: 5994 },
          ALT_DNA: { min: 1, max: 5994 },
          HBV_DNA: { min: 0, max: 4520000000 },
          HBV_DNA_dna: { min: 0, max: 3205 },
          age: { min: 19, max: 94 },
          albumin: { min: 1, max: 7.2 },
          albumin_dna: { min: 1.3, max: 5.4 },
          platelet: { min: 5, max: 662 },
          platelet_dna: { min: 13, max: 670 },
          total_bilirubin: { min: 0.2, max: 222 },
          total_bilirubin_dna: { min: 0.1, max: 34.7 },
        }
        setRangeFilter(test);
      }
      
    }
    getRange();

  }, [])


  const handleTabChange = (event, newValue) => {
    setTableVisible(false);
    setTapValue(newValue);
  };


  const handleSend = async () => {
    try {
      const restAPIData = madeAPIData(tabValue, result);
      setLoading(true);
      if (restAPIData === 0) { setLoading(false); return; }
      const res = await axios.post("/data", restAPIData);

      let rowsNamePicker;

      if (tabValue === 0) rowsNamePicker = baselibeRowNames;
      else if (tabValue === 0) rowsNamePicker = DNA_suppressionRowNames;

      rows.splice(0);

      for (let i = 0; i < rowsNamePicker.length; i++) {
        rows.push(createData(rowsNamePicker[i], ...res.data[`group_${i + 1}`]));
      }

      setRows(rows);
      setLoading(false);

      if (tableVisible === false) setTableVisible(true);
    }
    catch (e) {
      setLoading(false);
      console.log(e);
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
              children_1={<TapAreaSt rangeFilter={rangeFilter} result={result}></TapAreaSt>}
              children_2={<TapAreaNd rangeFilter={rangeFilter} result={result}></TapAreaNd>}
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
              <div><ResultTable loading={loading} rows={rows}></ResultTable></div>
            </Grow>
          </>
        }
      </div>
    </>
  );
}