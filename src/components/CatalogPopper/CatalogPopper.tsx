import React from 'react';
import {Box, Popper, Typography} from "@mui/material";
import styles from "../MainPageBar/MainPageBar.module.css";
import groupCategories from "../../store/groupCategories";
import {Link} from "react-router-dom";
import catalog from "../../store/catalog";
import category from "../../store/category";

const CatalogPopper = ({group, handleClose, image}) => {



    return (
        <Box className={styles.catalogItem} onClick={handleClose}>
            <Link to={`/catalog/${group.id}`} style={{width: '100%',}}>
                <img style={{width: '100%', maxHeight: '250px'}} src={
                    catalog.products.filter(product => product.category.group?.id === group.id)?.find(item =>
                        item?.image
                    )?.image
                } alt=""/>

            </Link>
            <Typography component={Link} to={`/catalog/${group.id}`}  sx={{
                fontWeight: 'bold'
            }}>
                {group.name}
            </Typography>
            {category.categories.filter(cat => cat.group?.id === group.id).map(item => (
                <Link to={`/catalog/${group.id}_${item.id}`}>
                    {item.name}
                </Link>
            ))}
        </Box>
    );
};

export default CatalogPopper;
