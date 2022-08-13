import React, { useState, useEffect } from 'react';
import './App.css'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Grow } from '@material-ui/core';
import { ArrowRight } from '@material-ui/icons';
import { TabPanel, a11yProps, LinkTab } from './Content/tapModule';
import ResultTable from './Content/ResultTable';
import madeAPIData from './Module/madeAPIData';
import axios from 'axios';
import Header from './Content/Header/Header'




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    boxShadow: "1px 1px 6px 0px",
    borderRadius: "10px"
  },
  header: {
    borderRadius: "10px 10px 0px 0px",
    background: "#565656"
  },
}));

function createData(val1, val2, val3, val4, val5, val6, val7, val8, val9, val10) {
  return { val1, val2, val3, val4, val5, val6, val7, val8 ,val9, val10};
}

export default function App() {
  const [result, setResult] = useState({});
  const classes = useStyles();
  const [tabValue, setTapValue] = useState(0);
  const [tableVisible, setTableVisible] = useState(false);
  const [rows, setRows] = useState([]);
  const [rows2, setRows2] = useState([]);
  const [pill, setPill] = useState("");
  const [subgroup, setSubgroup] = useState("");
  const [loading, setLoading] = useState(false);
  const [rangeFilter, setRangeFilter] = useState({});

  useEffect(() => {
    const getRange = async () => {
      const res = await axios.get("/limits");
      setRangeFilter(res.data);
    }
    getRange();

  }, [])




  const handleTabChange = (event, newValue) => {
    // setTableVisible(false);
    setTapValue(newValue);
  };


  const handleSend = async () => {
    try {
      const dataCheck = madeAPIData(result,rangeFilter);
      console.log(dataCheck)
      if(dataCheck){
        alert(dataCheck)
        return
      }
      setLoading(true);
      const res = await axios.post("/data", result);
      console.log(res);
      rows.splice(0);
      rows2.splice(0);
      rows.push(createData(...res.data.TDF_result));
      rows2.push(createData(...res.data.ETV_result));
      setSubgroup(res.data.subgroup)
      setRows(rows);
      setRows2(rows2);
      setPill(res.data.antiviral)
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
      <Header title={
        <><span className = "maintitle">PLAN-S</span>
      <div className="subtitle">
            The <span className='subtitle-PLANB P'>P</span>rediction of&nbsp;
        <span className='subtitle-PLANB L'>L</span>iver cancer using
         <span className='subtitle-PLANB A'>A</span>rtificial intelligence-driven model for&nbsp;
        <span className='subtitle-PLANB N'>N</span>etwork – antiviral&nbsp;
        <span className='subtitle-PLANB B'>S</span>election</div></>}></Header>
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
                {/* <LinkTab label="Data from baseline and HBV DNA suppression (<2,000IU/ml)" href="/HBVDNAsuppression" {...a11yProps(1)} /> */}
              </Tabs>
            </AppBar>

            <TabPanel
              setResult ={setResult}
              setTableVisible={setTableVisible}
              rangeFilter={rangeFilter}
              result={result}
              loading={loading}
              onSend={handleSend}
              value={tabValue}
              index={0}>
            </TabPanel>
          </div>
        </div>
        {tableVisible &&
          <>
            <Grow timeout={1000} in={tableVisible}>
              <ArrowRight fontSize="large"></ArrowRight>
            </Grow>
            <Grow timeout={1500} in={tableVisible}>
              <div><ResultTable 
                pill = {pill} 
                subgroub = {subgroup} 
                rows2 = {rows2} 
                loading={loading} 
                rows={rows}></ResultTable></div>
            </Grow>
          </>
        }
      </div>
    </>
  );
}
