import React , {useRef}from 'react';
import './App.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import { TabPanel, a11yProps, LinkTab } from './Content/tapModule'
import {FormGroup,TableBody, TableContainer,TableRow,TableCell,Table,TableHead,InputAdornment, FormControl, Input, InputLabel, Radio , FormLabel , RadioGroup, FormControlLabel} from '@material-ui/core';
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
  radiolist : {
    justifyContent: "space-evenly",
  },
  table: {
    minWidth: 300,
  },
}));

function createData(name,val1, val2, val3) {
  return {name, val1, val2, val3 };
}

// const rows = [
//   createData("0~0.025 (Group 1)","0.0%","0.0%","0.0%"),
//   createData("0.025~0.3 (Group 2)","0.0%","0.0%","0.0%"),
//   createData("0.3~1.0 (Group 3)","0.0%","0.0%","0.0%"),
// ];

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [row, setRow] = React.useState([
    createData("0~0.025 (Group 1)","0.0%","0.0%","0.0%"),
    createData("0.025~0.3 (Group 2)","0.0%","0.0%","0.0%"),
    createData("0.3~1.0 (Group 3)","0.0%","0.0%","0.0%"),]
  )
  const ageRef = useRef();
  let sexValue = "";


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSend = () => {
    console.log(ageRef.current.value);
    console.log(sexValue);
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
          
          <TabPanel onSend = {handleSend} value={value} index={0}
            children_1 = {
              <>
              <InputComponent 
                lable = "Age"
                adornment = "Years"
                refProp = {ageRef}
              ></InputComponent>
              {/* <FormControl component="fieldset">
                <FormLabel component="legend">Sex</FormLabel>
                <RadioGroup className = {classes.radiolist} row >
                  <FormControlLabel
                    value="male"
                    control={<Radio color="primary" />}
                    label="male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio color="primary" />}
                    label="female"
                  />
                </RadioGroup> */}
                <RadioComponent
                  title = "Age"
                  lable1 = "male"
                  lable2 = "female"
                  setRadioVal = {(value) => {sexValue = value;}}
                >
                </RadioComponent>
              <FormControl>
                <InputLabel htmlFor="1_Platelet">Platelet, baseline</InputLabel>
                <Input
                  endAdornment={<InputAdornment position="end">x1000mm<sup className = "mutip">3</sup></InputAdornment>}
                  id="1_Platelet">
                </Input>
              </FormControl>
              <FormControl component="fieldset">
                <FormLabel component="legend">Antivirals agent</FormLabel>
                <RadioGroup className = {classes.radiolist} row>
                  <FormControlLabel
                    value="entecavir"
                    control={<Radio color="primary" />}
                    label="entecavir"
                  />
                  <FormControlLabel
                    value="tenofovir"
                    control={<Radio color="primary" />}
                    label="tenofovir"
                  />
                </RadioGroup>
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="1_Albumin">Albumin, baseline</InputLabel>
                <Input
                  endAdornment={<InputAdornment position="end">g/dL</InputAdornment>}
                  id="1_Albumin" >
                </Input>
              </FormControl>
              <FormControl component="fieldset">
                <FormLabel component="legend">Cirrhosis, baseline</FormLabel>
                <RadioGroup className = {classes.radiolist} row aria-label="position" name="position">
                  <FormControlLabel
                    value="Cirrhosis_yes"
                    control={<Radio color="primary" />}
                    label="yes"
                  />
                  <FormControlLabel
                    value="Cirrhosis_no"
                    control={<Radio color="primary" />}
                    label="no"
                  />
                </RadioGroup>
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="1_Total">Total bilirubin, baseline</InputLabel>
                <Input
                  endAdornment={<InputAdornment position="end">mg/dL</InputAdornment>}
                  id="1_Total" >
                </Input>
              </FormControl>
              <FormControl component="fieldset">
                <FormLabel component="legend">Presence of HBeAg, baseline</FormLabel>
                <RadioGroup className = {classes.radiolist} row aria-label="position" name="position">
                  <FormControlLabel
                    value="Presence_yes"
                    control={<Radio color="primary" />}
                    label="yes"
                  />
                  <FormControlLabel
                    value="Presence_no"
                    control={<Radio color="primary" />}
                    label="no"
                  />
                </RadioGroup>
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="1_ALT">ALT, baseline</InputLabel>
                <Input
                  endAdornment={<InputAdornment position="end">U/L</InputAdornment>}
                  id="1_ALT" >
                </Input>
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="1_HBV">HBV DNA, baseline</InputLabel>
                <Input
                  endAdornment={<InputAdornment position="end">IU/mL</InputAdornment>}
                  id="1_HBV" >
                </Input>
              </FormControl>
            </>
            }
            children_2 = {
              <>
              <FormControl>
                <InputLabel htmlFor="Cirrhosis">Platelet, DNA suppression</InputLabel>
                <Input
                  endAdornment={<InputAdornment position="end">x1000mm<sup className = "mutip">3</sup></InputAdornment>}
                  id="Platelet">
                </Input>
              </FormControl>
              <FormControl component="fieldset">
                <FormLabel component="legend">Cirrhosis, DNA suppression</FormLabel>
                <RadioGroup className = {classes.radiolist} row aria-label="position" name="position">
                  <FormControlLabel
                    value="Cirrhosis"
                    control={<Radio color="primary" />}
                    label="yes"
                  />
                  <FormControlLabel
                    value="Cirrhosis"
                    control={<Radio color="primary" />}
                    label="no"
                  />
                </RadioGroup>
              </FormControl>
              
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
                <RadioGroup className = {classes.radiolist} row aria-label="position" name="position">
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