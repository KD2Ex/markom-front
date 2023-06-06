import React, {useContext, useState} from 'react';
import {
    Alert,
    Box,
    Button,
    FormControlLabel,
    Grid,
    Modal,
    Radio,
    RadioGroup,
    Snackbar,
    TextField,
    Typography
} from "@mui/material";
import cart from "../../../store/cart";
import OrderService from "../../../api/services/OrderService";
import {AlertContext} from "../../../context";
import {getFullPrice} from "../../../utils/getFullPrice";

const OrderModal = ({open, setOpen}) => {

    const [comment, setComment] = useState('');
    const [payment, setPayment] = useState(true);

    const {setAlertOpen, setAlertMessage, setAlertType} = useContext(AlertContext)

    const handleChange = (e) => {

        setComment(e.target.value)

    }

    const handlePayment = (e) => {

        setPayment(e.target.value)

    }

    const handleSubmit = async () => {

        console.log(await OrderService.createOrder(payment, comment))
        await cart.fetchCart();
        setOpen(false);

        setAlertMessage('Заказ успешно оформлен')
        setAlertType('success')
        setAlertOpen(true)
    }

    const handleCancel = () => {
        setOpen(false);
    }

    return (
        <>

        <Modal
            open={open}
            onClose={() => setOpen(false)}
        >
            <Box sx={{
                position: 'absolute' as 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 600,
                bgcolor: 'background.paper',
                boxShadow: 8,
                p: 4,
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
            }}>

                <Typography variant={'h5'}>

                    Подтверждение заказа
                </Typography>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    overflow: 'auto',
                    maxHeight: '400px'
                }}>

                    {cart.cartItems.items.map(item => (
                        <Grid container spacing={0} sx={{
                            border: '1px solid green',
                            borderRadius: 2,
                            pt: 1
                        }}>

                            <Grid item xs={3}>
                                <img
                                    src={item.product.image}
                                    alt=""
                                    style={{
                                        width: '100%',
                                        height: '150px',
                                        objectFit: 'cover',
                                        padding: '8px'
                                    }}
                                />
                            </Grid>

                            <Grid item xs={6} sx={{px: 2}}>
                                <Typography>
                                    {item.product.title}{<br/>}
                                    {item.count}
                                    {item.product.measurement.name}
                                </Typography>
                            </Grid>

                            <Grid item xs={3}>
                                <Typography>
                                    {getFullPrice(item.product.price, item.count, item.product.discount)}₽
                                </Typography>
                            </Grid>

                        </Grid>
                    ))}
                </Box>


                <Typography>
                    Способ оплаты
                </Typography>

                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={payment}
                    onChange={handlePayment}
                >
                    <FormControlLabel value={true} control={<Radio />} label="Наличные" />
                    <FormControlLabel value={false} control={<Radio />} label="Банковской картой" />

                </RadioGroup>

                <Typography>
                    Комментарий к заказу
                </Typography>

                <TextField
                    value={comment}
                    onChange={handleChange}
                    variant={'outlined'}
                    multiline
                />

                <Button
                    onClick={handleSubmit}

                >
                    Оформить заказ
                </Button>

                <Button
                    onClick={handleCancel}
                >
                    Отмена
                </Button>

            </Box>
        </Modal>



        </>

    );
};

export default OrderModal;