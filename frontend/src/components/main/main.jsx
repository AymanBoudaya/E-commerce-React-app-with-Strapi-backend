import { Box, Container, IconButton, Stack, Typography, useTheme } from '@mui/material'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import Rating from '@mui/material/Rating';
import Dialog from '@mui/material/Dialog';
import { Close } from '@mui/icons-material';
import ProductDetails from './ProductDetails';
import { useGetProductByNameQuery } from '../../Redux/product';

export default function Main() {

    const handleAlignment = (
        event, newValue,
    ) => {
        setmyData(newValue)
    };

    const theme = useTheme();
    const [value, setValue] = useState(2);

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    const allProductsAPI="products?populate=*"
    const menProductsAPI="products?populate=*&filters[category][$eq]=men"
    const womenProductsAPI="products?populate=*&filters[category][$eq]=women"

    const [myData, setmyData] = useState(allProductsAPI)
    const { data, error, isLoading } = useGetProductByNameQuery(myData)
    if(isLoading){
        return(
            <Typography variant='h6'>LOADING...</Typography>
        )
    }

    if(error){
        return(
            <Typography variant='h6'>{error.
// @ts-ignore
            message}</Typography>
        )
    }
    
    if (data){
    return (
        <Container sx={{ py: 9 }}>
            <Stack direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexWrap={"wrap"}
                gap={3}
            >

                <Box>
                    <Typography variant='h6'>
                        Selected Products
                    </Typography>
                    <Typography fontWeight={300} variant='body1'>
                        All our new arrivals in an exclusive brand selection
                    </Typography>
                </Box>
                <ToggleButtonGroup
                    value={myData}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                    sx={{
                        ".Mui-selected": {
                            border: "1px soolid rgba(233,69,96,0.5) !important",
                            color: "#e94560",
                            // backgroundColor:"initial",
                        }
                    }}
                >
                    <ToggleButton
                        sx={{ color: theme.palette.text.primary }}
                    value={allProductsAPI}
                    className='myButton' aria-label="left aligned"
                        color='error'>
                        All Products
                    </ToggleButton>
                    <ToggleButton
                        sx={{
                            mx: "16px !important",
                            color: theme.palette.text.primary
                        }}
                        className='myButton'
                        value={menProductsAPI}
                        aria-label="centered">
                        MEN CATEGORY
                    </ToggleButton>
                    <ToggleButton
                        sx={{ color: theme.palette.text.primary }}
                        className='myButton' value={womenProductsAPI}
                        aria-label="right aligned">
                        WOMEN CATEGORY
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
            <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
                {data.data.map((item) => {
                    return (
                        <Card key={item.id} sx={{ maxWidth: 333, mt: 6, ":hover .MuiCardMedia-root": { rotate: "1deg", scale: "1.1", transition: "0.35s" } }}>
                            <CardMedia
                                sx={{ height: 277 }}
                                // @ts-ignore
                                image={`${item.attributes.productImg.data[0].attributes.url}`}
                                
                                title="green iguana"
                            />
                            <CardContent>
                                <Stack
                                    direction={"row"}
                                    justifyContent={"space-between"}
                                    alignItems={"center"}
                                >
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.attributes.productTitle}
                                    </Typography>
                                    <Typography variant="subtitle1" component="p">
                                    TND{item.attributes.productPrice}
                                    </Typography>
                                </Stack>
                                <Typography variant="body2" color="text.secondary">
                                    {item.attributes.productDescription}
                                </Typography>
                            </CardContent>

                            <CardActions sx={{ justifyContent: "space-between" }}>
                                <Button onClick={handleClickOpen} sx={{ textTransform: "capitalize" }} size="small">
                                    <AddShoppingCartOutlinedIcon sx={{ mr: 1 }} fontSize='large' />
                                    Add to cart</Button>
                                <Rating name="read-only" value={item.attributes.productRating} readOnly precision={0.5} />
                            </CardActions>
                        </Card>
                    )
                })}

            </Stack>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
            >
                <IconButton onClick={handleClose}
                    sx={{ ":hover": { color: "red", rotate: "180deg", transition: "0.3s" }, position: "absolute", top: 0, right: 10 }}>
                    <Close />
                </IconButton>
                <ProductDetails/>
            </Dialog>
        </Container>
    )
}

}
