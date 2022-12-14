import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import pages from '../data/pages';
import { Badge } from '@mui/material';
import assets from '../data/assets/assets';


function NavBar({openCart, cart}) {

    const [anchorNav, setAnchorNav] = useState(null);

    const handleOpenNavMenu = (event) => {setAnchorNav(event.currentTarget);};
    const handleCloseNavMenu = () => {setAnchorNav(null);};

    return (
        <AppBar position="static" style={{ background: '#FFFFFF' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Title XL */}
                    <img  sx={{ display: { xs: "none", md: "flex" }, mr: 2 }} style={{height: 45}} src={assets[0].imagen}/>
                    {/* Responsive XS */}
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left"
                            }}
                            open={Boolean(anchorNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" }
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.href}
                                    href={page.href}
                                    onClick={handleCloseNavMenu}
                                >
                                <Typography textAlign="center">{page.text}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    
                    {/* Responsive XL */}
                    <Box sx={{
                        flexGrow: 1,
                        display: { xs: "none", md: "flex" },
                        justifyContent: "center",
                        alignItems: "center",
                        mr: 20
                    }}>
                        {pages.map((page) => (
                        <Button
                            key={page.href}
                            href={page.href}
                            sx={{ my: 2, px: 2,color: "black", display: "block" }}
                        >
                            {page.text}
                        </Button>
                        ))}
                    </Box>
                    {/* Carrito de compras */}
                    <Box sx={{ flexGrow: 0 }} onClick={() => openCart()}>
                        <Tooltip title="Carrito de compras">
                            <Badge badgeContent={cart && cart.length} color="secondary">
                                {/* Title XL */}
                                <img  sx={{ display: { xs: "none", md: "flex" }, mr: 2 }} style={{height: 45}} src={assets[1].imagen}/>
                            </Badge>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;
