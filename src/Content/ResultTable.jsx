import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TableBody, TableContainer, TableRow, TableCell, Table, TableHead, CircularProgress } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 400,
        maxWidth:"100vw"
    },
    Progress: {
        color: "#fff",
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}));



export default function ResultTable({rows, loading}) {
    const classes = useStyles();
    
    return (
        <div className="result-rapper">
            <TableContainer component={Paper}>
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
                        {!loading ? 
                             <TableRow key="loading">
                                 <CircularProgress size = {50}></CircularProgress>
                            </TableRow> :
                            rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.val1}</TableCell>
                                    <TableCell align="right">{row.val2}</TableCell>
                                    <TableCell align="right">{row.val3}</TableCell>
                                </TableRow>
                            ))
                        }
                        
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
