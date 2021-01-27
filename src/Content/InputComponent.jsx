import React from 'react'
import {InputAdornment, FormControl, Input, InputLabel} from '@material-ui/core';

export default function InputComponent({lable,adornment, refProp}) {
    return (
        <FormControl>
            <InputLabel htmlFor={lable + "_id"}>{lable}</InputLabel>
            <Input
                inputRef = {refProp}
                endAdornment={<InputAdornment position="end">{adornment}</InputAdornment>}
                id={lable + "_id"}>
            </Input>
        </FormControl>
    )
}
