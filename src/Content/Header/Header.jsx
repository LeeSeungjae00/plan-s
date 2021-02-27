import React from 'react'
import { Typography} from '@material-ui/core';
import './Header.css'
export default function Hedaer({title}) {
    return (
        <header className="header">
            <Typography style = {{fontSize : "1rem", lineHeight : 2}}  align="center" variant="overline" display="block">
                {title}
            </Typography>
        </header>
    )
}