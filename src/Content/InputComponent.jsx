import React from 'react'
import { InputAdornment, FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core';

export default function InputComponent({ val, setVal,lable, adornment, setInputVal, type, min, max }) {
    const [fonmHelper, setfonmHelper] = React.useState(false)
    return (
        <FormControl fullWidth>
            <InputLabel htmlFor={lable + "_id"}>{lable}</InputLabel>
            <Input
                type = "number"
                // value = {val}
                onChange={(e) => {
                    setfonmHelper(false);
                    // setVal(e.target.value);
                }}
                onBlur={(e) => {
                    if(e.target.value !== ""){
                        if (min > e.target.value * 1 || max < e.target.value * 1) {
                            setInputVal("RangeOut");
                            setfonmHelper(true);
                            return;
                        };
                        setInputVal(e.target.value * 1);
                    }else{
                        setfonmHelper(false);
                    }
                    
                }}
                type={type}
                endAdornment={<InputAdornment position="end">{adornment}</InputAdornment>}
                id={lable + "_id"}>
            </Input>
            {fonmHelper && <FormHelperText error id={lable + "-from-helper"}>{`Please enter a value from ${min} to ${max}`}</FormHelperText>}
        </FormControl>
    )
}
