import React, {FC, useState} from 'react';
import {
    Box,
    Collapse,
    IconButton,
    styled,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {KeyboardArrowDown, KeyboardArrowUp} from "@mui/icons-material";
import {IOrder} from "../../../../models/IOrder";


const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    '*': {
        fontSize: 17
    }
}));

interface RowProps {
    order: IOrder
}

const Row: FC<RowProps> = ({order}) => {

    const [open, setOpen] = useState();

    return (
        <React.Fragment>

            <TableRow key={order.id}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                </TableCell>
                <TableCell>
                    {
                        order.orderDate
                    }
                </TableCell>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.status.name}</TableCell>
                <TableCell align={'right'}>{order.cost}₽</TableCell>
            </TableRow>
            <StyledTableRow>
                <TableCell colSpan={5} sx={{p:0}}>
                    <Collapse in={open} unmountOnExit >
                        <Box sx={{m: 0}}>
                            <Typography variant={'h6'} sx={{pl: 1}}>
                                Товары
                            </Typography>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Наименование</TableCell>
                                        <TableCell>Категория</TableCell>
                                        <TableCell>Количество</TableCell>
                                        <TableCell>Стоимость</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {order.items.map(item => (
                                        <StyledTableRow>
                                            <TableCell>{item.product.title}</TableCell>
                                            <TableCell>{item.product.category?.name}</TableCell>
                                            <TableCell>{item.count}</TableCell>
                                            <TableCell>
                                                {item.discount
                                                    ? Math.floor((item.price * item.count) * ((100 - item.discount)  / 100))
                                                    : (item.price * item.count)
                                                } ₽
                                            </TableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </StyledTableRow>
        </React.Fragment>

    );
};

export default Row;