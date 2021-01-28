import React, { useRef } from 'react';
import './App.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import { TabPanel, a11yProps, LinkTab } from './Content/tapModule'
import { FormGroup, TableBody, TableContainer, TableRow, TableCell, Table, TableHead, InputAdornment, FormControl, Input, InputLabel, Radio, FormLabel, RadioGroup, FormControlLabel } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import InputComponent from './Content/InputComponent'
import RadioComponent from './Content/RadioComponent';


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
  radiolist: {
    justifyContent: "space-evenly",
  },
  table: {
    minWidth: 300,
  },
}));

function createData(name, val1, val2, val3) {
  return { name, val1, val2, val3 };
}

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [row, setRow] = React.useState([
    createData("0~0.025 (Group 1)", "0.0%", "0.0%", "0.0%"),
    createData("0.025~0.3 (Group 2)", "0.0%", "0.0%", "0.0%"),
    createData("0.3~1.0 (Group 3)", "0.0%", "0.0%", "0.0%"),]
  )


  const result = {};


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSend = () => {
    console.log(result);
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
              value={value}
              onChange={handleChange}
              aria-label="nav tabs example"
            >
              <LinkTab label="Data from baseline (antivirals initiation)" href="/antiviralsinitiation" {...a11yProps(0)} />
              <LinkTab label="Data from baseline and HBV DNA suppression (<2,000IU/ml)" href="/HBVDNAsuppression" {...a11yProps(1)} />
            </Tabs>
          </AppBar>

          <TabPanel onSend={handleSend} value={value} index={0}
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
                >
                </RadioComponent>
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
                >
                </RadioComponent>
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
                >
                </RadioComponent>
                <InputComponent
                  type="number"
                  lable="Total bilirubin, baseline"
                  adornment="mg/dL"
                  setInputVal={total_bilirubin => result.total_bilirubin = total_bilirubin}
                ></InputComponent>
                <RadioComponent
                  title="Cirrhosis, baseline"
                  lable1="yes"
                  lable2="no"
                  setRadioVal={cirrhosis => result.cirrhosis = cirrhosis}
                >
                </RadioComponent>
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
                {/* <FormControl>
                  <InputLabel htmlFor="Cirrhosis">Platelet, DNA suppression</InputLabel>
                  <Input
                    endAdornment={<InputAdornment position="end">x1000mm<sup className="mutip">3</sup></InputAdornment>}
                    id="Platelet">
                  </Input>
                </FormControl> */}
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
                >
                </RadioComponent>
                <FormControl>
                  <InputLabel htmlFor="DNA_Albumin">albumin, DNA suppression</InputLabel>
                  <Input
                    endAdornment={<InputAdornment position="end">g/dL</InputAdornment>}
                    id="DNA_Albumin" >
                  </Input>
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="DNA_Total">Total bilirubin, DNA suppression</InputLabel>
                  <Input
                    endAdornment={<InputAdornment position="end">mg/dL</InputAdornment>}
                    id="DNA_Total" >
                  </Input>
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="DNA_ALT">ALT, DNA suppression</InputLabel>
                  <Input
                    endAdornment={<InputAdornment position="end">U/L</InputAdornment>}
                    id="DNA_ALT" >
                  </Input>
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="DNA_HBV">HBV DNA, DNA suppression</InputLabel>
                  <Input
                    endAdornment={<InputAdornment position="end">IU/mL</InputAdornment>}
                    id="DNA_HBV" >
                  </Input>
                </FormControl>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Presence of HBeAg, DNA suppression</FormLabel>
                  <RadioGroup className={classes.radiolist} row aria-label="position" name="position">
                    <FormControlLabel
                      value="HBeAg_yes"
                      control={<Radio color="primary" />}
                      label="yes"
                    />
                    <FormControlLabel
                      value="HBeAg_no"
                      control={<Radio color="primary" />}
                      label="no"
                    />
                  </RadioGroup>
                </FormControl>
              </>
            }
          >

          </TabPanel>
        </div>
      </div>
      {/* <div className="tab-rapper">
      <TableContainer component = {Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Value</TableCell>
            <TableCell align="right">3yr</TableCell>
            <TableCell align="right">5yr</TableCell>
            <TableCell align="right">8yr</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.val1}</TableCell>
              <TableCell align="right">{row.val2}</TableCell>
              <TableCell align="right">{row.val3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div> */}
    </div>
  );
}