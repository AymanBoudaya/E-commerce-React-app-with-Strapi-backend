import { AddShoppingCartOutlined } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

export default function ProductDetails() {
  return (
    <Box sx={{display:"flex", alignItems:"center", gap:2.5, flexDirection:{xs:"column", sm:"row"}}}>
        <Box sx={{display:"flex"}}>
            <img width={300} height={333}
            src="src\img\Xiaomi-Band-7-cover-2.jpg" alt="" />
        </Box>
        <Box sx={{textAlign:{xs:"center", sm:"left"}}} my={2} >
            <Typography variant='h5' >Lizard</Typography>
            <Typography my={0.4} fontSize={"22px"}
            color={"crimson"}
            variant='h5'>$12.99</Typography>
            <Typography variant='body1'>
            Une montre connectée qui vous permet de visualiser votre taux d'oxygène battement de coeur, caluler vos pas et vos heures de sommeil.
            </Typography>
            <Stack sx={{justifyContent:{xs:"center",sm:"left"}}} direction={"row"} gap={1} my={2}>
                {["src/img/bracelet-connectee-lige-m7-noir.jpg","src/img/xiaomi_redmi_smart_band_2_negro-1.png"].map(
                    (item) => { return(
                        <img key={item} src={item} alt=""
                        style={{borderRadius:3}} height={100} width={90} />
                    ) }
                )}
            </Stack>
            <Button sx={{mb:{xs:1,sm:0} }} variant="contained">
                <AddShoppingCartOutlined sx={{mr:1}} fontSize="small"/>
                Buy now
            </Button>
        </Box>
    </Box>
  )
}
