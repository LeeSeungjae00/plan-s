import React, { useState } from 'react'
import { FormControl, Radio, FormLabel, RadioGroup, FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    radiolist : {
      justifyContent: "space-evenly",
    },
  }));

export default function RadioComponent( {title ,lable1, lable2 , setRadioVal}) {
    const classes = useStyles();
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{title}</FormLabel>
            <RadioGroup className={classes.radiolist} onChange = {(e)=>{
                setRadioVal(e.target.defaultValue);
            }} row >
                <FormControlLabel
                    value={lable1}
                    control={<Radio color="primary" />}
                    label={lable1}
                />
                <FormControlLabel
                    value={lable2}
                    control={<Radio color="primary" />}
                    label={lable2}
                />
            </RadioGroup>
        </FormControl>
    )
}
