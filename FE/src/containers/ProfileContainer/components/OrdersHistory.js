import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

function OrdersHistory({ orders }) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Destination</StyledTableCell>
                        <StyledTableCell>From</StyledTableCell>
                        <StyledTableCell>To</StyledTableCell>
                        <StyledTableCell align="right">Total</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((row) => (
                        <StyledTableRow key={row.destination}>
                            <StyledTableCell component="th" scope="row">
                                {row.destination}
                            </StyledTableCell>
                            <StyledTableCell>{row.from}</StyledTableCell>
                            <StyledTableCell>{row.to}</StyledTableCell>
                            <StyledTableCell align="right">{row.price}&#36;</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

OrdersHistory.propTypes = {};

export default OrdersHistory;
