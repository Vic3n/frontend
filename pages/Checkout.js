import { CheckBox } from "@mui/icons-material";
import { Avatar, Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import assets from '../data/assets/assets.js';
import '../App.js';
const Checkout = () => {

    const [cartToPay, setCartToPay] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isChecked4, setIsChecked4] = useState(false);
    const [isChecked5, setIsChecked5] = useState(false);
    const [isChecked6, setIsChecked6] = useState(false);
    const [isChecked7, setIsChecked7] = useState(false);
    const [isChecked10, setIsChecked10] = useState(false);
    const [isChecked11, setIsChecked11] = useState(false);
    const [isChecked12, setIsChecked12] = useState(false);
    const [isChecked13, setIsChecked13] = useState(false);
    const [isChecked14, setIsChecked14] = useState(false);
    const [isChecked15, setIsChecked15] = useState(false);
    const [isChecked16, setIsChecked16] = useState(false);
    const [isChecked17, setIsChecked17] = useState(false);
    const [isChecked18, setIsChecked18] = useState(false);
    const [isChecked19, setIsChecked19] = useState(false);
    const [isChecked20, setIsChecked20] = useState(false);
    const [isChecked21, setIsChecked21] = useState(false);
    
    const handleOnChange = () => {
        if(isChecked === false){
            setIsChecked(true);
            setIsChecked1(false);
            setIsChecked2(false);
        }else{
            setIsChecked(!isChecked);
        }
    };

    const handleOnChange1 = () => {
        if(isChecked1 === false){
            setIsChecked1(true);
            setIsChecked(false);
            setIsChecked2(false);
        }else{
            setIsChecked1(!isChecked1);
        }
      };

    const handleOnChange2 = () => {
        if(isChecked2 === false){
            setIsChecked2(true);
            setIsChecked1(false);
            setIsChecked(false);
        }else{
            setIsChecked2(!isChecked2);
        }
    };

    const handleOnChange3 = () => {
        if(isChecked3 === false){
            setIsChecked3(true);
            setIsChecked4(false);
        }else{
            setIsChecked3(!isChecked3);
        }
    };

    const handleOnChange4 = () => {
        if(isChecked4 === false){
            setIsChecked4(true);
            setIsChecked3(false);
        }else{
            setIsChecked4(!isChecked4);
        }
    };


    const handleOnChange5 = () => {
        if(isChecked5 === false){
            setIsChecked5(true);
            setIsChecked6(false);
            setIsChecked7(false);
            setCartTotal(cartTotal);
        }else{
            setIsChecked5(!isChecked5);
        }
    };

    const handleOnChange6 = () => {
        if(isChecked6 === false){
            setIsChecked6(true);
            setIsChecked5(false);
            setIsChecked7(false);
            setCartTotal(cartTotal*1.05);
        }else{
            setIsChecked6(!isChecked6);

        }
    };

    const handleOnChange7 = () => {
        if(isChecked7 === false){
            setIsChecked7(true);
            setIsChecked6(false);
            setIsChecked5(false);
            setCartTotal(cartTotal*1.1);
        }else{
            setIsChecked7(!isChecked7);
        }
    };

    const handleOnChange10 = () => {
        setIsChecked10(!isChecked10);
    };
    const handleOnChange11 = () => {
        setIsChecked11(!isChecked11);
    };
    const handleOnChange12 = () => {
        setIsChecked12(!isChecked12);
    };
    const handleOnChange13 = () => {
        setIsChecked13(!isChecked13);
    };
    const handleOnChange14 = () => {
        setIsChecked14(!isChecked14);
    };
    const handleOnChange15 = () => {
        setIsChecked15(!isChecked15);
    };
    const handleOnChange16 = () => {
        setIsChecked16(!isChecked16);
    };
    const handleOnChange17 = () => {
        setIsChecked17(!isChecked17);
    };
    const handleOnChange18 = () => {
        setIsChecked18(!isChecked18);
    };
    const handleOnChange19 = () => {
        setIsChecked19(!isChecked19);
    };
    const handleOnChange20 = () => {
        setIsChecked20(!isChecked20);
    };
    const handleOnChange21 = () => {
        if(isChecked21 === false){
            setIsChecked21(true);
            setCartTotal(cartTotal+350);
        }else{
            setIsChecked21(false);
            setCartTotal(cartTotal-350);
        }
    };

    useEffect(() => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        if (cart) {
            setCartToPay(cart);
        }

        let total = localStorage.getItem('total_cart');
        if (total) {
            setCartTotal(total);
        }
    }, []);


    const cartContent = cartToPay.map((item, index) => {
        return (
            <Box key={index}>
                <Box
                    display="flex"
                    sx={{pt:2, pb:2, pl:2, pr: 2}}
                >
                    <Avatar src={item.image} sx={{mr:2}}/>
                    <Box display="flex" flexDirection={"column"} sx={{mr:15}}>
                        <Typography>{item.name}</Typography>
                        <Typography variant="subtitle2">{item.preparation} | {item.size} </Typography>
                        <Typography variant="subtitle2">Cantidad: {item.qty}</Typography>
                    </Box>
                    <Typography variant="h5">${item.price}</Typography>
                </Box>
            </Box>
        )
    });

    const personalInformationRender = (
        <>
        <Typography variant="h5" className="mb-2">Información Personal</Typography>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <TextField
                    id="standard-helperText"
                    label="Nombres"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="standard-helperText"
                    label="Apellidos"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="standard-helperText"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
        </Grid>
        </>
    );

    const paymentInformationRender = (
        <>
        <Typography variant="h5" className="mb-2 mt-4">Método de pago</Typography>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <div>
            <div className="efectivo">
                <input
                type="checkbox"
                id="efectivo"
                name="efectivo"
                value="Efectivo"
                checked={isChecked}
                onChange={handleOnChange}
                />
                Efectivo
            </div>
            <div className="result">
                {isChecked ? "Método de pago en efectivo seleccionado." : ""}
            </div>
            </div>


            <div>
            <div className="tarjeta">
                <input
                type="checkbox"
                id="tarjeta"
                name="tarjeta"
                value="Tarjeta"
                checked={isChecked1}
                onChange={handleOnChange1}
                />
                Tarjeta
            </div>
            <div className="result">
                {isChecked1 ? "Método de pago mediante Tarjeta seleccionado." : ""}
            </div>
            </div>


            <div>
            <div className="webpay">
                <input
                type="checkbox"
                id="webpay"
                name="webpay"
                value="WebPay"
                checked={isChecked2}
                onChange={handleOnChange2}
                />
                WebPay
            </div>
            <div className="result">
                {isChecked2 ? "Método de pago por aplicación WebPay seleccionado." : ""}
            </div>
            </div>
            </Grid>
        </Grid>
        </>
    );

    const billingAddress = (
        <>
        <Typography variant="h5" className="mb-2 mt-4">Forma de retiro</Typography>
        <Grid container spacing={0}>
        <div>
            <div className="local">
                <input
                type="checkbox"
                id="local"
                name="local"
                value="local"
                checked={isChecked3}
                onChange={handleOnChange3}
                />
                 Retiro en el local
            </div>
            <div className="result">
                {isChecked3 ? "Estás por retirar en el local." : ""}
            </div>
            </div>
            <Grid item xs={12}>
                <TextField
                    id="standard-helperText"
                    label="Comúna"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="standard-helperText"
                    label="Local"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>





            
            <div>
            <div className="local">
                <input
                type="checkbox"
                id="local"
                name="local"
                value="local"
                checked={isChecked4}
                onChange={handleOnChange4}
                />
                 Entrega a domicilio
            </div>
            <div className="result">
                {isChecked4 ? "Estás por recibir tu pedido a domicilio." : ""}
            </div>
            </div>
            <Grid item xs={12}>
                <TextField
                    id="standard-helperText"
                    label="Comúna"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="standard-helperText"
                    label="Calle"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    id="standard-helperText"
                    label="Número"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    id="standard-helperText"
                    label="Depto."
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
        </Grid>
        </>
    );

    const alertComprar = () => {
        alert('¡Muchas gracias!, pronto recibirás tu pedido.');
    }

    const tips = (
        <>
        <Typography variant="h5" className="mb-2 mt-4">Propinas</Typography>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <div>
            <div className="cero">
                <input
                type="checkbox"
                id="cero"
                name="cero"
                value="Cero"
                checked={isChecked5}
                onChange={handleOnChange5}
                />
                0%
            </div>
            <div className="result">
                {isChecked5 ? "Sin propina." : ""}
            </div>
            </div>


            <div>
            <div className="cinco">
                <input
                type="checkbox"
                id="cinco"
                name="cinco"
                value="Cinco"
                checked={isChecked6}
                onChange={handleOnChange6}
                />
                5%
            </div>
            <div className="result">
                {isChecked6 ? "Propina del 5%." : ""}
            </div>
            </div>


            <div>
            <div className="diez">
                <input
                type="checkbox"
                id="diez"
                name="diez"
                value="Diez"
                checked={isChecked7}
                onChange={handleOnChange7}
                />
                10%
            </div>
            <div className="result">
                {isChecked7 ? "Propina del 10%." : ""}
            </div>
            </div>
            </Grid>
        </Grid>
        </>
    )

    const others = (
        <>
        <Typography variant="h5" className="mb-2 mt-4">Agrega a tu compra</Typography>
        <Grid container spacing={2}>
            <Grid item xs={6}>
            <div>
            <div className="coca_lata">
                <input
                type="checkbox"
                id="coca_lata"
                name="coca_lata"
                value="coca_lata"
                checked={isChecked10}
                onChange={handleOnChange10}
                />
                Coca-cola Lata
            </div>
            <div className="result">
                {isChecked10 ? "+$750" : ""}
            </div>
            </div>


            <div>
            <div className="coca_medio">
                <input
                type="checkbox"
                id="coca_medio"
                name="coca_medio"
                value="coca_medio"
                checked={isChecked11}
                onChange={handleOnChange11}
                />
                Coca-cola Medio litro
            </div>
            <div className="result">
                {isChecked11 ? "+$1050" : ""}
            </div>
            </div>


            <div>
            <div className="coca_litro_medio">
                <input
                type="checkbox"
                id="coca_litro_medio"
                name="coca_litro_medio"
                value="coca_litro_medio"
                checked={isChecked12}
                onChange={handleOnChange12}
                />
                Coca-cola Litro 1/2
            </div>
            <div className="result">
                {isChecked12 ? "+$1650" : ""}
            </div>
            </div>

            

            <div>
            <div className="coca_3_litros">
                <input
                type="checkbox"
                id="coca_3_litros"
                name="coca_3_litros"
                value="coca_3_litros"
                checked={isChecked13}
                onChange={handleOnChange13}
                />
                Coca-cola 3 Litros
            </div>
            <div className="result">
                {isChecked13 ? "+$2150" : ""}
            </div>
            </div>



            <div>
            <div className="fanta_lata">
                <input
                type="checkbox"
                id="fanta_lata"
                name="fanta_lata"
                value="fanta_lata"
                checked={isChecked17}
                onChange={handleOnChange17}
                />
                Fanta Lata
            </div>
            <div className="result">
                {isChecked17 ? "+$750" : ""}
            </div>
            </div>


            <div>
            <div className="fanta_medio">
                <input
                type="checkbox"
                id="fanta_medio"
                name="fanta_medio"
                value="fanta_medio"
                checked={isChecked16}
                onChange={handleOnChange16}
                />
                Fanta Medio litro
            </div>
            <div className="result">
                {isChecked16 ? "+$1050" : ""}
            </div>
            </div>


            <div>
            <div className="fanta_litro_medio">
                <input
                type="checkbox"
                id="fanta_litro_medio"
                name="fanta_litro_medio"
                value="fanta_litro_medio"
                checked={isChecked15}
                onChange={handleOnChange15}
                />
                Fanta Litro 1/2
            </div>
            <div className="result">
                {isChecked15 ? "+$1650" : ""}
            </div>
            </div>

            

            <div>
            <div className="fanta_3_litros">
                <input
                type="checkbox"
                id="fanta_3_litros"
                name="fanta_3_litros"
                value="fanta_3_litros"
                checked={isChecked14}
                onChange={handleOnChange14}
                />
                Fanta 3 Litros
            </div>
            <div className="result">
                {isChecked14 ? "+$2150" : ""}
            </div>
            </div>

            <div>
            <div className="salsa_ajo">
                <input
                type="checkbox"
                id="salsa_ajo"
                name="salsa_ajo"
                value="salsa_ajo"
                checked={isChecked18}
                onChange={handleOnChange18}
                />
                Salsa de Ajo
            </div>
            <div className="result">
                {isChecked18 ? "+$350" : ""}
            </div>
            </div>

            <div>
            <div className="salsa_bbq">
                <input
                type="checkbox"
                id="salsa_bbq"
                name="salsa_bbq"
                value="salsa_bbq"
                checked={isChecked19}
                onChange={handleOnChange19}
                />
                Salsa BBQ
            </div>
            <div className="result">
                {isChecked19 ? "+$350" : ""}
            </div>
            </div>

            <div>
            <div className="salsa_picante">
                <input
                type="checkbox"
                id="salsa_picante"
                name="salsa_picante"
                value="salsa_picante"
                checked={isChecked20}
                onChange={handleOnChange20}
                />
                Salsa Picante
            </div>
            <div className="result">
                {isChecked20 ? "+$350" : ""}
            </div>
            </div>

            <div>
            <div className="salsa_pizza">
                <input
                type="checkbox"
                id="salsa_pizza"
                name="salsa_pizza"
                value="salsa_pizza"
                checked={isChecked21}
                onChange={handleOnChange21}
                />
                Salsa de Pizza
            </div>
            <div className="result">
                {isChecked21 ? "+$350" : ""}
            </div>
            </div>
            </Grid>
        </Grid>
        </>
    )

    return (
        <Grid container spacing={2} className="mt-2">
            <Grid item xs={12} sm={7}>
                {personalInformationRender}
                {paymentInformationRender}
                {billingAddress}
                {tips}
                {others}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Button onClick={alertComprar} variant="contained" color="success" className="mt-4 mb-4">Completar pago</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/store">Cancelar compra</a>
            </Grid>
            <Grid item xs={12} sm={5}>
                <Box
                    sx={{p: 2, background: "#E8E8E8", width: '100%',}}
                    display="flex"
                    justifyContent={"center"}
                    flexDirection="column"
                    alignItems="center"
                >
                    <Typography variant="h5" className="mb-3">Carro Actual</Typography>
                    <Paper>
                        {cartContent}
                    </Paper>
                    <Typography variant="h5" className="mt-3">Total: ${cartTotal}</Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Checkout;