import { Box, Container, IconButton, ListItemIcon, ListItemText, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import WindowIcon from '@mui/icons-material/Window';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import {
  SportsEsportsOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  BikeScooterOutlined,
  Close,
} from '@mui/icons-material';
import Links from "./Links";

export default function Header3() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme()

  const [state, setState] = useState({
    top: false,
  });
  const toggleDrawer =
    (anchor, open) =>
      (event) => {
        if (
          event.type === 'keydown' &&
          ((event).key === 'Tab' ||
            (event).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  return (


    <Container sx={{ display: "flex",
     alignItems: "center",
      justifyContent: "space-between",
      mt:5 }}>

      <Box>
        <Button
          className="border"
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          // @ts-ignore
          sx={{
            // @ts-ignore
            width: 222, bgcolor: theme.palette.myColor.main,
            color: theme.palette.text.secondary
          }}
        >
          <WindowIcon />
          <Typography
            sx={{
              mx: 1,
              textTransform: "capitalize",
              padding: 0
            }}>
            Categories
          </Typography>
          <Box flexGrow={1} />
          <KeyboardArrowRightOutlinedIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          // @ts-ignore
          sx={{ ".MuiPaper-root": { width: "220px", bgcolor: theme.palette.myColor.main } }}
        >
          <MenuItem onClick={handleClose} >
            <ListItemIcon>
              <BikeScooterOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Bikes</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Electronics</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Books</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>
          </MenuItem>
        </Menu>
      </Box>

      {useMediaQuery('(min-width:1200px)') && (
        <Stack gap={4} direction={"row"} alignItems={"center"} >
          <Links title={"Home"}/>
          <Links title={"Mega Menu"}/>
          <Links title={"Full screen Menu"}/>
          <Links title={"Pages"}/>
          <Links title={"User Account"}/>
          <Links title={"Vendor Account"}/>
        </Stack>
      )}
      


      {useMediaQuery('(max-width:1200px)') && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{ ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": { height: "100%" } }}
      >

        <Box sx={{ width: 444, mx: "auto", mt: 6, position: "relative", pt: 10 }}>
          <IconButton onClick={toggleDrawer("top", false)}
            sx={{ ":hover": { color: "red", rotate: "180deg", transition: "0.3s" }, position: "absolute", top: 0, right: 10 }}>
            <Close />
          </IconButton>
          {[
            { mainLink: "Home", subLink: ["Link1", "Link2", "Link3"] },
            { mainLink: "Mega menu", subLink: ["Link1", "Link2", "Link3"] },
            { mainLink: "Full screen menu", subLink: ["Link1", "Link2", "Link3"] },
            { mainLink: "Pages", subLink: ["Link1", "Link2", "Link3"] },
            { mainLink: "User account", subLink: ["Link1", "Link2", "Link3"] },
            { mainLink: "Vendor account", subLink: ["Link1", "Link2", "Link3"] },
          ].map((item) => {
            return (

              <Accordion key={item.mainLink} elevation={0} sx={{ bgcolor: "initial" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.mainLink}</Typography>
                </AccordionSummary>
                <List sx={{ py: 0, my: 0 }}>
                  {item.subLink.map((link) => {
                    return (
                      <ListItem key={link} sx={{ py: 0, my: 0 }}>
                        <ListItemButton>
                          <ListItemText primary={link} />
                        </ListItemButton>
                      </ListItem>
                    )
                  }
                  )}


                </List>
              </Accordion>

            )
          })

          }
        </Box>
      </Drawer>
    </Container>
  )
}
