import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TableBody, TableContainer, TableRow, TableCell, Table, TableHead } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 500,
    },
}));

function createData(name, val1, val2, val3) {
    return { name, val1, val2, val3 };
  }

export default function ResultTable({result}) {
    const classes = useStyles();
    const [rows, setRows] = React.useState([
        createData("0~0.025 (Group 1)", "0.0%", "0.0%", "0.0%"),
        createData("0.025~0.3 (Group 2)", "0.0%", "0.0%", "0.0%"),
        createData("0.3~1.0 (Group 3)", "0.0%", "0.0%", "0.0%"),]
    )
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
        </div>
    )
}
