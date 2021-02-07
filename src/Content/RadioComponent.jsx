import React from 'react'
import { FormControl, Radio, FormLabel, RadioGroup, FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    radiolist : {
      justifyContent: "space-evenly",
      
    },
    radioLable : {
        minWidth : "121px" ,
        margin : 0
    }
  }));

export default function RadioComponent( {title ,lable1, lable2, value1,value2 , setRadioVal}) {
    const classes = useStyles();
    return (
        <FormControl fullWidth>
            <FormLabel >{title}</FormLabel>
            <RadioGroup className={classes.radiolist} onChange = {(e)=>{
                if(e.target.defaultValue === "true") {setRadioVal(true); return}
                if(e.target.defaultValue === "false") {setRadioVal(false); return}
                setRadioVal(e.target.defaultValue);
            }} row >
                <FormControlLabel
                    value={value1}
                    control={<Radio color="primary" />}
                    label={lable1}
                    className = {classes.radioLable}
                    
                />
                <FormControlLabel
                    value={value2}
                    control={<Radio color="primary" />}
                    label={lable2}
                    className = {classes.radioLable}
                />
            </RadioGroup>
        </FormControl>
    )
}
