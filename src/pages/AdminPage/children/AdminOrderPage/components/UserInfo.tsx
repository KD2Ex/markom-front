import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import BoldH from "../../../../../components/styled/BoldH";
import order from "../../../../../store/order";
import ProductItem from "./ProductItem";

const UserInfo = ({rowSelectionModel}) => {

    const userOrder = order.orders.find(item => item.id === rowSelectionModel[0]);

    return (
        <>


            <Box>
                <Typography variant={'h5'} fontWeight={'bold'}>
                    Данные о клиенте
                </Typography>
                <Typography>
                    ФИО: {userOrder.user.fullName}
                </Typography>
                <Typography>
                    Адрес: {userOrder.user.address}
                </Typography>
                <Typography>
                    Телефон: {userOrder.user.phone}
                </Typography>
                <Typography>
                    Email: {userOrder.user.login}
                </Typography>
                <Typography>
                    Комментарий к заказу: {userOrder.information ? userOrder.information : 'Отсутствует' }
                </Typography>
            </Box>

            <Typography variant={'h5'} fontWeight={'bold'}>
                Товары в заказе
            </Typography>
            <Grid container spacing={2} sx={{
                mt: 2,
                maxHeight: '80vh',
                overflow: 'auto',
            }}>


                {userOrder?.items.map(item => (
                    <Grid key={item.id} item xs={6}>

                        <ProductItem item={item}/>

                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default UserInfo;