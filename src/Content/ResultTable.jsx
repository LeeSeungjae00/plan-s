import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TableBody, TableContainer, TableRow, TableCell, Table, TableHead, CircularProgress } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 400,
        minHeight : 216,
    },
    table_b : {
        minWidth: 400,
        minHeight : 322,
    },
    Progress: {
        color: "blue",
        alignSelf : "center",
    },
}));



export default function ResultTable({ rows, loading }) {
    const classes = useStyles();

    return (
        <div className="result-rapper">
            <TableContainer component={Paper}>
                <Table className={rows.length === 3 ? classes.table : classes.table_b} aria-label="simple table">
                    {loading ?
                        <div className = "tableLoding-rappeer" style = {{
                            height : rows.length === 3 ? 216 : 322
                        }}>
                            <CircularProgress className = {classes.Progress} size={50}></CircularProgress>
                        </div>:
                        <>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Value</TableCell>
                                    <TableCell align="right">3yr</TableCell>
                                    <TableCell align="right">5yr</TableCell>
                                    <TableCell align="right">8yr</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
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
                        </>}
                </Table>
            </TableContainer>
        </div>
    )
}
