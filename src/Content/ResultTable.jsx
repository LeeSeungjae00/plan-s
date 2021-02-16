import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TableBody, TableContainer, TableRow, TableCell, Table, TableHead, CircularProgress } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { Bar } from 'react-chartjs-2';


const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 432,
    },
    Progress: {
        color: "blue",
        alignSelf: "center",
    },
}));

const options = {
    legend: {
        display: false, // label 숨기기
    },
    scales: {
        yAxes: [{
            ticks: {
                min: 0, // 스케일에 대한 최솟갓 설정, 0 부터 시작
                stepSize: 5, // 스케일에 대한 사용자 고정 정의 값
            }
        }]
    },
    maintainAspectRatio: false // false로 설정 시 사용자 정의 크기에 따라 그래프 크기가 결정됨.
}



export default function ResultTable({ rows, loading }) {
    const classes = useStyles();

    const data = {
        labels: ['3yr', '5yr', '8yr' , '10yr', '12yr' ,'14yr','16yr','18yr'],
        legend: {
            display: false, // label 숨기기
        },
        datasets: [
            {

                label: "",
                type: 'line',
                legend: false,
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 2,
                fill: false,
                data: [
                    rows[0].val1, rows[0].val2, rows[0].val3,
                    rows[0].val4, rows[0].val5, rows[0].val6,
                    rows[0].val7, rows[0].val8
                ],
            },
            {
                label: "",
                type: 'bar',
                legend: false,
                backgroundColor: 'rgb(255, 99, 132)',
                data: [
                    rows[0].val1, rows[0].val2, rows[0].val3,
                    rows[0].val4, rows[0].val5, rows[0].val6,
                    rows[0].val7, rows[0].val8
                ],
                borderColor: 'white',
                borderWidth: 2,
            },
        ],
    }


    return (
        <div className="result-rapper">
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    {loading ?
                        <div className="tableLoding-rappeer" style={{
                            height: 343
                        }}>
                            <CircularProgress className={classes.Progress} size={50}></CircularProgress>
                        </div> :
                        <>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">3yr</TableCell>
                                    <TableCell align="right">5yr</TableCell>
                                    <TableCell align="right">8yr</TableCell>
                                    <TableCell align="right">10yr</TableCell>
                                    <TableCell align="right">12yr</TableCell>
                                    <TableCell align="right">14yr</TableCell>
                                    <TableCell align="right">16yr</TableCell>
                                    <TableCell align="right">18yr</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    rows.map((row) => (
                                        <TableRow key={row.name}>
                                            <TableCell align="right">{row.val1 + "%"}</TableCell>
                                            <TableCell align="right">{row.val2 + "%"}</TableCell>
                                            <TableCell align="right">{row.val3 + "%"}</TableCell>
                                            <TableCell align="right">{row.val4 + "%"}</TableCell>
                                            <TableCell align="right">{row.val5 + "%"}</TableCell>
                                            <TableCell align="right">{row.val6 + "%"}</TableCell>
                                            <TableCell align="right">{row.val7 + "%"}</TableCell>
                                            <TableCell align="right">{row.val8 + "%"}</TableCell>
                                        </TableRow>
                                    ))
                                }
                                <TableCell colSpan={8}>
                                    <div style={{ width: '100%', height: 200 }}>
                                        <Bar width={400}
                                            height={200} data={data} options={options} />
                                    </div>
                                </TableCell>
                            </TableBody>

                        </>}

                </Table>

            </TableContainer>
        </div>
    )
}
