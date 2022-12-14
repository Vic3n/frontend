import Box from '@mui/material/Box';
import {Grid, Container, Link}  from '@mui/material';
import assets from '../data/assets/assets';


function Footer() {
    return (
        <footer>
        <Box
            px={{xs:2, sm: 10}}
            py={{xs:5, sm: 7}}
            bgcolor="#b89a70 "
            color="white"
        >
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3}>
                    <img  sx={{ display: { xs: "none", md: "flex" }, mr: 2 }} style={{height: 55}} src={assets[3].imagen}/>
                        <Box borderBottom={0}></Box>
                        <Box>
                            <Link color="inherit" href="/">
                                Inicio
                            </Link>
                        </Box>
                        <Box>
                            <Link color="inherit" href="/store">
                                Catálogo de pizzas
                            </Link>
                        </Box>
                        <Box>
                            <Link color="inherit" href="/weapon">
                                Personaliza a tu gusto
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Box borderBottom={0}>SOPORTE</Box>
                        <Box>
                            <Link color="inherit" href="/">
                                Contacto
                            </Link>
                        </Box>
                        <Box>
                            <Link color="inherit" href="/">
                                Preguntas frecuentes
                            </Link>
                        </Box>
                        <Box>
                            <Link color="inherit" href="/">
                                Trabaja con nosotros
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Box borderBottom={0}>LEGAL</Box>
                        <Box>
                            <Link color="inherit" href="/">
                                Aviso Legal
                            </Link>
                        </Box>
                        <Box>
                            <Link color="inherit" href="/">
                                Políticas de privacidad
                            </Link>
                        </Box>
                        <Box>
                            <Link color="inherit" href="/">
                                Políticas de Cookies
                            </Link>
                        </Box>
                        <Box>
                            <Link color="inherit" href="/">
                                Términos y condiciones
                            </Link>
                        </Box>
                        <Box>
                            <Link color="inherit" href="/">
                                Código ético
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>UBICACIÓN</Box>
                        <Box>
                            <iframe
                                src="https://goo.gl/maps/zKKuBZuh34vB5g3W7" 
                                width="552"
                                height="130"
                                style={{border: 0}}
                                loading="lazy"
                                title='map'
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        </footer>
    )
}

export default Footer;