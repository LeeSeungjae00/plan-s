import React from 'react';
import './App.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import { TabPanel, a11yProps, LinkTab } from './Content/tapModule'
import { FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <div className="tab-rapper">
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs
              variant="fullWidth"
              value={value}
              onChange={handleChange}
              aria-label="nav tabs example"
            >
              <LinkTab label="Data from baseline (antivirals initiation)" href="/drafts" {...a11yProps(0)} />
              <LinkTab label="Data from baseline and HBV DNA suppression (<2,000IU/ml)" href="/trash" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <FormControl>
              <InputLabel htmlFor="1_AgeInput">Age</InputLabel>
              <Input id="1_AgeInput" ></Input>
              {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
            </FormControl>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <FormControl>
              <InputLabel htmlFor="1_AgeInput">Age</InputLabel>
              <Input id="1_AgeInput" ></Input>
              {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
            </FormControl>
          </TabPanel>
        </div>
      </div>
    </div>
  );
}