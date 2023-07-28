import Fab from '@mui/material/Fab';
import { KeyboardArrowUp } from '@mui/icons-material';
import { Zoom, useScrollTrigger } from '@mui/material';

export default function ScrollToTop() {
  return (
    <Zoom  in={useScrollTrigger()}>
        <Fab
    onClick={(first) => { 
        window.scrollTo(0,0)
     }}
    sx={{position:"fixed",bottom:33, right:33}}
    color="primary" aria-label="add"  variant="extended" >
        <KeyboardArrowUp fontSize="medium"/>
        </Fab>
    </Zoom >
  )
}