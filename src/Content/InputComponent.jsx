import React from 'react'
import { InputAdornment, FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core';

export default function InputComponent({ lable, adornment, setInputVal, type, min, max }) {
    const [fonmHelper, setfonmHelper] = React.useState(false)
    return (
        <FormControl>
            <InputLabel htmlFor={lable + "_id"}>{lable}</InputLabel>
            <Input
                onChange={(e) => {
                    setfonmHelper(false);
                }}
                onBlur={(e) => {
                    if(e.target.value !== ""){
                        if (min > e.target.value * 1) {setfonmHelper(true); return;};
                        if (max < e.target.value * 1) {setfonmHelper(true); return;};
                        setInputVal(e.target.value * 1);
                    }else{
                        setfonmHelper(false);
                    }
                    
                }}
                type={type}
                endAdornment={<InputAdornment position="end">{adornment}</InputAdornment>}
                id={lable + "_id"}>
            </Input>
            {fonmHelper && <FormHelperText error id={lable + "-from-helper"}>{`Please enter a value from ${min} to ${max}.`}</FormHelperText>}
        </FormControl>
    )
}
