import { ExpandMore, ShoppingCartCheckoutOutlined } from "@mui/icons-material";
import { Container, IconButton, List, ListItem, ListItemText, Menu, MenuItem, Stack, Typography, styled, useTheme } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState } from "react";

const options = [
  'All Categories',
  'CARS',
  'Clothes',
  'Electronics',
];

const Search = styled('div')(({ theme }) => ({
  flexGrow : 0.4,
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  '&:hover': {
    border: "1px solid #333",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  minWidth: '300px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '330px',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color:'#777'
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


export default function Header2() {
  const theme = useTheme()
const [anchorEl, setAnchorEl] = React.useState(null);
const [selectedIndex, setSelectedIndex] = useState(0);
const open = Boolean(anchorEl);
const handleClickListItem = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleMenuItemClick = (
  event,
  index
) => {
  setSelectedIndex(index);
  setAnchorEl(null);
};

const handleClose = () => {
  setAnchorEl(null);
};

  return (
    <Container sx={{my:3, display:"flex", justifyContent:"space-between"}}>
      <Stack alignItems={"center"}>
        <ShoppingCartCheckoutOutlined/>
          <Typography variant="body2">E-commerce</Typography>
      </Stack>
      <Search 
      sx={{display:"flex",
      borderRadius:"22px",
      height:46,
      justifyContent:"space-between"}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
      <div>
      <List
        component="nav"
        aria-label="Device settings"
        // @ts-ignore
        sx={{ bgcolor: theme.palette.myColor.main,
        borderBottomRightRadius:"22px",
        borderTopRightRadius:"22px",
        p:0
       }}
      >
        <ListItem
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            secondary={options[selectedIndex]}
            sx={{ width: 93, textAlign:"center", "&:hover":{cursor: "pointer"}}}
          />
          <ExpandMore sx={{fontSize:"16px"}}/>
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
          sx={{fontSize:"11px"}}
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
    </Search>

<Stack direction = "row" alignItems="center">

      <IconButton aria-label="cart">
        <StyledBadge badgeContent={4} color="primary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
      <IconButton>
          <Person2OutlinedIcon/>
        </IconButton>
</Stack>


    </Container>
  )
}
