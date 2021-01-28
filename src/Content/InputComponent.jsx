import React, { useState } from 'react'
import { InputAdornment, FormControl, Input, InputLabel } from '@material-ui/core';

export default function InputComponent({ lable, adornment, setInputVal, type, min, max }) {
    const [value, setValue] = useState("");
    return (
        <FormControl>
            <InputLabel htmlFor={lable + "_id"}>{lable}</InputLabel>
            <Input
                type={type}
                // value = {value}
                onChange={(e) => {
                    if(min > e.nativeEvent.target.value) e.nativeEvent.target.value = "";
                    if(max < e.nativeEvent.target.value) e.nativeEvent.target.value = max;
                    if(e.nativeEvent.target.value != "") setInputVal(e.nativeEvent.target.value);

                }}
                endAdornment={<InputAdornment position="end">{adornment}</InputAdornment>}
                id={lable + "_id"}>
            </Input>
        </FormControl>
    )
}
