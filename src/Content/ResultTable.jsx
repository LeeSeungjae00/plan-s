import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TableBody, TableContainer, TableRow, TableCell, Table, TableHead, CircularProgress } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { defaults , Bar } from 'react-chartjs-2';


const useStyles = makeStyles((theme) => ({
    table: {
        width: 700,
    },
    Progress: {
        color: "blue",
        alignSelf: "center",
    },
    tbCell : {
        padding : "10px 0px",
        fontSize : '0.87rem'
    }
}));


defaults.global.defaultFontSize = 17
export default function ResultTable({ rows, loading, pill }) {
    const classes = useStyles();

    

    const options = {
        legend: {
            display: false, // label 숨기기
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0, // 스케일에 대한 최솟갓 설정, 0 부터 시작
                    max: Math.max(
                        rows[0].val1, rows[0].val2, rows[0].val3,
                        rows[0].val4, rows[0].val5, rows[0].val6,
                        rows[0].val7, rows[0].val8, rows[0].val9,
                        rows[0].val10
                    ) > 90 ? 100 : Math.max(
                        rows[0].val1, rows[0].val2, rows[0].val3,
                        rows[0].val4, rows[0].val5, rows[0].val6,
                        rows[0].val7, rows[0].val8, rows[0].val9,
                        rows[0].val10
                    )+5,
                    stepSize : 1
                }
            }]
        },
        defaultFontSize : 20,
        maintainAspectRatio: false // false로 설정 시 사용자 정의 크기에 따라 그래프 크기가 결정됨.
    }
    

    const data = {
        labels: ['1yr', '2yr', '3yr' , '4yr', '5yr' ,'6yr','7yr','8yr','9yr','10yr'],
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
                    rows[0].val7, rows[0].val8, rows[0].val9,
                    rows[0].val10
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
                    rows[0].val7, rows[0].val8, rows[0].val9,
                    rows[0].val10
                ],
                borderColor: 'white',
                borderWidth: 1,
            },
        ],
    }


    return (
        <div className="result-rapper">
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table" size = "small">
                    {loading ?
                        <div className="tableLoding-rappeer" style={{
                            height: 458
                        }}>
                            <CircularProgress className={classes.Progress} size={50}></CircularProgress>
                        </div> :
                        <>
                            <TableHead>
                                <TableRow>
                                    <TableCell className = {classes.tbCell} align="right">Year(s)</TableCell>
                                    <TableCell className = {classes.tbCell} align="right">1</TableCell>
                                    <TableCell className = {classes.tbCell} align="right">2</TableCell>
                                    <TableCell className = {classes.tbCell} align="right">3</TableCell>
                                    <TableCell className = {classes.tbCell} align="right">4</TableCell>
                                    <TableCell className = {classes.tbCell} align="right">5</TableCell>
                                    <TableCell className = {classes.tbCell} align="right">6</TableCell>
                                    <TableCell className = {classes.tbCell} align="right">7</TableCell>
                                    <TableCell className = {classes.tbCell} align="right">8</TableCell>
                                    <TableCell className = {classes.tbCell} align="right">9</TableCell>
                                    <TableCell className = {classes.tbCell} align="right">10</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    rows.map((row) => (
                                        <TableRow key = {row.val1}>
                                            <TableCell className = {classes.tbCell} align="right"></TableCell>
                                            <TableCell className = {classes.tbCell} align="right">{row.val1 + "%"}</TableCell>
                                            <TableCell className = {classes.tbCell} align="right">{row.val2 + "%"}</TableCell>
                                            <TableCell className = {classes.tbCell} align="right">{row.val3 + "%"}</TableCell>
                                            <TableCell className = {classes.tbCell} align="right">{row.val4 + "%"}</TableCell>
                                            <TableCell className = {classes.tbCell} align="right">{row.val5 + "%"}</TableCell>
                                            <TableCell className = {classes.tbCell} align="right">{row.val6 + "%"}</TableCell>
                                            <TableCell className = {classes.tbCell} align="right">{row.val7 + "%"}</TableCell>
                                            <TableCell className = {classes.tbCell} align="right">{row.val8 + "%"}</TableCell>
                                            <TableCell className = {classes.tbCell} align="right">{row.val9 + "%"}</TableCell>
                                            <TableCell className = {classes.tbCell} align="right">{row.val10 + "%"}</TableCell>
                                        </TableRow>
                                    ))
                                }
                                <TableRow>
                                <TableCell colSpan={11}>
                                    <div style={{ width: '100%', height: 300 }}>
                                        <Bar width={400} height={200} data={data} options={options} />
                                    </div>
                                </TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell colSpan={9}>
                                    <div style={{ width: '100%', display : "flex"}}>
                                    <img src="https://img.icons8.com/3d-fluency/20/000000/3d-fluency-pill.png"/> Antiviral Recommendation:{pill}
                                    </div>
                                </TableCell>
                                </TableRow>
                            </TableBody>

                        </>}

                </Table>

            </TableContainer>
        </div>
    )
}


